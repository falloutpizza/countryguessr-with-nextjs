"use client";
import fetchRandomCountry from "../../../../helpers/utils/fetchRandomCountry";

import { useState, useEffect } from "react";

export default function Timer({
  duration,
  setEnded,
  countries,
  setCountry,
  setStarted,
}: {
  duration: number;
  setEnded: (e: boolean) => void;
  countries?: any;
  setCountry?: (c: object) => void;
  setStarted?: (e: boolean) => void;
}) {
  const [time, setTime] = useState(duration);
  const [color, setColor] = useState(
    setCountry ? "text-black" : "text-black text-4xl",
  );

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
        if (setCountry && setStarted) {
          setCountry(fetchRandomCountry(countries));
          setStarted(false);
        }
      }
      if (time <= 11 * 1000 && setCountry) {
        setColor("text-red-600");
      }
    }, 1000);
  }, [time]);

  let formattedTime: string = setCountry
    ? formatTime(time)
    : Math.floor(time / 1000).toString();
  return (
    <div
      className={
        setCountry
          ? "text-right relative -z-1 text-sm"
          : "text-center relative -z-1 text-sm"
      }
    >
      <h3 className={`font-semibold ${color}`}>{formattedTime}</h3>
    </div>
  );
}
