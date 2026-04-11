import fetchCountries from "../../services/fetchCountries";
import fetchRandomCountry from "@/app/utils/fetchRandomCountry";

import QuestionMain from "../../ui/game/the-og-countryguessr/QuestionMain";

export default async function TheOriginalCountryguessr() {
  const countries = await fetchCountries();
  const initialCountry = fetchRandomCountry(countries);
  return (
    <div>
      <QuestionMain countries={countries} initCountry={initialCountry} />
    </div>
  );
}
