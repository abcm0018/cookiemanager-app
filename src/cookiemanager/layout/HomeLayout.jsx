import { Footer, NavBarIntro } from "../components";
import PropTypes from "prop-types";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <NavBarIntro />
      {children}
      <Footer />
    </>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};
