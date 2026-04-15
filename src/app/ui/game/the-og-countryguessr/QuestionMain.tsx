"use client";
import { useState, useEffect } from "react";

import CountryImage from "../CountryImage";
import HintGroup from "../HintGroup";
import InputGuess from "../InputGuess";
import Results from "../Results";
import NextQuestion from "../NextQuestion";
import Score from "../Score";
import EndMain from "../EndMain";
import EndButton from "../EndButton";

export default function QuestionMain({
  countries,
  initCountry,
}: {
  countries: Array<object>;
  initCountry: any;
}) {
  const [country, setCountry] = useState(initCountry);
  const [guessed, setGuessed] = useState("false");
  const [totalScore, setTotalScore] = useState(0);
  const [curScore, setCurScore] = useState(100);
  const [ended, setEnded] = useState(false);

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
      {!ended && (
        <div className="md:w-1/2">
          <Score
            guessed={guessed}
            totalScore={totalScore}
            curScore={curScore}
          />
          <CountryImage src={country.image} guessed={guessed} />
        </div>
      )}
      {!ended && (
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
          <div className="flex justify-center">
            <NextQuestion
              countries={countries}
              setCountry={setCountry}
              guessed={guessed}
              setGuessed={setGuessed}
            />
            <EndButton
              setEnded={setEnded}
              countries={countries}
              setCountry={setCountry}
            />
          </div>
        </div>
      )}
      {ended && (
        <EndMain
          score={totalScore}
          setEnded={setEnded}
          setScore={setTotalScore}
        />
      )}
    </div>
  );
}
