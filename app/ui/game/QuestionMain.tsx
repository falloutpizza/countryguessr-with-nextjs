"use client";
import { useState } from "react";

import CountryImage from "./CountryImage";
import HintGroup from "./HintGroup";
import InputGuess from "./InputGuess";
import Results from "./Results";
import NextQuestion from "./NextQuestion";

export default function QuestionMain({
  countries,
  initCountry,
}: {
  countries: Array<object>;
  initCountry: any;
}) {
  const [country, setCountry] = useState(initCountry);
  const [guessed, setGuessed] = useState("false");
  return (
    <div className="mt-12 mx-10 md:flex">
      <div className="md:w-1/2">
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
        <HintGroup country={country} />
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
