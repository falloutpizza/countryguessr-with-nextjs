import { countReset } from "console";
import fetchCountries from "../../services/fetchCountries";

import QuestionMain from "@/app/ui/game-main/QuestionMain";

export default async function TheOriginalCountryguessr() {
  const countries = await fetchCountries();
  return (
    <div>
      <QuestionMain countries={countries} />
    </div>
  );
}
