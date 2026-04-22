import GamemodeLink from "../gamemode-selection/GamemodeLink";

export default function UsersMain({
  curUser,
}: {
  curUser: { username: string };
}) {
  return (
    <div className="bg-white w-9/10 border-1 border-black rounded-2xl mx-auto mt-20">
      <h1 className="text-3xl font-semibold">{curUser.username}'s account</h1>
    </div>
  );
}
