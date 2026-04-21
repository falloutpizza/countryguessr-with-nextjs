"use client";

import { useState } from "react";

import LoginLink from "./login/LoginLink";
import GamemodeLink from "./gamemodes/GamemodeLink";
import NavHover from "./NavHover";

export default function NavBig() {
  const [hovered, setHovered] = useState("");
  return (
    <div
      className="hidden sm:block m-3 mt-1"
      onMouseLeave={() => setHovered("")}
    >
      <div className="flex">
        <a
          href="/signup"
          onMouseEnter={() => setHovered("login")}
          className="hover:underline sm:ml-5 m-2 "
        >
          login/sign up
        </a>
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
