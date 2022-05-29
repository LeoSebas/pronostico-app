import axios from "axios";

export const GEODB_API = axios.create({
  baseURL: "",
});

GEODB_API.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    "X-RapidAPI-Key": "347e4ef8eemsh9f8dc63171bf1a3p1b5eb9jsn015f531e8d83",
  };
});
