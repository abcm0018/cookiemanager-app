import { Box, Grid2, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { CStatisticsButtonForm } from "./CStatisticsButtonForm";
import { CSelectStatisticsForm } from "./CSelectStatisticsForm";
import { useDomainStore, useForm } from "../../hooks";
import { useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { statisticsFormFields } from "../utils";
import { CGraphicDialog } from "./CGraphicDialog";

export const StatisticsForm = () => {
  const { id } = useParams();
  const {
    statistics = [],
    startLoadingStatistics,
    isLoadingCookieStatistics,
  } = useDomainStore();

  // Evitamos que seleccione la fecha actual por defecto
  const [value, setvalue] = useState([null, null]);

  const [openDialog, setOpenDialog] = useState(false);

  const {
    category,
    country,
    platform,
    state,
    language,
    onInputChange: onStatisticsInputChange,
    onResetForm: clearFilters,
  } = useForm(statisticsFormFields);

  const onStatisticsSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(true);
    startLoadingStatistics({
      domainId: id,
      estado: state,
      fechaDesde:
        value[0] === null
          ? ""
          : dayjs(value[0]).format("YYYY-MM-DD", "us", true),
      fechaHasta:
        value[1] == null
          ? ""
          : dayjs(value[1]).format("YYYY-MM-DD", "us", true),
      plataforma: platform,
      pais: country,
      categoria: category,
      idioma: language,
    });
  };

  console.log({
    domainId: id,
    estado: state,
    fechaDesde: dayjs(value[0]).format("YYYY-MM-DD"),
    fechaHasta: dayjs(value[1]).format("YYYY-MM-DD"),
    plataforma: platform,
    pais: country,
    categoria: category,
    idioma: language,
  });

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClearFilters = () => {
    setvalue([null, null]); // Limpiar el rango de fechas
    clearFilters(); // Limpiar otros filtros si es necesario
  };

  return (
    <>
      <form onSubmit={onStatisticsSubmit}>
        <Box component="div" sx={{ width: 932 }}>
          <Typography variant="h5">Estadísticas de uso de cookies</Typography>
          <Box sx={{ pt: 2 }}>
            <Typography variant="body">
              En la gráfica de abajo usted puede ver la frecuencia con que el
              total de acciones de consentimientos. Tenga en cuenta que es
              normal ver muchas sesiones que acciones de consentimiento ya que
              los usuarios que regresan se cuentan cada día que sistan el sistio
              web después de haber configurado los ajustes.
            </Typography>
          </Box>
          <Box sx={{ mt: 3, width: 928 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
              <DemoContainer components={["DateRangePicker"]}>
                <DateRangePicker
                  localeText={{ start: "Fecha incio", end: "Fecha fin" }}
                  value={value}
                  onChange={(newValue) => {
                    setvalue(newValue);
                  }}
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
        <Grid2 container sx={{ pt: 2, width: 930 }}>
          <CSelectStatisticsForm
            category={category}
            country={country}
            platform={platform}
            state={state}
            language={language}
            onStatisticsInputChange={onStatisticsInputChange}
          />
          <CStatisticsButtonForm clearFilters={handleClearFilters} />
        </Grid2>
      </form>
      <CGraphicDialog
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        statistics={statistics}
        isLoading={isLoadingCookieStatistics}
      />
    </>
  );
};
