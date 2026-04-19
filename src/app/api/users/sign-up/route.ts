import { connect } from "@/src/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server"
import User from "@/src/models/userSchema"
import bcrypt from "bcryptjs"

connect()

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { username, email, password } = await req.json()

        const user = await User.findOne({ username })
        if (user) {
            return NextResponse.json({ error: "this user already exists!", status: 400 })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save()

        //send verification mail
        //add using mailer function

        return NextResponse.json({message:"successfully signed in bro", success:true, savedUser})

    } catch (e: any) {
        return NextResponse.json({ error: e.message, status: 500 })
    }
}