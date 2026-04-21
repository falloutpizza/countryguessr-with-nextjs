import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import sendEmail from "@/src/helpers/services/mailer";

connect();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    sendEmail({ email, emailType: "RESET", userId: "" });
    return NextResponse.json({
      message: "user password got reset",
      success: true,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: 500, success: false });
  }
}
