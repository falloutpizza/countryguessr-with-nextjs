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
      <div className="cursor-pointer" onClick={() => setOpened(!opened)}>
        {opened && <XCircle />}
        {!opened && <DotCircle />}
      </div>
      <div className="text-xs">
        <div
          className={
            opened
              ? "bg-orange-400 flex flex-col rounded-t-2xl border-2 border-b-1 border-black transition-all duration-50"
              : "bg-orange-400 flex flex-col rounded-t-2xl invisible transition-all duration-50"
          }
        >
          <LoginLink linkName="login" />
          <LoginLink linkName="sign up" />
        </div>
        <div
          className={
            opened
              ? "bg-lime-300 flex flex-col rounded-b-2xl border-2 border-t-1 border-black transition-all duration-50"
              : "bg-lime-300 flex flex-col rounded-b-2xl invisible transition-all duration-50"
          }
        >
          <GamemodeLink linkName="the original countryguessr" />
          <GamemodeLink linkName="for the challenge enthusiasts" />
          <GamemodeLink linkName="competitive queue" />
        </div>
      </div>
    </div>
  );
}
