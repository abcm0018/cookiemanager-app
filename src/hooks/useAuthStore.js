import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../store/auth/authSlice";
import { persistor } from "../store/store";
import cookieManagerApi from "../api/cookieManagerApi";
import { onClearCookies, onClearDomains, onClearSubscriptions } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await cookieManagerApi.post("/auth/login", {
        email,
        password,
      });
      console.log("[Auth] Login exitoso:", data);

      // Guarda primero el refreshToken, luego el accessToken
      localStorage.setItem("refreshToken", "Bearer " + data.refreshToken);
      localStorage.setItem("token", "Bearer " + data.token);
      console.log("[Auth] Tokens guardados en localStorage");

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
      console.log("[Auth] Error en login:", error);
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
      return response;
    } catch (error) {
      console.log(error.response?.data || error.message);
      dispatch(onLogout(error.response.data?.error.violations[0] || ""));
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");

    // Si no hay tokens, logout inmediato
    if (!token || !refreshToken) {
      console.log("[Auth] No hay tokens disponibles, logout");
      return dispatch(onLogout());
    }

    try {
      // Usamos el endpoint refreshToken que sabemos que existe
      // y devuelve tanto el token como la información del usuario
      const { data } = await cookieManagerApi.get("/auth/refreshToken");
      console.log("[Auth] Usuario autenticado:", data);

      // El interceptor ya se encarga de actualizar el token en localStorage
      // Solo necesitamos actualizar el estado del usuario
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
      console.log("[Auth] Error verificando autenticación:", error);

      // Si el interceptor no pudo manejar el error (ej: refresh token expirado)
      if (error.response?.status === 401) {
        localStorage.clear();
        dispatch(onLogout());
      } else {
        // Para otros errores, también logout por seguridad
        localStorage.clear();
        dispatch(onLogout());
      }
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
      dispatch(onClearDomains());
      dispatch(onClearCookies());
      dispatch(onClearSubscriptions());

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
