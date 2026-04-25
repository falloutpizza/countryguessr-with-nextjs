import fetchCountries from "../../../helpers/services/fetchCountries";
import fetchRandomCountry from "../../../helpers/utils/fetchRandomCountry";

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
