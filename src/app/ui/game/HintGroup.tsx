"use client";

import { useState } from "react";
import { useEffect } from "react";

import HintButton from "./HintButton";

export default function HintGroup({
  country,
  setCurScore,
  scores,
}: {
  country: any;
  setCurScore: (s: number) => void;
  scores: Array<number>;
}) {
  const [status, setStatus] = useState([false, true, true]);

  useEffect(() => {
    setStatus([false, true, true]);
  }, [country]);

  return (
    <div className="mt-5 max-h-40 overflow-scroll">
      <HintButton
        hintNum={1}
        initialHintText={country.hint1}
        disabled={status[0]}
        setDisabled={() => setStatus([false, false, true])}
        setCurScore={() => setCurScore(scores[0])}
      />
      <HintButton
        hintNum={2}
        initialHintText={country.hint2}
        disabled={status[1]}
        setDisabled={() => setStatus([false, false, false])}
        setCurScore={() => setCurScore(scores[1])}
      />
      <HintButton
        hintNum={3}
        initialHintText={country.hint3}
        disabled={status[2]}
        setDisabled={() => {}}
        setCurScore={() => setCurScore(scores[2])}
      />
    </div>
  );
}
