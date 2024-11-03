import { Footer } from "../components/Footer";
import { HeadSectionSubscriptions } from "../components/HeadSectionSubscriptions";
import { MainSectionSubscriptions } from "../components/MainSectionSubscriptions";
import { NavBarAdmin } from "../components/NavBarAdmin";

export const SubscriptionsPage = () => {
  return (
    <>
      <NavBarAdmin />
      <HeadSectionSubscriptions />
      <MainSectionSubscriptions />
      <Footer />
    </>
  );
};
