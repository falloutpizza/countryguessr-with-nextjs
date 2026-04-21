import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { SignupFormSchema, FormState } from "@/src/lib/schemas";
import * as z from "zod";
import User from "@/src/models/userSchema";
import bcrypt from "bcryptjs";
import sendEmail from "@/src/helpers/services/mailer";

connect();

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    const validatedFields = SignupFormSchema.safeParse({
      username: username,
      email: email,
      password: password,
    });

    if (!validatedFields.success) {
      return NextResponse.json({
        success: false,
        errors: z.treeifyError(validatedFields.error).properties,
        status: 400,
      });
    }

    const user = await User.findOne({ username });
    if (user) {
      return NextResponse.json({
        success: false,
        errors: { username: { errors: ["this user already exists!"] } },
        status: 400,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();

    //send verification mail
    sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "successfully signed in bro",
      success: true,
      savedUser,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: 500 });
  }
}
