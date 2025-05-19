import { Box, Stack, Typography } from "@mui/material";
import informe from "../../assets/img/informe.png";
import grafico from "../../assets/img/grafico.png";
import noFiltro from "../../assets/img/noFiltro.png";
import graficoSin from "../../assets/img/graficoSin.png";

export const Informes = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Informe
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        La pestaña <em>Informe</em> proporciona una visión general del
        comportamiento relacionado con las cookies en su sitio web, incluyendo
        el uso del sitio y las decisiones de consentimiento de los usuarios.
      </Typography>
      <Typography variant="body1">
        El propietario del sitio web puede personalizar los informes
        seleccionando un rango de fechas y aplicando distintos filtros para
        refinar los resultados. Entre las opciones de filtrado disponibles se
        incluyen:
      </Typography>
      <Stack component="ul" spacing={2} sx={{ pl: 3 }}>
        <li style={{ listStyleType: "disc" }}>
          <Typography variant="body1">
            Categoría: Esencial, Opcional o Terceros.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" style={{ listStyleType: "disc" }}>
            Estado: Aceptado o Rechazado.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" style={{ listStyleType: "disc" }}>
            País: Según la ubicación geográfica del usuario.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" style={{ listStyleType: "disc" }}>
            Plataforma: Web o Móvil.
          </Typography>
        </li>
        <li>
          <Typography variant="body1" style={{ listStyleType: "disc" }}>
            Idioma: Idioma del navegador o la sesión del usuario.
          </Typography>
        </li>
      </Stack>
      <Box
        component="img"
        src={informe}
        alt="Pantalla de inicio de sesión"
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
        Una vez configurados los filtros, se muestra un desplegable con un
        gráfico circular que visualiza de manera clara la distribución de las
        acciones de consentimiento según los criterios seleccionados. Esta
        representación permite comprender fácilmente cómo interactúan los
        usuarios con las opciones de cookies del sitio.
      </Typography>
      <Box
        component="img"
        src={grafico}
        alt="Pantalla de inicio de sesión"
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
        En caso de que el usuario no seleccione ningún filtro, el sistema
        mostrará las estadísticas globales correspondientes a todas las cookies
        asociadas al dominio correspondiente, sin aplicar ningún tipo de
        restricciones
      </Typography>
      <Box
        component="img"
        src={noFiltro}
        alt="Pantalla de inicio de sesión"
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
        Posteriormente, se despliega un desplegable que presenta un gráfico
        estadístico interactivo con los resultados obtenidos. En este caso, al
        no aplicarse filtros, el sistema muestra un informe general que incluye
        todas las cookies asociadas al dominio. El gráfico permite visualizar de
        forma clara y estructurada la distribución, aceptación y uso de cookies
        de manera global, sin restricciones por fecha, categoría, estado ni
        otros criterios
      </Typography>
      <Box
        component="img"
        src={graficoSin}
        alt="Pantalla de inicio de sesión"
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
