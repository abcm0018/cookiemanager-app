import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../cookiemanager/pages/HomePage";
import { FAQHomePage } from "../cookiemanager/pages/FAQHomePage";
import { SupportHomePage } from "../cookiemanager/pages/SupportHomePage";
import { SubscriptionHomePage } from "../cookiemanager/pages/SubscriptionHomePage";
import { HelpPage } from "../cookiemanager/pages/HelpPage";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const PublicRoutes = () => {
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
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};
