import { connect } from "@/src/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/src/models/userSchema";
import Player from "@/src/models/playerSchema";
import jwt from "jsonwebtoken";

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

    user[gameMode] = score;
    const res = NextResponse.json({
      message: "user's high score has been updated",
      success: true,
    });
    const userCookie = req.cookies.get("user")?.value;
    if (userCookie) {
      const verifiedCookie: any = jwt.verify(
        userCookie,
        process.env.TOKEN_SECRET!,
      );
      verifiedCookie[gameMode] = score;
      const updatedCookie = jwt.sign(verifiedCookie, process.env.TOKEN_SECRET!);
      res.cookies.set("user", updatedCookie, { httpOnly: true });
    }

    if (gameMode === "compHs") {
      /*       const player = await Player.findById(userId);
      if (!player) {
        const newPlayer = new Player({
          username: user.username,
          userId: user._id,
          compHs: score,
          compRank: "10+",
        });
        await newPlayer.save();
      } else {
        player.compHs = score;
        await player.save();
      }
      //RE-SORT TOP 10 PLAYERS AND GIVE THEM RANKS
      const topTen = await Player.find()
        .sort({ compHs: "asc", _id: "asc" })
        .limit(10)
        .exec();
      console.log(topTen);
 */
    }

    await user.save();

    return res;
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: 500, success: false });
  }
}
