import PropTypes from "prop-types";
import { Box, Grid2, Paper, TableContainer, Typography } from "@mui/material";
import { CookieScanTable } from "../components";
import { useDomainStore } from "../../hooks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export const ScannerCookieView = ({ onDetailClick }) => {
  const { id } = useParams();
  const { domains, errorMessage, startLoadingDomains } = useDomainStore();

  const [loading, setLoading] = useState(true); // estado de carga
  const [domain, setDomain] = useState(null);

  // Cargar dominios al montar el componente
  useEffect(() => {
    if (domains.length === 0) {
      startLoadingDomains().then(() => setLoading(false));
    } else {
      setLoading(false); // Si ya hay dominios cargados, no es necesario recargar
    }
  }, [domains.length, startLoadingDomains]);

  useEffect(() => {
    // Si los dominios ya están cargados, encuentra el dominio correspondiente
    if (!loading && domains.length > 0) {
      const currentDomain = domains.find(
        (element) => element.id === parseInt(id, 10)
      );
      setDomain(currentDomain);
    }
    // startLoadingDomains();
  }, [loading, id, domains]);

  useEffect(() => {
    // Manejo de errores en la carga
    if (errorMessage !== undefined) {
      Swal.fire(
        "Error al cargar los detalles del dominio",
        errorMessage,
        "error"
      );
    }
  }, [errorMessage]);

  if (loading) {
    // Mostrar un mensaje de carga mientras se obtienen los datos
    return <p>Cargando detalles del dominio...</p>;
  }

  if (!domain) {
    return <p>No se encontró el dominio con ID {id}.</p>;
  }

  return (
    <Grid2 container sx={{ pb: 5, pt: 4, pl: 10, pr: 10 }}>
      <Box sx={{ width: 990 }}>
        <Box component="div">
          <Typography variant="h6" sx={{ color: "primary.main" }}>
            Escaneo de cookies
          </Typography>
        </Box>
        <Box component="div" sx={{ mt: 2 }}>
          <TableContainer component={Paper}>
            <CookieScanTable
              key={domain.dateCreation}
              domain={domain}
              onDetailClick={onDetailClick}
            />
          </TableContainer>
        </Box>
      </Box>
    </Grid2>
  );
};

ScannerCookieView.propTypes = {
  onDetailClick: PropTypes.func.isRequired,
};
