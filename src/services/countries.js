import { RESTCOUNTRIES_API } from "./RestCountriesAPI";

export function getCountries() {
  return RESTCOUNTRIES_API.get(`all`,);
}
