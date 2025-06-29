import { Box, Button, Grid2, Paper, TableContainer } from "@mui/material";
import { CHeaderCookieList, CookieTable } from "../components";
import { useEffect } from "react";
import { useCookieStore } from "../../hooks/useCookieStore";
import Swal from "sweetalert2";
import { useDomainStore } from "../../hooks";
import { useParams } from "react-router-dom";
import { CNoCookies } from "../components/CNoCookies";

export const CookieListView = () => {
  const descripcion =
    "A continuación encontrará una lista de las cookies detectadas en su sitio web junto con información detallada sobre cada una de ellas. Puede moverlas entre categorías añadir una descripción a cada cookie que se mostrará en su declaración de cookies autogenerada.";

  const { id } = useParams();
  const { cookies, startLoadingCookies, errorMessage } = useCookieStore();
  const {
    activeDomain,
    startGettingDomainById,
    startExportingCookies,
    isLoadingActiveDomain,
  } = useDomainStore();

  const isInactive = activeDomain?.status === "Inactivo";

  useEffect(() => {
    if (isLoadingActiveDomain) {
      startGettingDomainById(id);
    }
  }, []);

  // Función que se ejecuta al hacer clic en el botón
  const handleExportCookies = () => {
    startExportingCookies(activeDomain.id);
  };

  useEffect(() => {
    startLoadingCookies(activeDomain.id);
  }, []);

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error al cargar las cookies", errorMessage, "error");
    }
  }, [errorMessage]);
  return (
    <Grid2
      container
      justifyContent="center"
      alignItems="center"
      sx={{ pb: 5, pt: 4, pl: 10, pr: 10, minHeight: "400px" }} // puedes ajustar la altura
    >
      {cookies.length === 0 ? (
        <CNoCookies />
      ) : (
        <Grid2 item xs={12}>
          <CHeaderCookieList descripcion={descripcion} />
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <CookieTable cookies={cookies} isInactive={isInactive} />
          </TableContainer>
          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "secondary.main" }}
              onClick={handleExportCookies}
            >
              Exportar cookies
            </Button>
          </Box>
        </Grid2>
      )}
    </Grid2>
  );
};
