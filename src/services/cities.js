import { OPENWHEATHETMAP_API } from "./OpenWheatherMapAPI";

export function getCities(cityName, countryCode) {

    // El límite de las ciudades traidas de la API será 5.
    const _citiesLimit = 5
    // API key.
    const API_KEY = "361de2efa7edbefcb4b3a9676cfd34f0"

    return OPENWHEATHETMAP_API.get(`geo/1.0/direct?q=${cityName},${countryCode}&limit=${_citiesLimit}&appid=${API_KEY}`)
}