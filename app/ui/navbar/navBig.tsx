"use client";

import { useState } from "react";

import LoginLink from "./login/LoginLink";
import GamemodeLink from "./gamemodes/GamemodeLink";
import NavHover from "./NavHover";

export default function NavBig() {
  const [hovered, setHovered] = useState("");
  return (
    <div
      className="hidden sm:block m-5 mt-3"
      onMouseLeave={() => setHovered("")}
    >
      <div className="flex">
        <LoginLink
          onMouseEnter={() => setHovered("login")}
          linkName="login/sign up"
        />
        <GamemodeLink
          onMouseEnter={() => setHovered("gamemodes")}
          linkName="gamemodes"
        />
      </div>
      <NavHover hovered={hovered} setHovered={setHovered} />
    </div>
  );
}
