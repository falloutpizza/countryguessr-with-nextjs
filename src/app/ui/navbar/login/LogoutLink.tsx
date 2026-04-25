import { useRouter } from "next/navigation";
import { useAuthStore } from "@/src/store/authStore";
import RightArrow from "../../globals/icons/RightArrow";

export default function LogoutLink() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  async function handleClick() {
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    const data = await response.json();
    setUser(null);
    router.push("/login");
  }
  return (
    <form action={handleClick}>
      <input
        type="submit"
        className="hover:underline cursor-pointer sm:ml-5 m-2 sm:text-sm text-xs"
        value="logout"
      />
      <RightArrow />
    </form>
  );
}
