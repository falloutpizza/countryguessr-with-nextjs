import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const res = NextResponse.json({
      message: "successfully logged out",
      success: true,
    });

    res.cookies.delete("user");
    return res;
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: 500 });
  }
}
