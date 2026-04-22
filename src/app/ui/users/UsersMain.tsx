export default function UsersMain({
  curUser,
}: {
  curUser: { username: string };
}) {
  return (
    <div className="bg-white w-9/10 border-1 border-black rounded-2xl mx-auto text-left mt-20">
      <h1 className="text-2xl font-semibold sm:ml-5 m-2">
        {curUser.username}'s account
      </h1>
    </div>
  );
}
