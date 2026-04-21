import RightArrow from "../../globals/icons/RightArrow";

export default function LoginLink({
  onMouseEnter,
  linkName,
}: {
  onMouseEnter?: () => void;
  linkName: string;
}) {
  if (linkName !== "login") {
    linkName = "signup";
  }
  return (
    <a
      href={`/${linkName}`}
      className="hover:underline sm:ml-5 m-2 "
      onMouseEnter={onMouseEnter}
    >
      {linkName}
      {linkName !== "login/sign up" && <RightArrow />}
    </a>
  );
}
