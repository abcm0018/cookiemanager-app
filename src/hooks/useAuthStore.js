import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import { onLogin, onLogout } from "../store/auth/authSlice";

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

  const startLoginAdmin = async ({ email, password }) => {
    console.log({ email, password });
    try {
      const responseAdmin = await cookieManagerApi.post("auth/admin/login", {
        email,
        password,
      });
      console.log({ responseAdmin });
    } catch (error) {
      console.log({ error });
    }
  };

  const startRegister = async ({
    name,
    surname,
    email,
    password,
    company,
    subscriptionPlan,
    termsAccept,
  }) => {
    console.log(
      name,
      surname,
      email,
      password,
      company,
      subscriptionPlan,
      termsAccept
    );
    if (!termsAccept) {
      console.log("Debes aceptar los términos y condiciones.");
    }
    try {
      const response = await cookieManagerApi.post("auth/register", {
        name,
        surname,
        email,
        password,
        company,
        subscriptionPlan,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const startRecoveryPassword = async ({ email, password }) => {
    try {
      const response = await cookieManagerApi.put("auth/resetPassword", {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const { data } = await cookieManagerApi.get("/auth/refreshToken");
      localStorage.setItem("token", "Bearer " + data.token);
      dispatch(onLogin());
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };
  return {
    //* Propiedades
    errorMessage,
    status,
    user,
    //* Metodos
    startLogin,
    startLoginAdmin,
    startRegister,
    startRecoveryPassword,
    checkAuthToken,
  };
};
