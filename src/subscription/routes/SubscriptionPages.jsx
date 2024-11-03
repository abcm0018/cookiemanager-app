import { Navigate, Route, Routes } from "react-router-dom";
import { SubscriptionPage } from "../pages/SubscriptionPage";

export const SubscriptionPages = () => {
  return (
    <Routes>
      <Route path="/subscription" element={<SubscriptionPage />} />
      <Route path="/*" element={<Navigate to="/domains" />} />
    </Routes>
  );
};
