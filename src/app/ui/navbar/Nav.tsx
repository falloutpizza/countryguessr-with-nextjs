import NavBig from "./NavBig";
import NavSmall from "./NavSmall";
import { cookies } from "next/headers";

export default async function Navbar() {
  const cookieStore = await cookies();
  const loggedIn = cookieStore.has("user");
  return (
    <nav className="absolute">
      {/* nav for big screens */}
      <NavBig loggedIn={loggedIn} />
      {/* nav for small screens */}
      <NavSmall loggedIn={loggedIn} />
    </nav>
  );
}
