"use client";
import { useState } from "react";

import NextQuestion from "./NextQuestion";

export default function QuestionMain({
  countries,
}: {
  countries: Array<object>;
}) {
  const [country, setCountry] = useState({ name: "" });
  return (
    <div>
      <h1>{country.name}</h1>
      <NextQuestion setCountry={setCountry} countries={countries} />
    </div>
  );
}
