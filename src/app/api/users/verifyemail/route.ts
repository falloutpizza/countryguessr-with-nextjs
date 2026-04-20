import { connect } from "@/src/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server"
import User from "@/src/models/userSchema"

connect()

export async function POST(req: NextRequest){
    try{
        const {token} = await req.json()
        const user = await User.findOne({verifyToken:token, verifyTokenExpiry:{$gt: Date.now()}})

        if (!user){
            return NextResponse.json({error: "invalid or expired verification link ", status: 400})
        }

        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        console.log(user)

        await user.save()

        return NextResponse.json({message:"user is verified now bro", success:true})

    }catch(e:any){
        return NextResponse.json({error: e.message, status: 500})
    }
}