import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes"

export const AppRoutes = () => {
  return (
    <Routes>
        {/** Rutas de autenticación */}
        <Route path="/auth/*" element={<AuthRoutes/>}/>
        {/** Rutas de cookie manager home page */}
        <Route path="/*" element={<CookieManagerRoutes/>}/>
    </Routes>
  )
}
