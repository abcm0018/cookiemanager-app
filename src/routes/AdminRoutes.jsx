import { Navigate, Route, Routes } from "react-router-dom";
import { ControlPanelPage } from "../admin/pages/ControlPanelPage";
import { SubscriptionsPage } from "../admin/pages/SubscriptionsPage";
import { AdminProfilePage } from "../admin/pages/AdminProfilePage";
import { UsersPage } from "../admin/pages/UsersPages";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<ControlPanelPage />} />
      <Route path="admin/subscriptions" element={<SubscriptionsPage />} />
      <Route path="admin/:name" element={<AdminProfilePage />} />
      <Route path="admin/users" element={<UsersPage />} />
      <Route path="/*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
};
