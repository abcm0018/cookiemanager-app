import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const CSelectStatisticsForm = () => {
  return (
    <>
      <Box sx={{ width: 220, mr: 2 }}>
        <Typography sx={{ mb: 1 }}>Filtrar por tipo de cookie</Typography>
        <FormControl fullWidth size="medium">
          <InputLabel id="select-label-idioma">Tipo de cookie</InputLabel>
          <Select label="Tipo de cookie">
            <MenuItem value="Esenciales">Esenciales</MenuItem>
            <MenuItem value="Opcionales">Opcionales</MenuItem>
            <MenuItem value="Terceros">Terceros</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 220, mr: 2 }}>
        <Typography sx={{ mb: 1 }}>Filtrar por país de acceso</Typography>
        <FormControl fullWidth size="medium">
          <InputLabel id="select-label-idioma">País de acceso</InputLabel>
          <Select label="País de acceso">
            <MenuItem value="Francia">Francia</MenuItem>
            <MenuItem value="España">España</MenuItem>
            <MenuItem value="Italia">Italia</MenuItem>
            <MenuItem value="Alemania">Alemania</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 220, mr: 2 }}>
        <Typography sx={{ mb: 1 }}>Filtrar por plataforma</Typography>
        <FormControl fullWidth size="medium">
          <InputLabel id="select-label-idioma">Tipo de plataforma</InputLabel>
          <Select label="Tipo de plataforma">
            <MenuItem value="movil">Móvil</MenuItem>
            <MenuItem value="web">Web</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ width: 220 }}>
        <Typography sx={{ mb: 1 }}>Filtrar por el estado</Typography>
        <FormControl fullWidth size="medium">
          <InputLabel id="select-label-idioma">Estado de aceptación</InputLabel>
          <Select label="Estado de aceptación">
            <MenuItem value="aceptado">Aceptado</MenuItem>
            <MenuItem value="rechazado">Rechazado</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
