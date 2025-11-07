'use client'
import {zodResolver} from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z  from "zod"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useDebounceValue } from 'usehooks-ts'
import { toast } from "sonner"
import axios, {AxiosError} from 'axios'
import { ApiResponse } from "@/types/ApiResponse"
import { signUpSchema } from "@/schemas/signUpSchema"
import { useRouter } from "next/navigation"
import { Form, FormDescription, FormField, FormLabel, FormMessage, FormControl, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const page = () => {
  const [username, setUsername] = useState('')
  const [usernameMessage, setUsernameMessage] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmiting] = useState(false)


   const debouncedUsername = useDebounceValue(username, 300)
    const router = useRouter();

   // zod implementation 
 const form = useForm<z.infer<typeof signUpSchema>>({
  resolver: zodResolver(signUpSchema),
   defaultValues: {
     username: " ",
     email: " ",
     password: " "
   }

 })

  useEffect(() => {
    const CheckingUsernameUnique = async () => {
         if (debouncedUsername) {
          setIsCheckingUsername(true)
          setUsernameMessage("")
           try {
        const response = await axios.get(`/api/check-username-unique?username=${debouncedUsername}`)
        setUsernameMessage(response.data.message)
           } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>;
            setUsernameMessage(
              axiosError.response?.data.message ?? "Error checking username"
            )
           } finally {
            setIsCheckingUsername(false)
           }
         }
    }
    CheckingUsernameUnique()

  } , [debouncedUsername])

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
  setIsSubmiting(true)
  try {
    const response = await axios.post<ApiResponse>('/api/sign-up', data)
    toast.success('Success', {
      description: response.data.message
    })
    router.replace(`/verify/${username}`)
    setIsSubmiting(false)
  } catch (error) {
    console.error("Error in signup of user", error)
     const axiosError = error as AxiosError<ApiResponse>;
       let errorMessage = axiosError.response?.data.message
       toast.error("signup failed", {
        description: errorMessage
       })
    setIsSubmiting(false)
  }
  }

   return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
     <div className="text-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6"> Join Mystery Message </h1>
      <p className="mb-4"> Sign up to start your anonymous adventure </p>
     </div>

     <Form  {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder='username' {...field}
              onChange={(e) => {
                 field.onChange(e)
                 setUsername(e.target.value)
              }}
              />
            </FormControl>
           <FormMessage />
          </FormItem>
        )}
        />
         <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder='email' 
              {...field}
 />
            </FormControl>
           <FormMessage />
          </FormItem>
        )}
        />
          <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder='email' 
              {...field}
 />
            </FormControl>
           <FormMessage />
          </FormItem>
        )}
        />
      </form>
     </Form>
      </div>
    </div>
  )
}


export default page


