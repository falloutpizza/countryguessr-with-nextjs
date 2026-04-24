import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/src/models/userSchema";
import jwt from "jsonwebtoken";

connect();

export async function DELETE(req: NextRequest) {
  try {
    const user = req.cookies.get("user")?.value;
    if (user) {
      const verifiedUser: any = jwt.verify(user, process.env.TOKEN_SECRET!);
      const userId = verifiedUser.id;
      try {
        await User.findByIdAndDelete(userId);
      } catch (e: any) {
        return NextResponse.json({
          error: e.message,
          status: 400,
          success: false,
        });
      }
      const res = NextResponse.json({
        message: "successfully deleted!!",
        status: 400,
        success: true,
      });
      res.cookies.delete("user");
      return res;
    }

    return NextResponse.json({ error: "", status: 500, success: false });
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: 500, success: false });
  }
}
