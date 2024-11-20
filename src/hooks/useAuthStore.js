import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log({ email, password });
    try {
      const response = await cookieManagerApi.post("/auth/login", {
        email,
        password,
      });
      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };
  return {
    //* Propiedades
    errorMessage,
    status,
    user,
    //* Metodos
    startLogin,
  };
};
