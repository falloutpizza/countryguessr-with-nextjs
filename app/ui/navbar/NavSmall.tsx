"use client";

import { useState } from "react";

import DotCircle from "../globals/icons/DotCircle";
import XCircle from "../globals/icons/XCircle";
import LoginLink from "./login/LoginLink";
import GamemodeLink from "./gamemodes/GamemodeLink";

export default function NavSmall() {
  const [opened, setOpened] = useState(false);
  return (
    <div className="sm:hidden block m-3 text-left">
      <button className="cursor-pointer" onClick={() => setOpened(!opened)}>
        {opened && <XCircle />}
        {!opened && <DotCircle />}
      </button>
      <div
        className={
          opened
            ? "rounded-2xl text-xs flex flex-col bg-orange-400 transition-all duration-50 border-2 border-black"
            : "rounded-2xl text-xs flex flex-col bg-orange-400 transition-all duration-50 invisible"
        }
      >
        <LoginLink linkName="login" />
        <LoginLink linkName="sign up" />
        <GamemodeLink linkName="gamemode 1" />
        <GamemodeLink linkName="gamemode 2" />
        <GamemodeLink linkName="gamemode 3" />
      </div>
    </div>
  );
}
