import { Navigate, Route, Routes } from "react-router-dom";
import {
  LoginPage,
  LogoutPage,
  PasswordRecoveryPage,
  RegisterPage,
} from "../pages";
import { LoginAdmin } from "../pages/LoginAdmin";

export const AuthRoutes = () => {
  return (
    <Routes>
      {/** Ruta login*/}
      <Route path="login" element={<LoginPage />} />
      {/** Ruta administrador login*/}
      <Route path="admin/login" element={<LoginAdmin />} />
      {/** Ruta register*/}
      <Route path="register" element={<RegisterPage />} />
      {/** Ruta logout*/}
      <Route path="logout" element={<LogoutPage />} />
      {/** Ruta para recuperar la contraseña*/}
      <Route path="recovery-password" element={<PasswordRecoveryPage />} />

      {/**Routa por defecto */}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
