import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import HighScore from "./HighScore";
import DeleteAccount from "./DeleteAccount";

export default async function UsersMain() {
  const cookieStore = await cookies();
  const user = cookieStore.get("user")?.value;
  let verifiedUser: any = undefined;
  if (user) {
    verifiedUser = jwt.verify(user, process.env.TOKEN_SECRET!);
  }

  return (
    <div className="bg-white w-9/10 border-1 border-black rounded-2xl mx-auto text-left mt-20 h-7/10">
      <h1 className="text-3xl font-semibold sm:ml-5 m-2 mt-5">
        {verifiedUser.username}'s account!
      </h1>
      <div className="flex justify-around">
        <HighScore
          gamemode="the original countryguessr"
          score={verifiedUser.ogHs}
        />
        <HighScore
          gamemode="for the challenge enthusaists"
          score={verifiedUser.hardHs}
        />
        <HighScore
          gamemode="competitive queue"
          score={verifiedUser.compHs}
          rank={verifiedUser.compRank}
        />
      </div>
      <DeleteAccount />
    </div>
  );
}
