"use client";

import { useState } from "react";

import LoginLink from "./login/loginLink";
import GamemodeLink from "./gamemodes/gamemodeLink";
import NavHover from "./navHover";

export default function Navbar() {
  const [hovered, setHovered] = useState("");
  return (
    <nav className="absolute">
      <div
        className="invisible sm:visible m-5 mt-3"
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
    </nav>
  );
}
