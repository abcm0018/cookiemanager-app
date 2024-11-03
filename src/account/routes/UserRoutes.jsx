import { Navigate, Route, Routes } from "react-router-dom";
import { UserProfilePage } from "../pages/UserProfilePage";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<UserProfilePage />} />
      <Route path="/*" element={<Navigate to="/domains" />} />
    </Routes>
  );
};
