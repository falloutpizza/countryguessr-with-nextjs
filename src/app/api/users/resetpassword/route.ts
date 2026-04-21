import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/src/models/userSchema";
import bcrypt from "bcryptjs";

connect();

export async function POST(req: NextRequest) {
  try {
    const { token, newPassword } = await req.json();
    const user = await User.findOne({
      forgetPasswordToken: token,
      forgetPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({
        error: "invalid or expired password reset link",
        status: 400,
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({
      message: "user password got reset",
      success: true,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: 500, success: false });
  }
}
