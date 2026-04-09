import GamemodeLink from "../ui/gamemode-selection/GamemodeLink";

export default function Gamemodes() {
  return (
    <div className="sm:mt-20 mt-10 text-center">
      <h1 className="sm:text-2xl md:text-4xl font-semibold mb-10">
        choose a gamemode:
      </h1>
      <GamemodeLink
        gamemode="the original countryguessr"
        desc="guess the country using its silhouette and three given hints"
      />
      <GamemodeLink
        gamemode="up for a challenge?"
        desc="same as normal mode, but the country's silhouette is initially blurred and using hints costs more points"
      />
      <GamemodeLink
        gamemode="competitive queue"
        desc="the original countryguessr, but timed with a global leaderboard"
      />
    </div>
  );
}
