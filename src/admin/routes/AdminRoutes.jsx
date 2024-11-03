import { Navigate, Route, Routes } from "react-router-dom";
import { SubscriptionsPage } from "../pages/SubscriptionsPage";
import { AdminProfilePage } from "../pages/AdminProfilePage";
import { LoginAdmin } from "../pages/LoginAdmin";
import { UsersPage } from "../pages/UsersPages";
import { ControlPanelPage } from "../pages/ControlPanelPage";
import { PasswordRecoveryAdmin } from "../pages/PasswordRecoveryAdmin";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginAdmin />} />
      <Route path="/recovery-password" element={<PasswordRecoveryAdmin />} />
      <Route path="/subscriptions" element={<SubscriptionsPage />} />
      <Route path="/profile" element={<AdminProfilePage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/control" element={<ControlPanelPage />} />
      <Route path="*" element={<Navigate to="admin/control" />} />
    </Routes>
  );
};
