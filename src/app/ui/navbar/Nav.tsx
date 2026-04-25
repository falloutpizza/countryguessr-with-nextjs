"use client";

import { useAuthStore } from "@/src/store/authStore";

import NavBig from "./NavBig";
import NavSmall from "./NavSmall";
//import { cookies } from "next/headers";

export default function Navbar() {
  //const cookieStore = await cookies();
  //const loggedIn = cookieStore.has("user");
  const user = useAuthStore((s) => s.user);

  return (
    <nav className="absolute">
      {/* nav for big screens */}
      <NavBig loggedIn={user ? true : false} />
      {/* nav for small screens */}
      <NavSmall loggedIn={user ? true : false} />
    </nav>
  );
}
