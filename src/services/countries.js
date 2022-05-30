import { RESTCOUNTRIES_API } from "./RestCountriesAPI";

export function getCountries(namePrefix) {
  return RESTCOUNTRIES_API.get(`name/${namePrefix}`,);
}
