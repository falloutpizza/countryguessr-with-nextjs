import fetchCountries from "../../../helpers/services/fetchCountries";
import fetchRandomCountry from "../../../helpers/utils/fetchRandomCountry";

import QuestionMain from "../../ui/game/the-og-countryguessr/QuestionMain";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function TheOriginalCountryguessr() {
  const countries = await fetchCountries();
  const initialCountry = fetchRandomCountry(countries);
  const cookieStore = await cookies();
  const user = cookieStore.get("user")?.value;
  let verifiedUser: any = undefined;
  if (user) {
    verifiedUser = jwt.verify(user, process.env.TOKEN_SECRET!);
  }
  return (
    <div>
      <QuestionMain
        countries={countries}
        initCountry={initialCountry}
        user={verifiedUser}
      />
    </div>
  );
}
