import axios from "axios";

export const OPENWHEATHETMAP_API = axios.create({
  baseURL: "http://api.openweathermap.org/",
  key: "361de2efa7edbefcb4b3a9676cfd34f0"
});

OPENWHEATHETMAP_API.interceptors.request.use(
  (config) => {
    /// Token "ficticio" para las request

    // config.headers = { ...config.headers, "pokemon-auth": `token` };

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);
OPENWHEATHETMAP_API.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error) => {
    return Promise.reject({
      message: "Error en la respuesta del servidor.",
      status: error.response.status,
      serverMessage: error.response?.data?.message,
    });
  }
);
