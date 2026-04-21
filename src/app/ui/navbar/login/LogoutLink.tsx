import { useRouter } from "next/navigation";

export default function LogoutLink() {
  const router = useRouter();
  async function handleClick() {
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    const data = await response.json();
    router.push("/login");
  }
  return (
    <form action={handleClick} className="hover:underline sm:ml-5 m-2 ">
      <input
        type="submit"
        className="hover:underline cursor-pointer"
        value="logout"
      />
    </form>
  );
}
