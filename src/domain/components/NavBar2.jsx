import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useState } from "react";

export const NavBar2 = () => {
  const pages = [
    "Descripción general",
    "Implementación",
    "Ajustes",
    "Escaneo",
    "Cookies",
    "Informes",
  ];

  const [activePage, setActivePage] = useState("");

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#fafafa" }}>
      <Box
        sx={{
          maxWidth: "1200px", // Asegúrate de que sea el mismo ancho
          margin: "0 auto", // Centro el contenido
          backgroundColor: "white",
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            backgroundColor: "white",
            width: "100%",
            height: "50px",
            padding: "0 10px",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => setActivePage(page)}
                  sx={{
                    my: 2,
                    color: "primary.main",
                    display: "block",
                    borderBottom:
                      activePage === page ? "2px solid blue" : "none",
                    padding: "0 15px",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};
