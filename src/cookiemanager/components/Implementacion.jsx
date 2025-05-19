import { Box, Typography } from "@mui/material";
import implementacion from "../../assets/img/implementacion.png";

export const Implementacion = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Implementación
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        En esta sección encontrará las instrucciones necesarias para integrar
        correctamente CookieManager en su sitio web. Una configuración adecuada
        garantiza que las cookies y tecnologías de seguimiento no se activen sin
        el consentimiento del usuario. Puede elegir entre integración mediante
        Google Tag Manager, plugin de WordPress o inserción manual del código en
        su sitio.
      </Typography>
      <Box
        component="img"
        src={implementacion}
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
