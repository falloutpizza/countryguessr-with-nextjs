import axios from "axios";
export default async function fetchCountries() {
  let response = await axios.get(
    "https://restcountries.com/v3.1/all?fields=name,flags,continents,cca2,status,independent,currencies",
  );
  let filteredCountries = response.data.filter(
    (item) => item.status === "officially-assigned" && item.independent,
  );
  return filteredCountries;
}
