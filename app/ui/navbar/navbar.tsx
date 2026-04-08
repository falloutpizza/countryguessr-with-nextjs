"use client";

import { useState } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState("");
  return (
    <nav>
      <div
        className="invisible sm:visible absolute m-5"
        onMouseLeave={() => setHovered("")}
      >
        <div className="flex mb-2">
          <a
            href=""
            className="hover:underline ml-5 transition-all duration-300"
            onMouseEnter={() => setHovered("login")}
          >
            login/sign up
          </a>
          <a
            href=""
            className="hover:underline ml-5 transition-all duration-300"
            onMouseEnter={() => setHovered("gamemodes")}
          >
            gamemodes
          </a>
        </div>
        {/* hover dropdown menu */}
        <div
          className={
            hovered
              ? "border-black rounded-2xl border-2 block ml-4 text-left text-sm w-60 transition-all duration-50 flex flex-col"
              : "rounded-2xl ml-4  invisible"
          }
          onMouseEnter={() => setHovered(hovered)}
        >
          {hovered === "login" && (
            <>
              <a
                href=""
                className="hover:underline ml-2 transition-all duration-300"
              >
                login
              </a>
              <a
                href=""
                className="hover:underline ml-2 transition-all duration-300"
              >
                sign up
              </a>
            </>
          )}
          {hovered === "gamemodes" && (
            <>
              <a
                href=""
                className="hover:underline ml-2 transition-all duration-300"
              >
                gamemode 1
              </a>
              <a
                href=""
                className="hover:underline ml-2 transition-all duration-300"
              >
                gamemode 2
              </a>
              <a
                href=""
                className="hover:underline ml-2 transition-all duration-300"
              >
                gamemode 3
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
