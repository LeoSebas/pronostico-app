import axios from "axios";

export const RESTCOUNTRIES_API = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

RESTCOUNTRIES_API.interceptors.request.use((config) => {

  config.params = {
    ...config.params,
    // Parametro para traer los datos en Español :v
    lang : 'esp'
  }

  return config
});
