import { countReset } from "console";
import fetchCountries from "../../services/fetchCountries";
import fetchRandomCountry from "../../utils/fetchRandomCountry";

export default async function TheOriginalCountryguessr() {
  const countries = await fetchCountries();
  let country = fetchRandomCountry(countries);
  return (
    <div>
      <h1>{country.name}</h1>
    </div>
  );
}
