import GamemodeLink from "../ui/gamemode-selection/GamemodeLink";

export default function Gamemodes() {
  return (
    <div className="sm:mt-20 mt-10 text-center">
      <h1 className="sm:text-2xl md:text-4xl font-semibold mb-10">
        choose a gamemode:
      </h1>
      <GamemodeLink gamemode="gamemode 1" />
      <GamemodeLink gamemode="gamemode 2" />
      <GamemodeLink gamemode="gamemode 3" />
    </div>
  );
}
