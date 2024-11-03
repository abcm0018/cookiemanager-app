import { Box, Grid2, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { CStatisticsButtonForm } from "./CStatisticsButtonForm";
import { CSelectStatisticsForm } from "./CSelectStatisticsForm";

export const StatisticsForm = () => {
  return (
    <form>
      <Box component="div" sx={{ width: 932 }}>
        <Typography variant="h5">Estadísticas de uso de cookies</Typography>
        <Box sx={{ pt: 2 }}>
          <Typography variant="body">
            En la gráfica de abajo usted puede ver la frecuencia con que el
            total de acciones de consentimientos. Tenga en cuenta que es normal
            ver muchas sesiones que acciones de consentimiento ya que los
            usuarios que regresan se cuentan cada día que sistan el sistio web
            después de haber configurado los ajustes.
          </Typography>
        </Box>
        <Box sx={{ mt: 3, width: 928 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DemoContainer components={["DateRangePicker"]}>
              <DateRangePicker
                localeText={{ start: "Fecha incio", end: "Fecha fin" }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>
      <Box sx={{ width: 800 }}>
        <Typography variant="h6" sx={{ pt: 2 }}>
          Aplica los siguientes filtros para refinar aun más los resultados
        </Typography>
      </Box>
      <Grid2 container sx={{ pt: 2, width: 950 }}>
        <CSelectStatisticsForm />
        <CStatisticsButtonForm />
      </Grid2>
    </form>
  );
};
