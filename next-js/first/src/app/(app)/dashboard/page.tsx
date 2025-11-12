'use client'
import { Description } from "@radix-ui/react-alert-dialog"
import axios from "axios"
import { useSession } from "next-auth/react"
import { title } from "process"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AcceptMessageSchema } from "@/schemas/acceptMessageSchema"
import { ApiResponse } from "@/types/ApiResponse"
import { Message } from "@/app/model/User"
import { AxiosError } from "axios"
import { User } from "next-auth"

const page = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSwitchLoading, setIsSwitchLoading] = useState(false)

  // toast is imported directly from sonner

  const handleDeleteMessage = (messageId: string) => {
    setMessages(messages.filter((message) => message._id !== messageId))
  }

  const {data: session} = useSession()

  const form = useForm({
    resolver: zodResolver(AcceptMessageSchema)
  })

  const {register, watch, setValue} = form;

  const acceptMessages = watch('acceptMessages')

  const fetchAcceptMessage = useCallback(async () => {
    setIsSwitchLoading(true)
    try {
      const response =  await axios.get<ApiResponse>('/api/accept-messages')
      setValue('acceptMessages', response.data.isAcceptingMessage!)
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>
      toast.error(axiosError.response?.data.message || "Failed to fetch message settings")
    } finally{
      setIsSwitchLoading(false)
    }
  }, [setValue, toast])

  const fetchMessages = useCallback(async (refresh: boolean = false) => {
    setIsLoading(true)
    setIsSwitchLoading(false)
    try {
      const response = await axios.get<ApiResponse>('/api/get-messages')
      setMessages(response.data.messages || [])
      if (refresh) {
        toast.success("Refreshed Messages", {
          description: "showing latest messages",
        })
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast.error(axiosError.response?.data.message ||
        "Failed to fetch message settings")
    } finally {
      setIsLoading(false)
      setIsSwitchLoading(false)
    }
  }, [setIsLoading, setMessages, toast])

  useEffect(() => {
    if (!session || !session.user) return 
    fetchMessages()
    fetchAcceptMessage()
    
  }, [session, setValue, fetchAcceptMessage, fetchMessages])

  const handleSwitchChange = async() => {
    try {
      const response = await axios.post<ApiResponse>('/api/accept-messages', {
        acceptMessages: !acceptMessages
      })
      setValue('acceptMessages', !acceptMessages)
      toast.success(response.data.message)
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast.error(axiosError.response?.data.message ||
        "Failed to update message settings")
    }
  }

  const user = session?.user as User
  const {username} = user || {}

  const baseUrl = typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.host}` : ''
  const profileUrl = `${baseUrl}/u/${username}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileUrl)
    toast.success("URL copied", {
      description: "Profile URL has been copied to clipboard"
    })
  }

  if (!session || !session.user) {
     return <div>Please login </div>

  }
  
  return (
    <div>Dashboard</div>
  )
}

export default page