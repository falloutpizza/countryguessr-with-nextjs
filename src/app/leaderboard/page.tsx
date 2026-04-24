import Player from "@/src/models/playerSchema";
import { connect } from "@/src/dbConfig/dbConfig";

import Rank from "../ui/leaderboard/Rank";

connect();
export default async function Leaderboard() {
  const topTen = await Player.find()
    .sort({ compHs: "desc", _id: "asc" })
    .limit(10)
    .exec();

  return (
    <div className="mt-15 max-h-7/10 m-5">
      <h1 className="text-3xl font-semibold m-3 text-underline">leaderboard</h1>
      {topTen.map(function myFunction(player, index) {
        return <Rank player={player} rank={index + 1} key={index} />;
      })}
    </div>
  );
}
