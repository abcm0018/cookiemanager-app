import PropTypes from "prop-types";
import { Footer, NavBarAdmin } from "../components";
import { useAuthStore } from "../../hooks";

export const AdminLayout = ({ children }) => {
  const { startLogout, user } = useAuthStore();

  return (
    <>
      <NavBarAdmin startLogout={startLogout} user={user} />
      {children}
      <Footer />
    </>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};
