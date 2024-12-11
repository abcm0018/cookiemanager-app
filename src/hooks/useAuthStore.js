import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import { persistor } from "../store/store";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../store/auth/authSlice";
import { domainSlice } from "../store/domain/domainSlice";
import { cookieSlice } from "../store/cookies/cookieSlice";

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
      localStorage.setItem("token", "Bearer " + data.token);
      localStorage.setItem("currentUser", JSON.stringify(data.userResponse));
      dispatch(
        onLogin({
          email: data.userResponse.email,
          name: data.userResponse.name,
          surname: data.userResponse.surname,
          subscriptionPlan: data.userResponse.subscription,
          role: data.userResponse.role,
        })
      );
    } catch (error) {
      console.log(error);
      // Error genérico
      dispatch(onLogout("Credenciales inválidas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLoginAdmin = async ({ email, password }) => {
    console.log({ email, password });
    try {
      const data = await cookieManagerApi.post("/auth/admin/login", {
        email,
        password,
      });
      localStorage.setItem("token", "Bearer " + data.token);
      localStorage.setItem("currentUser", JSON.stringify(data.userResponse));
      dispatch(
        onLogin({
          email: data.userResponse.email,
          name: data.userResponse.name,
          surname: data.userResponse.surname,
        })
      );
    } catch (error) {
      console.log(error);
      // Error genérico
      dispatch(onLogout("Credenciales inválidas"));
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
          email: data.userResponse.email,
          name: data.userResponse.name,
          surname: data.userResponse.surname,
          subscriptionPlan: data.userResponse.subscription,
          role: data.userResponse.role,
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
      //dispatch(domainSlice.actions.onClearDomains());
      //dispatch(cookieSlice.actions.onClearCookies());

      // Actualiza el estado de la aplicación
    } catch (error) {
      console.error("Error al cerrar la sesión", error);
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
    startLogout,
  };
};
