import LoginLink from "./login/loginLink";
import GamemodeLink from "./gamemodes/gamemodeLink";

export default function NavHover({
  hovered,
  setHovered,
}: {
  hovered: string;
  setHovered: (h: string) => void;
}) {
  //setting bg color
  let bgColor: string = "bg-orange-400";
  if (hovered === "gamemodes") {
    bgColor = "bg-lime-300";
  }

  //setting class name
  let classes: string;
  classes = hovered
    ? `border-black rounded-2xl border-2 block ml-4 text-left text-sm w-60 transition-all duration-200 flex flex-col ${bgColor}`
    : "rounded-2xl ml-4  invisible";

  return (
    <div className={classes} onMouseEnter={() => setHovered(hovered)}>
      {hovered === "login" && (
        <>
          <LoginLink linkName="login" />
          <LoginLink linkName="sign up" />
        </>
      )}
      {hovered === "gamemodes" && (
        <>
          <GamemodeLink linkName="gamemode 1" />
          <GamemodeLink linkName="gamemode 2" />
          <GamemodeLink linkName="gamemode 3" />
        </>
      )}
    </div>
  );
}
