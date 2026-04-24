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

    if (gameMode === "compHs") {
      let player = await Player.findOne({ userId });
      if (!player) {
        player = new Player({
          username: user.username,
          userId: user._id,
          compHs: score,
        });
      } else {
        player.compHs = score;
      }
      //RE-SORT TOP 10 PLAYERS AND GIVE THEM RANKS
      await player.save();
      const topTen = await Player.find()
        .sort({ compHs: "desc", _id: "asc" })
        .limit(10)
        .exec();
      //UPDATE RANKS OF TOP 10 PLAYERS AFTER ADDING NEW PLAYER
      topTen.forEach(async (player, index) => {
        await User.findByIdAndUpdate(player.userId, {
          compRank: (index + 1).toString(),
        });
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
      if (gameMode === "compHs") {
        verifiedCookie.compRank = user.compRank;
      }
      const updatedCookie = jwt.sign(verifiedCookie, process.env.TOKEN_SECRET!);
      res.cookies.set("user", updatedCookie, { httpOnly: true });
    }

    await user.save();

    return res;
  } catch (e: any) {
    return NextResponse.json({ error: e.message, status: 500, success: false });
  }
}
