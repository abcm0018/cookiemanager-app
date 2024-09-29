import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homepage"
export const CookieManagerRoutes = () => {
  return (
    <Routes>
        {/** Ruta que apunta a la página principal */}
        <Route path="/" element={<HomePage />}/>
        {/** Ruta página por defecto */}
        <Route path="/*" element={<Navigate to = "/" />}/>
    </Routes>
  )
}
