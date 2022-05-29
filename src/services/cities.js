import { OPENWHEATHETMAP_API } from "./OpenWheatherMapAPI";

export function getCities(cityName) {

    // El límite de las ciudades traidas de la API será 5.
    const _citiesLimit = 5

    return OPENWHEATHETMAP_API.get(`geo/1.0/direct?q=${cityName}&limit=${_citiesLimit}&appid=${OPENWHEATHETMAP_API.key}`)
}