"use client";
import fetchRandomCountry from "@/app/utils/fetchRandomCountry";

import { useState, useEffect } from "react";

export default function Timer({
  duration,
  setEnded,
  setScore,
  countries,
  setCountry,
}: {
  duration: number;
  setEnded: (e: boolean) => void;
  setScore: (s: number) => void;
  countries: any;
  setCountry: (c: object) => void;
}) {
  const [time, setTime] = useState(duration);
  const [color, setColor] = useState("text-black");

  const formatTime = (time: number) => {
    let minutes: number = Math.floor(time / (60 * 1000));
    let seconds: number = Math.floor((time - minutes * 60 * 1000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    setTimeout(() => {
      if (time !== 0) {
        setTime(time - 1000);
      } else {
        setEnded(true);
        setScore(0);
        setCountry(fetchRandomCountry(countries));
        setEnded(true);
      }
      if (time <= 11 * 1000) {
        setColor("text-red-600");
      }
    }, 1000);
  }, [time]);

  return (
    <div className="text-right relative -z-1 text-sm">
      <h3 className={`font-semibold ${color}`}>{formatTime(time)}</h3>
    </div>
  );
}
