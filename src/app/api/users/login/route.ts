import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { LoginFormSchema } from "@/src/lib/schemas";
import * as z from "zod";
import User from "@/src/models/userSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const validatedFields = LoginFormSchema.safeParse({
      username: username,
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
    const checkPassword =
      user && (await bcrypt.compare(password, user.password));
    if (!user || !checkPassword) {
      return NextResponse.json({
        success: false,
        errors: {
          username: { errors: ["error with entered credentials!"] },
          password: { errors: ["error with entered credentials!"] },
        },
        status: 400,
      });
    }

    //making token for user session
    const tokenPayload = {
      id: user._id,
      username: user.username,
      ogHs: user.ogHs,
      hardHs: user.hardHs,
      compRank: user.compRank,
    };
    const token = jwt.sign(tokenPayload, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const res = NextResponse.json({
      message: "successfully logged in bro",
      success: true,
    });

    res.cookies.set("user", token, { httpOnly: true });
    return res;
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: 500 });
  }
}
