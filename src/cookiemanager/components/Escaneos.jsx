import { Box, Typography } from "@mui/material";
import escaneo from "../../assets/img/escaneo.png";
import noEscaneo from "../../assets/img/noEscaneo.png";

export const Escaneos = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Escaneos de cookies
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        En la sección <em>Escaneo</em>, puede revisar los resultados de los
        análisis realizados sobre sus dominios. Estos escaneos proporcionan
        información detallada sobre las cookies utilizadas en su sitio web,
        facilitando el cumplimiento de las normativas de privacidad. La tabla de
        resultados muestra datos clave como el estado del escaneo, la cantidad
        de cookies detectadas, la fecha de creación y modificación, el último
        escaneo realizado, y un botón que permite ver todas las cookies
        identificadas.
      </Typography>
      <Box
        component="img"
        src={escaneo}
        alt="Pantalla de escaneo de cookies"
        sx={{
          width: 500,
          display: "block",
          mx: "auto",
          ml: 35,
          textAlign: "center",
          borderRadius: 2,
        }}
      />
      <Typography>
        En caso de que no haya realizado ningún escaneo ni carga manual de
        cookies, el sistema mostrará un mensaje informativo en la pantalla con
        el siguiente formato: “Aún no has realizado ningún escaneo ni carga de
        cookies”. Este mensaje actúa como recordatorio para que el usuario
        inicie un escaneo o cargue cookies manualmente a fin de comenzar con la
        detección y clasificación de datos en su dominio{" "}
      </Typography>
      <Box
        component="img"
        src={noEscaneo}
        alt="Pantalla donde se muestra que no hay escaneo"
        sx={{
          width: 500,
          display: "block",
          mx: "auto",
          ml: 35,
          textAlign: "center",
          borderRadius: 2,
        }}
      />
    </>
  );
};
