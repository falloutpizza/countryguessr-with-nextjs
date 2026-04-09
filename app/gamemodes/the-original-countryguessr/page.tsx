import { countReset } from "console";
import fetchCountries from "../../_utils/fetchCountries";
import fetchRandomCountry from "../../_utils/fetchRandomCountry";

export default async function TheOriginalCountryguessr() {
  const countries = await fetchCountries();
  let country = fetchRandomCountry(countries);
  return (
    <div>
      <h1>{country.name}</h1>
    </div>
  );
}
