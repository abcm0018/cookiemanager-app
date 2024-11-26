import { Navigate, Route, Routes } from "react-router-dom";
import { SubscriptionsPage } from "../pages/SubscriptionsPage";
import { AdminProfilePage } from "../pages/AdminProfilePage";
import { UsersPage } from "../pages/UsersPages";
import { ControlPanelPage } from "../pages/ControlPanelPage";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/subscriptions" element={<SubscriptionsPage />} />
      <Route path="/profile" element={<AdminProfilePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/control" element={<ControlPanelPage />} />
      <Route path="*" element={<Navigate to="admin/control" />} />
    </Routes>
  );
};
