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
  onStatisticsInputChange,
}) => {
  return (
    <>
      <Box sx={{ width: 220, mr: 2 }}>
        <Typography sx={{ mb: 1 }}>Filtrar por categoria de cookie</Typography>
        <FormControl fullWidth size="medium">
          <InputLabel id="select-label-idioma">Categoria de cookie</InputLabel>
          <Select
            label="Tipo de cookie"
            onChange={onStatisticsInputChange}
            name="category"
            value={category}
          >
            <MenuItem value="Essential">Esenciales</MenuItem>
            <MenuItem value="Optional">Opcionales</MenuItem>
            <MenuItem value="Third">Terceros</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 220, mr: 2 }}>
        <Typography sx={{ mb: 1 }}>Filtrar por país de acceso</Typography>
        <FormControl fullWidth size="medium">
          <InputLabel id="select-label-idioma">País de acceso</InputLabel>
          <Select
            label="País de acceso"
            onChange={onStatisticsInputChange}
            name="country"
            value={country}
          >
            <MenuItem value="fr">Francia</MenuItem>
            <MenuItem value="es">España</MenuItem>
            <MenuItem value="it">Italia</MenuItem>
            <MenuItem value="de">Alemania</MenuItem>
            <MenuItem value="pt">Portugal</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 220, mr: 2 }}>
        <Typography sx={{ mb: 1 }}>Filtrar por plataforma</Typography>
        <FormControl fullWidth size="medium">
          <InputLabel id="select-label-idioma">Tipo de plataforma</InputLabel>
          <Select
            label="Tipo de plataforma"
            onChange={onStatisticsInputChange}
            name="platform"
            value={platform}
          >
            <MenuItem value="Mobile">Móvil</MenuItem>
            <MenuItem value="web">Web</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 220 }}>
        <Typography sx={{ mb: 1 }}>Filtrar por el estado</Typography>
        <FormControl fullWidth size="medium">
          <InputLabel id="select-label-idioma">Estado de aceptación</InputLabel>
          <Select
            label="Estado de aceptación"
            value={state}
            onChange={onStatisticsInputChange}
            name="state"
          >
            <MenuItem value="Aceptado">Aceptado</MenuItem>
            <MenuItem value="Rechazado">Rechazado</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

CSelectStatisticsForm.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  platform: PropTypes.string,
  state: PropTypes.string,
  onStatisticsInputChange: PropTypes.func,
};
