import { useAuthStore } from "../hooks";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Loader } from "../domain/components";
import { AdminRoutes } from "./AdminRoutes";
import { UserRoutes } from "./UserRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRoutes = () => {
  const { status, user, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <Loader />;
  }

  if (status === "not-authenticated") {
    return <PublicRoutes />;
  }

  if (user.role === "admin") {
    return <AdminRoutes />;
  }

  if (user.role === "user") {
    return <UserRoutes />;
  }

  // Manejo de errores y fallback
  return <Navigate to="/auth/login" replace />;
};
