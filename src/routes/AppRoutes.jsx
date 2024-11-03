import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes";
import { DomainsRoutes } from "../domain/routes/DomainRoutes";
import { SupportRoutes } from "../support/routes/SupportRoutes";
import { FAQRoutes } from "../FAQ/routes/FAQRoutes";
import { UserRoutes } from "../account/routes/UserRoutes";
import { SubscriptionPage } from "../subscription/pages/SubscriptionPage";
import { AdminRoutes } from "../admin/routes/AdminRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/**Auth routes */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/**Cookie Manager Home Page */}
      <Route path="/*" element={<CookieManagerRoutes />} />
      {/** Domain routes */}
      <Route path="/domains/*" element={<DomainsRoutes />} />
      {/** Support routes */}
      <Route path="/support/*" element={<SupportRoutes />} />
      {/** FAQ routes */}
      <Route path="/faq/*" element={<FAQRoutes />} />
      {/** User routes */}
      <Route path="/profile/*" element={<UserRoutes />} />
      {/** Subscription routes */}
      <Route path="/subscription/*" element={<SubscriptionPage />} />
      {/** Admin routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};
