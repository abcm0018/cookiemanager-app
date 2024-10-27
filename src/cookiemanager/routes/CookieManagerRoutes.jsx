import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

export const CookieManagerRoutes = () => {
  return (
    <Routes>
      {/**Ruta que apunta a la página principal */}
      <Route path="/" element={<HomePage />} />

      {/**Ruta por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
