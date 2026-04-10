import fetchRandomCountry from "../../utils/fetchRandomCountry";

export default function NextQuestion({
  setCountry,
  countries,
}: {
  setCountry: any;
  countries: Array<object>;
}) {
  let country: object = fetchRandomCountry(countries);
  return (
    <button
      className="control-btn"
      onClick={() => {
        setCountry(country);
      }}
    >
      next question
    </button>
  );
}
