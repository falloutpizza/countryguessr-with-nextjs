"use client";

import { useState } from "react";
import { useEffect } from "react";

import HintButton from "./HintButton";

export default function HintGroup({ country }: { country: any }) {
  const [status, setStatus] = useState([false, true, true]);

  useEffect(() => {
    setStatus([false, true, true]);
  }, [country]);

  return (
    <div className="mt-5 max-h-50 overflow-scroll">
      <HintButton
        hintNum={1}
        initialHintText={country.hint1}
        disabled={status[0]}
        setDisabled={() => setStatus([false, false, true])}
      />
      <HintButton
        hintNum={2}
        initialHintText={country.hint2}
        disabled={status[1]}
        setDisabled={() => setStatus([false, false, false])}
      />
      <HintButton
        hintNum={3}
        initialHintText={country.hint3}
        disabled={status[2]}
        setDisabled={() => {}}
      />
    </div>
  );
}
