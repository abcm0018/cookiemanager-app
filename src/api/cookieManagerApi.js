import axios from "axios";

const cookieManagerApi = axios.create({
  baseURL: "http://localhost:8080/api",
});

//Configurar interceptores7

// Añadimos la "Authrization" para las peticiones que requieren el JWT Tojen
cookieManagerApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: localStorage.getItem("token"),
  };
  return config;
});

export default cookieManagerApi;
