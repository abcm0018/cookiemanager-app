import axios from "axios";

const cookieManagerApi = axios.create({
  baseURL: "http://localhost:8080/api",
});

//Configurar interceptores

// Añadimos la "Authorization" para las peticiones que requieren el JWT Tojen
cookieManagerApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: localStorage.getItem("token"),
  };
  return config;
});

export default cookieManagerApi;
