import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../store/auth/authSlice";
import { persistor } from "../store/store";
import cookieManagerApi from "../api/cookieManagerApi";
import { cookieSlice, domainSlice, subscriptionSlice } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log({ email, password });

    dispatch(onChecking());
    try {
      const { data } = await cookieManagerApi.post("/auth/login", {
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("token", "Bearer " + data.token);
      dispatch(
        onLogin({
          email: data.user.email,
          name: data.user.name,
          surname: data.user.surname,
          company: data.user.company,
          subscription: data.user.subscription,
          role: data.user.role,
          domains: data.user.domains,
        })
      );
    } catch (error) {
      console.log(error);
      // Error genérico
      dispatch(onLogout("Credenciales inválidos"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
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
      const response = await cookieManagerApi.post("/auth/register", {
        name,
        surname,
        email,
        password,
        company,
        subscriptionPlan,
      });
      console.log(response);
      return response;
    } catch (error) {
      dispatch(onLogout(error.response.data?.error.violations[0] || ""));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
      console.log(error);
    }
  };

  const startRecoveryPassword = async ({ email, password }) => {
    try {
      const response = await cookieManagerApi.put("/auth/resetPassword", {
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
      const { data } = await cookieManagerApi.get("/refreshToken");
      localStorage.setItem("token", "Bearer " + data.token);
      console.log({ UserWithRefreshToken: data });
      dispatch(
        onLogin({
          email: data.user.email,
          name: data.user.name,
          surname: data.user.surname,
          company: data.user.company,
          subscription: data.user.subscription,
          role: data.user.role,
          domains: data.user.domains,
        })
      );
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = async () => {
    try {
      await cookieManagerApi.get("/logout");
      // purga los datos persistidos
      persistor.purge();

      // Limpia el localStorage
      localStorage.clear();

      // Limpia los estados de cookies y domains
      dispatch(domainSlice.actions.onClearDomains());
      dispatch(cookieSlice.actions.onClearCookies());
      dispatch(subscriptionSlice.actions.onClearSubscriptions());

      // Actualiza el estado de la aplicación
      dispatch(onLogout());
    } catch (error) {
      console.error("Error al cerrar la sesión", error);
    }
  };

  return {
    // Propiedades
    errorMessage,
    user,
    status,
    // Métodos
    startLogin,
    startRegister,
    startRecoveryPassword,
    startLogout,
    checkAuthToken,
  };
};
