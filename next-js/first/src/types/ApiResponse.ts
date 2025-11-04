import { Message } from "@/app/model/User";

export interface ApiResponse{
  success: boolean;
  message: string;
  isAccesptingMessages?: boolean
  messages?: Array<Message>

}