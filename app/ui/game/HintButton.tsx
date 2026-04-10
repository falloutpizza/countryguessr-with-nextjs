"use client";

import { init } from "next/dist/compiled/webpack/webpack";
import { useState } from "react";
import { useEffect } from "react";

export default function HintButton({
  initialHintText,
  hintNum,
  disabled,
  setDisabled,
}: {
  initialHintText: string;
  hintNum: number;
  disabled: boolean;
  setDisabled: any;
}) {
  const [curHintText, setCurHintText] = useState("hint #" + hintNum);
  useEffect(() => {
    setCurHintText("hint #" + hintNum);
  }, [initialHintText]);

  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        if (curHintText !== initialHintText) {
          setCurHintText(initialHintText);
          setDisabled();
        }
      }}
      className="text-sm bg-lime-300 w-4/5 border-black border-1 rounded-md mx-auto mt-2 disabled:bg-lime-200 cursor-pointer disabled:cursor-not-allowed"
    >
      {curHintText}
    </button>
  );
}
