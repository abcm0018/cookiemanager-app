import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, 
         LogoutPage, 
         PasswordRecovery, 
         RegisterPage 
} from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
        {/** Ruta página para login */}
        <Route path="login" element = {<LoginPage/>} />
        {/** Ruta página para registro */}
        <Route path="register" element = {<RegisterPage/>} />
        {/** Ruta página para recuperar contraseña */}
        <Route path="password-recovery" element = {<PasswordRecovery/>} />
        {/** Ruta página para cerrar sesión */}
        <Route path="logout" element = {<LogoutPage/>}/>
        {/** Ruta página por defecto */}
        <Route path="/*" element={<Navigate to = "/auth/login" />}/>
    </Routes>
  )
}
