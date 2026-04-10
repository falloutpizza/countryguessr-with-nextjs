import { countReset } from "console";
import fetchCountries from "../../services/fetchCountries";

import QuestionMain from "../../ui/game/QuestionMain";

export default async function TheOriginalCountryguessr() {
  const countries = await fetchCountries();
  return (
    <div>
      <QuestionMain countries={countries} />
    </div>
  );
}
