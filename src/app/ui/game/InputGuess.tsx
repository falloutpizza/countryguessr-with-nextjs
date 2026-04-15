"use client";

import { useState } from "react";

import SearchDropdown from "./SearchDropdown";

export default function InputGuess({
  countries,
  countryName,
  guessed,
  setGuessed,
}: {
  countries: Array<object>;
  countryName: string;
  guessed: string;
  setGuessed: (g: string) => void;
}) {
  const [curGuess, setCurGuess] = useState("");
  const [filteredList, setFilteredList] = useState(countries);

  function handleChange(e: any) {
    setCurGuess(e.target.value);

    const term = e.target.value;
    const results: Array<object> = countries.filter((item: any) =>
      item.name.common
        .toLowerCase()
        .slice(0, term.length)
        .includes(term.toLowerCase()),
    );
    setFilteredList(results);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (guessed === "false") {
      if (curGuess.toLowerCase() === countryName.toLowerCase()) {
        setGuessed("correct");
      } else {
        setGuessed(countryName);
      }
    }
  }
  return (
    <form className="mt-5 flex m-auto justify-center" onSubmit={handleSubmit}>
      <div className="m-2 ">
        <input
          type="text"
          value={curGuess}
          onChange={handleChange}
          placeholder="enter your guess:"
          className="bg-white border-black border-1 rounded-xs px-2 w-60 py-1"
        />
        <SearchDropdown filteredList={filteredList} setCurGuess={setCurGuess} />
      </div>
      <button
        type="submit"
        className="bg-orange-400 h-fit m-2 px-2 py-1 border-1 border-black rounded-md cursor-pointer"
      >
        submit?
      </button>
    </form>
  );
}
