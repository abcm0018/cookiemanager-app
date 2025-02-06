import { Navigate, Route, Routes } from "react-router-dom";
import { DomainDetailsPage, DomainPage } from "../domain/pages";
import { FAQPage } from "../FAQ/pages/FAQPage";
import { SupportPage } from "../support/pages/SupportPage";
import { UserProfilePage } from "../account/pages/UserProfilePage";
import { SubscriptionPage } from "../subscription/pages/SubscriptionPage";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DomainPage />} />
      <Route path="/quick-answers" element={<FAQPage />} />
      <Route path="/contact-support" element={<SupportPage />} />
      <Route path="/domains/:id" element={<DomainDetailsPage />} />
      <Route path="/users/:name" element={<UserProfilePage />} />
      <Route path="/manage-subscriptions/*" element={<SubscriptionPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
