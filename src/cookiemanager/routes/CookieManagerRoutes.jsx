import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FAQHomePage } from "../pages/FAQHomePage";
import { SupportHomePage } from "../pages/SupportHomePage";
import { SubscriptionHomePage } from "../pages/SubscriptionHomePage";
import { HelpPage } from "../pages/HelpPage";

export const CookieManagerRoutes = () => {
  return (
    <Routes>
      {/**Ruta que apunta a la página principal */}
      <Route path="/" element={<HomePage />} />
      {/**Ruta que apunta a la FAQ */}
      <Route path="/faq" element={<FAQHomePage />} />
      {/**Ruta que apunta a Support */}
      <Route path="/support" element={<SupportHomePage />} />
      {/**Ruta que apunta a Support */}
      <Route path="/subscriptions" element={<SubscriptionHomePage />} />
      {/**Ruta que apunta a Ayuda */}
      <Route path="/help" element={<HelpPage />} />
      {/**Ruta por defecto */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
