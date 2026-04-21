"use client";

import { useState } from "react";

import LogoutLink from "./login/LogoutLink";
import NavHover from "./NavHover";

export default function NavBig({ loggedIn }: { loggedIn: boolean }) {
  const [hovered, setHovered] = useState("");
  return (
    <div
      className="hidden sm:block m-3 mt-1"
      onMouseLeave={() => setHovered("")}
    >
      <div className="flex">
        {!loggedIn ? (
          <a
            href="/signup"
            onMouseEnter={() => setHovered("login")}
            className="hover:underline sm:ml-5 m-2 "
          >
            login/sign up
          </a>
        ) : (
          <LogoutLink />
        )}

        <a
          href={"/gamemodes"}
          className="hover:underline sm:ml-5 m-2 "
          onMouseEnter={() => setHovered("gamemodes")}
        >
          gamemodes
        </a>
      </div>
      <NavHover hovered={hovered} setHovered={setHovered} />
    </div>
  );
}
