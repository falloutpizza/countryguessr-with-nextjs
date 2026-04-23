import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/src/models/userSchema";

connect();

export async function POST(req: NextRequest) {
  try {
    const { score, gameMode, userId } = await req.json();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({
        error: "no valid user logged in",
        status: 400,
        success: false,
      });
    }

    if (gameMode === "ogHs") {
      user.ogHs = score;
    } else if (gameMode === "hardHs") {
      user.hardHs = score;
    }

    await user.save();

    return NextResponse.json({
      message: "user's high score has been updated",
      success: true,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: 500, success: false });
  }
}
