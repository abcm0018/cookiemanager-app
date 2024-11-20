import axios from "axios";

const cookieManagerApi = axios.create({
  baseURL: "http://localhost:8080/api",
});

//Configurar interceptores

export default cookieManagerApi;
