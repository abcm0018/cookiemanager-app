import { Navigate, Route, Routes } from "react-router-dom";
import { SupportPage } from "../pages/SupportPage";

export const SupportRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<SupportPage />} />
      <Route path="/*" element={<Navigate to="/domains" />} />
    </Routes>
  );
};
