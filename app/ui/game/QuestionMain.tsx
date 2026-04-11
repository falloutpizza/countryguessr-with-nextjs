"use client";
import { useState, useEffect } from "react";

import CountryImage from "./CountryImage";
import HintGroup from "./HintGroup";
import InputGuess from "./InputGuess";
import Results from "./Results";
import NextQuestion from "./NextQuestion";
import Score from "./Score";

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

  useEffect(() => {
    if (guessed === "correct") {
      setTotalScore(() => {
        return totalScore + curScore;
      });
      setCurScore(100);
    }
  }, [guessed]);

  return (
    <div className="mt-12 mx-10 md:flex">
      <div className="md:w-1/2">
        <Score guessed={guessed} totalScore={totalScore} curScore={curScore} />
        <CountryImage src={country.image} />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-semibold">guess the country!</h1>
        <InputGuess
          countries={countries}
          countryName={country.name}
          guessed={guessed}
          setGuessed={setGuessed}
        />
        {guessed !== "false" && <Results guess={guessed} />}
        <HintGroup country={country} setCurScore={setCurScore} />
        <NextQuestion
          countries={countries}
          setCountry={setCountry}
          guessed={guessed}
          setGuessed={setGuessed}
        />
      </div>
    </div>
  );
}
