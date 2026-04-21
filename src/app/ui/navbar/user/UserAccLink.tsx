import RightArrow from "../../globals/icons/RightArrow";

export default function UserAccLink({
  onMouseEnter,
  linkName,
}: {
  onMouseEnter?: () => void;
  linkName: string;
}) {
  const link = linkName.replaceAll(" ", "-");
  return (
    <a
      href={`/${linkName}`}
      className="hover:underline sm:ml-5 m-2 "
      onMouseEnter={onMouseEnter}
    >
      {linkName} <RightArrow />
    </a>
  );
}
