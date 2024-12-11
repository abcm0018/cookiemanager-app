import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes";
import { DomainDetailsPage, DomainPage } from "../domain/pages";
import { useAuthStore } from "../hooks";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/*" element={<CookieManagerRoutes />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to={"/auth/login"} />} />
        </>
      ) : (
        <>
          <Route path="/" element={<DomainPage />} />
          <Route path="/domains/:id" element={<DomainDetailsPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </>
      )}
    </Routes>
  );
};
