import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes";
import { DomainsRoutes } from "../domain/routes/DomainRoutes";
import { UserRoutes } from "../account/routes/UserRoutes";
import { SubscriptionPage } from "../subscription/pages/SubscriptionPage";
import { AdminRoutes } from "../admin/routes/AdminRoutes";
import { SupportPage } from "../support/pages/SupportPage";
import { FAQPage } from "../FAQ/pages/FAQPage";

export const AppRoutes = () => {
  const authStatus = "not-authenticated";
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          {/**Cookie Manager Home Page */}
          <Route path="/*" element={<CookieManagerRoutes />} />
        </>
      ) : (
        <>
          {/** Admin routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/** User routes */}
          <Route path="/profile/*" element={<UserRoutes />} />
          {/** Domain routes */}
          <Route path="/domains/*" element={<DomainsRoutes />} />
          {/** Support routes */}
          <Route path="/contact-support/*" element={<SupportPage />} />
          {/** FAQ routes */}
          <Route path="/quick-answers/*" element={<FAQPage />} />
          {/** Subscription routes */}
          <Route
            path="/manage-subscriptions/*"
            element={<SubscriptionPage />}
          />
        </>
      )}
    </Routes>
  );
};
