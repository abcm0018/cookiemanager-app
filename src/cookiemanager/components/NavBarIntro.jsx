import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { CLogo } from "./CLogo";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const NavBarIntro = () => {
  const pages = [
    { label: "Planes de suscripción", route: "/subscriptions" },
    { label: "FAQs", route: "/faq" },
    { label: "Soporte", route: "/support" },
    { label: "Ayuda", route: "/help" },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const location = useLocation();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <AppBar
          position="static"
          elevation={0.9}
          sx={{ backgroundColor: "white" }}
        >
          <Toolbar disableGutters>
            <CLogo />

            <Box sx={{ flexGrow: 0.08 }} />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.route}
                  onClick={handleCloseNavMenu}
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

            <Button
              variant="outlined"
              size="large"
              href="/auth/login"
              sx={{
                bgcolor: "secondary.main",
                height: 52,
                borderColor: "white",
                color: "white",
                "&:hover": {
                  bgcolor: "white",
                  color: "secondary.main",
                  borderColor: "secondary.main",
                },
              }}
            >
              INICIAR SESIÓN
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};
