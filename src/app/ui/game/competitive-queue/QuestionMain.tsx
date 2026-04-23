"use client";
import { useState, useEffect } from "react";

import CountryImage from "../CountryImage";
import HintGroup from "../HintGroup";
import InputGuess from "../InputGuess";
import Results from "../Results";
import NextQuestion from "../NextQuestion";
import Score from "../Score";
import EndMain from "../EndMain";
import Timer from "./Timer";
import CountDown from "./CountDown";

export default function QuestionMain({
  countries,
  initCountry,
  user,
}: {
  countries: Array<object>;
  initCountry: any;
  user: any;
}) {
  const [country, setCountry] = useState(initCountry);
  const [guessed, setGuessed] = useState("false");
  const [totalScore, setTotalScore] = useState(0);
  const [curScore, setCurScore] = useState(100);
  const [ended, setEnded] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (guessed === "correct") {
      setTotalScore(() => {
        return totalScore + curScore;
      });
    }
  }, [guessed]);

  useEffect(() => {
    if (ended) {
      setGuessed("false");
      setCurScore(100);
    }
  }, [ended]);

  return (
    <div className="mt-15 mx-10 md:flex">
      {!started && !ended && <CountDown setStarted={setStarted} />}

      {!ended && started && (
        <div className="md:w-1/2">
          <div className="flex w-full justify-between">
            <Score
              guessed={guessed}
              totalScore={totalScore}
              curScore={curScore}
            />
            <Timer
              duration={60 * 1000}
              setEnded={setEnded}
              countries={countries}
              setCountry={setCountry}
              setStarted={setStarted}
            />
          </div>
          <CountryImage src={country.image} guessed={guessed} />
        </div>
      )}

      {!ended && started && (
        <div className="md:w-1/2">
          <h1 className="text-3xl font-semibold">guess the country!</h1>
          <InputGuess
            countries={countries}
            countryName={country.name}
            guessed={guessed}
            setGuessed={setGuessed}
          />
          {guessed !== "false" && <Results guess={guessed} />}
          <HintGroup
            country={country}
            setCurScore={setCurScore}
            scores={[95, 90, 80]}
          />
          <NextQuestion
            countries={countries}
            setCountry={setCountry}
            guessed={guessed}
            setGuessed={setGuessed}
          />
        </div>
      )}
      {ended && (
        <EndMain
          score={totalScore}
          setEnded={setEnded}
          setScore={setTotalScore}
          gameMode="compRank"
          user={user}
        />
      )}
    </div>
  );
}
