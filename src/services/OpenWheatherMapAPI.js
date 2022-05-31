import axios from "axios";

export const OPENWHEATHETMAP_API = axios.create({
  baseURL: "http://api.openweathermap.org/",
});

OPENWHEATHETMAP_API.interceptors.request.use(
  (config) => {

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
