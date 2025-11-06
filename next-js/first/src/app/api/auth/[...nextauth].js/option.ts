import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/app/model/User";
// import { email } from "zod";
// import { setHeapSnapshotNearHeapLimit } from "v8";

export const authOptions: NextAuthOptions = {
   providers: [
    CredentialProvider({
      id: "credentaials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password"}
           },
           async authorize(credentaials: any):  Promise<any>{
            await dbConnect()
            try {
             const user =   await UserModel.findOne({
                  $or: [
                    {emails: credentaials.identifier},
                    {username: credentaials.identifier}
                    


                  ]
               })
               if (!user) {
                 throw new Error('No user found with this email')
               }
             if (user.isVerified) {
               throw new Error('Please verify your accound before login ')
              }
           const isPasswordCorrect =   await bcrypt.compare(credentaials. password, user.password)
           if (isPasswordCorrect) {
             return user
           }  else {
            throw new Error('Incorrect Password  ')

           }


            } catch (err: any) {
              throw new Error(err)

            }

           }
    })
 ],

 callbacks: {

   async jwt({ token, user }) {
     if (user) {
        token._id =  user._id?.toString()
        token.isVerified = user.isVerified;
        token.isAcceptingMessages =  user.isAcceptingMessage;
        token.username = user.username
     }
      return token
   },

   async session({ session, token}) {
    if (token) {
        session.user._id = token._id
        session.user.isVerified = token.isVerified
        session.user.isAcceptingMessage = token. isAcceptingMessage
        session.user.username = token.username
    }

      return session
   },
  


 },
  pages: {
    signIn: '/sign-in'
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET,
}