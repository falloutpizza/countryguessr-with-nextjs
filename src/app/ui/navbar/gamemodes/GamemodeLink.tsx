import RightArrow from "../../globals/icons/RightArrow";

export default function GamemodeLink({
  onMouseEnter,
  linkName,
}: {
  onMouseEnter?: () => void;
  linkName: string;
}) {
  let route: string = linkName.replaceAll(" ", "-");
  return (
    <a
      href={`/gamemodes/${route}`}
      className="hover:underline sm:ml-5 m-2 "
      onMouseEnter={onMouseEnter}
    >
      {linkName}
      {linkName !== "gamemodes" && <RightArrow />}
    </a>
  );
}
