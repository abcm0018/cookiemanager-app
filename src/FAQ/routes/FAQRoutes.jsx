import { Navigate, Routes, Route } from "react-router-dom";
import { FAQPage } from "../pages/FAQPage";

export const FAQRoutes = () => {
  return (
    <Routes>
      <Route path="/quick-answers" element={<FAQPage />} />
      <Route path="/*" element={<Navigate to="/domains" />} />
    </Routes>
  );
};
