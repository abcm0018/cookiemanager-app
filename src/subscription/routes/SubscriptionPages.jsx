import { Navigate, Route, Routes } from "react-router-dom";
import { SubscriptionPage } from "../pages/SubscriptionPage";

export const SubscriptionPages = () => {
  return (
    <Routes>
      <Route path="/manage-subscriptions" element={<SubscriptionPage />} />
      <Route path="/*" element={<Navigate to="/domains" />} />
    </Routes>
  );
};
