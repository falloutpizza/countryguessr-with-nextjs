import RightArrow from "../../globals/icons/RightArrow";

export default function LoginLink({
  onMouseEnter,
  linkName,
}: {
  onMouseEnter?: () => void;
  linkName: string;
}) {
  return (
    <a
      href=""
      className="hover:underline ml-5 m-2 "
      onMouseEnter={onMouseEnter}
    >
      {linkName}
      {linkName !== "login/sign up" && <RightArrow />}
    </a>
  );
}
