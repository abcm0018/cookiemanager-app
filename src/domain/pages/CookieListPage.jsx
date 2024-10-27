import {
  Box,
  Button,
  Grid2,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";
import { CookieTable } from "../components/CookieTable";

export const CookieListPage = () => {
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

  return (
    <Grid2 container sx={{ pb: 5, pt: 4, pl: 10, pr: 10 }}>
      <Box sx={{ width: 990 }}>
        <Box component="div">
          <Typography variant="body" sx={{ color: "primary.main" }}>
            A continuación encontrará una lista de las cookies detectadas en su
            sitio web junto con información detallada sobre cada una de ellas.
            Puede moverlas entre categorías añadir una descripción a cada cookie
            que se mostrará en su declaración de cookies autogenerada.
          </Typography>
        </Box>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ bgcolor: "secondary.main" }}>
            Añadir cookies
          </Button>
        </Box>
        <Box component="div" sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ color: "primary.main", pb: 2 }}>
            Cookies esenciales
          </Typography>
          <TableContainer component={Paper}>
            <CookieTable cookies={cookies} />
          </TableContainer>
        </Box>
        <Box component="div" sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ color: "primary.main", pb: 2 }}>
            Cookies opcionales
          </Typography>
          <TableContainer component={Paper}>
            <CookieTable cookies={cookies} />
          </TableContainer>
        </Box>
        <Box component="div" sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ color: "primary.main", pb: 2 }}>
            Cookies terceros
          </Typography>
          <TableContainer component={Paper}>
            <CookieTable cookies={cookies} />
          </TableContainer>
        </Box>
        <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ bgcolor: "secondary.main" }}>
            Exportar cookies
          </Button>
        </Box>
      </Box>
    </Grid2>
  );
};
