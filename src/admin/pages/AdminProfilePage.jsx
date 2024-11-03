import { MainSectionAdmin } from "../components/MainSectionAdmin";
import { NavBarAdmin } from "../components/NavBarAdmin";
import { Footer } from "../components/Footer";
import { HeadSectionAdmin } from "../components/HeadSectionAdmin";

export const AdminProfilePage = () => {
  return (
    <>
      <NavBarAdmin />
      <HeadSectionAdmin />
      <MainSectionAdmin />
      <Footer />
    </>
  );
};
