import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes";
import { DomainRoutes } from "../domain/routes/DomainRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/** Rutas de autenticación */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/** Rutas de domain */}
      <Route path="/domain/*" element={<DomainRoutes />} />
      {/** Rutas de cookie manager home page */}
      <Route path="/*" element={<CookieManagerRoutes />} />
    </Routes>
  );
};
