"use client";
import { useState } from "react";

import CountryImage from "./CountryImage";
import HintGroup from "./HintGroup";
import NextQuestion from "./NextQuestion";

export default function QuestionMain({
  countries,
  initCountry,
}: {
  countries: Array<object>;
  initCountry: any;
}) {
  const [country, setCountry] = useState(initCountry);
  return (
    <div className="mt-10 mx-10 md:flex">
      <div className="md:w-1/2">
        <CountryImage src={country.image} />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-semibold">guess the country!</h1>
        <HintGroup country={country} />
      </div>
    </div>
  );
}
