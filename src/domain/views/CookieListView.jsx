import { Box, Button, Grid2 } from "@mui/material";
import { CAddCookieDialog } from "../components/CAddCookieDialog";
import { useState } from "react";
import { CookieTypeComponent } from "../components/CookieTypeComponent";
import { CHeaderCookieList } from "../components/CHeaderCookieList";

export const CookieListView = () => {
  const cookies = [
    {
      nombre: "CONSENT",
      tipo: "Authentication",
      proveedor: "Google",
      duracion: "1 año",
      descripcion: "Almacena el consentimiento de cookies",
      etiquetas: [
        { id: 0, nombre: "httpOnly" },
        { id: 1, nombre: "Secure" },
        { id: 1, nombre: "LAX" },
      ],
    },
    {
      nombre: "SID",
      tipo: "Authentication",
      proveedor: "Google",
      duracion: "2 años",
      descripcion: "Contiene la ID de sesión del usuario",
      etiquetas: [
        { id: 0, nombre: "httpOnly" },
        { id: 1, nombre: "Secure" },
      ],
    },
  ];

  const descripcion =
    "A continuación encontrará una lista de las cookies detectadas en su sitio web junto con información detallada sobre cada una de ellas. Puede moverlas entre categorías añadir una descripción a cada cookie que se mostrará en su declaración de cookies autogenerada.";

  const [openAddCookieDialog, setOpenAddCookieDialog] = useState(false);

  const handleOpenCookieDialog = () => {
    console.log("Abriendo el dialogo para añadir cookie");
    setOpenAddCookieDialog(true);
  };

  const handleCloseAddCookieDialog = () => {
    console.log("Cerrando dialogo de añadir cookie");
    setOpenAddCookieDialog(false);
  };

  return (
    <Grid2 container sx={{ pb: 5, pt: 4, pl: 10, pr: 10 }}>
      <Box sx={{ width: 990 }}>
        <CHeaderCookieList
          descripcion={descripcion}
          handleOpenCookieDialog={handleOpenCookieDialog}
        />
        <CAddCookieDialog
          openAddCookieDialog={openAddCookieDialog}
          handleCloseAddCookieDialog={handleCloseAddCookieDialog}
        />
        <CookieTypeComponent title="Cookies esenciales" cookies={cookies} />
        <CookieTypeComponent title="Cookies opcionales" cookies={cookies} />
        <CookieTypeComponent title="Cookies de terceros" cookies={cookies} />
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ bgcolor: "secondary.main" }}>
            Exportar cookies
          </Button>
        </Box>
      </Box>
    </Grid2>
  );
};
