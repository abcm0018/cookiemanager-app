import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const CSelectStatisticsForm = ({
  category,
  country,
  platform,
  state,
  language,
  onStatisticsInputChange,
}) => {
  return (
    <>
      {/* Filtros principales alineados con las fechas */}
      <Box
        width="100%"
        maxWidth="900px"
        margin="0 auto"
        mb={2}
        display="flex"
        gap={2}
        justifyContent="space-between"
      >
        <Box flex={1} sx={{ ml: -2 }}>
          {" "}
          {/* Movemos la categoría un poco a la izquierda */}
          <Typography sx={{ mb: 1 }}>
            Filtrar por categoría de cookie
          </Typography>
          <FormControl fullWidth size="medium">
            <InputLabel>Categoría de cookie</InputLabel>
            <Select
              name="category"
              label="Categoría de cookie"
              value={category}
              onChange={onStatisticsInputChange}
            >
              <MenuItem value="Essential">Esenciales</MenuItem>
              <MenuItem value="Optional">Opcionales</MenuItem>
              <MenuItem value="Third">Terceros</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box flex={1}>
          <Typography sx={{ mb: 1 }}>Filtrar por país de acceso</Typography>
          <FormControl fullWidth size="medium">
            <InputLabel>País de acceso</InputLabel>
            <Select
              label="País de acceso"
              name="country"
              value={country}
              onChange={onStatisticsInputChange}
            >
              <MenuItem value="fr">Francia</MenuItem>
              <MenuItem value="es">España</MenuItem>
              <MenuItem value="it">Italia</MenuItem>
              <MenuItem value="de">Alemania</MenuItem>
              <MenuItem value="pt">Portugal</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box flex={1} sx={{ mr: -1.7 }}>
          <Typography sx={{ mb: 1 }}>Filtrar por idioma</Typography>
          <FormControl fullWidth size="medium">
            <InputLabel>Idioma</InputLabel>
            <Select
              name="language"
              label="Idioma"
              value={language}
              onChange={onStatisticsInputChange}
            >
              <MenuItem value="fr">Francés</MenuItem>
              <MenuItem value="es-ES">Español</MenuItem>
              <MenuItem value="it">Italiano</MenuItem>
              <MenuItem value="de">Alemán</MenuItem>
              <MenuItem value="pt">Portugués</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Segunda fila centrada */}
      <Box
        width="100%"
        maxWidth="600px"
        margin="0 auto"
        display="flex"
        gap={2}
        justifyContent="center"
      >
        <Box flex={1}>
          <Typography sx={{ mb: 1 }}>Filtrar por plataforma</Typography>
          <FormControl fullWidth size="medium">
            <InputLabel>Tipo de plataforma</InputLabel>
            <Select
              name="platform"
              label="Tipo de plataforma"
              value={platform}
              onChange={onStatisticsInputChange}
            >
              <MenuItem value="Mobile">Móvil</MenuItem>
              <MenuItem value="web">Web</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box flex={1}>
          <Typography sx={{ mb: 1 }}>Filtrar por el estado</Typography>
          <FormControl fullWidth size="medium">
            <InputLabel>Estado de aceptación</InputLabel>
            <Select
              name="state"
              label="Estado de aceptación"
              value={state}
              onChange={onStatisticsInputChange}
            >
              <MenuItem value="Aceptado">Aceptado</MenuItem>
              <MenuItem value="Rechazado">Rechazado</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

CSelectStatisticsForm.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  platform: PropTypes.string,
  state: PropTypes.string,
  language: PropTypes.string,
  onStatisticsInputChange: PropTypes.func,
};
