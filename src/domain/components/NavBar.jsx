import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { CMenu } from "./CMenu";
import { CLogo } from "./CLogo";

export const NavBar = () => {
  const pages = [
    { label: "Mis dominios", route: "/domains" },
    { label: "FAQs", route: "/quick-answers" },
    { label: "Soporte", route: "/contact-support" },
  ];

  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: "white" }}
        >
          <Toolbar disableGutters>
            <CLogo />
            {/* Espaciado entre el logo y las opciones */}
            <Box sx={{ flexGrow: 0.08 }} />
            {/* Opciones de navegación */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.route}
                  sx={{
                    my: 2,
                    color: "primary.main",
                    display: "block",
                    backgroundColor: location.pathname.includes(page.route)
                      ? "secondary.light"
                      : "transparent",
                  }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
            <CMenu />
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};
