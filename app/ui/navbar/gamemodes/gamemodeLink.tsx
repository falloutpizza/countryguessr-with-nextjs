export default function Link({
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
    </a>
  );
}
