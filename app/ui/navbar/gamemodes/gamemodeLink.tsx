import RightArrow from "../../globals/icons/RightArrow";

export default function GamemodeLink({
  onMouseEnter,
  linkName,
}: {
  onMouseEnter?: () => void;
  linkName: string;
}) {
  return (
    <a
      href=""
      className="hover:underline sm:ml-5 m-2 "
      onMouseEnter={onMouseEnter}
    >
      {linkName}
      {linkName !== "gamemodes" && <RightArrow />}
    </a>
  );
}
