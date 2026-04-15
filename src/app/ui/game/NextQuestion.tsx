import fetchRandomCountry from "../../../helpers/utils/fetchRandomCountry";

export default function NextQuestion({
  setCountry,
  countries,
  guessed,
  setGuessed,
}: {
  setCountry: any;
  countries: Array<object>;
  guessed: string;
  setGuessed: (g: string) => void;
}) {
  let country: object = fetchRandomCountry(countries);
  return (
    <button
      className="bg-orange-400 h-fit m-2 mt-4 px-2 py-1 border-1 border-black rounded-md cursor-pointer"
      onClick={() => {
        if (guessed !== "false") {
          setCountry(country);
          setGuessed("false");
        }
      }}
    >
      next question
    </button>
  );
}
