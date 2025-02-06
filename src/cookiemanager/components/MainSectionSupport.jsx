import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { HeadSectionSupport } from "./HeadSectionSupport";

export const MainSectionSupport = () => {
  return (
    <>
      <HeadSectionSupport />
      <Grid2
        container
        direction="column"
        sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
      >
        <Container>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              boxShadow: 3,
            }}
          >
            <Grid2 container sx={{ pb: 10, pt: 4, pl: 8, pr: 8 }}>
              <Box>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  ¿Tienes problemas con CookieManager?
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  ¡Estamos aquí para ayudarte! Si tienes dificultades al
                  implementar o usar CookieManager en tu sitio web, no dudes en
                  ponerte en contacto con nosotros. Nuestro equipo está dedicado
                  a brindarte asistencia en todo momento.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Para solicitar ayuda desde el panel de CookieManager, dirígete
                  a la sección "Soporte" y selecciona "Contactar Soporte" en el
                  menú superior. Describe tu problema y elige el dominio
                  afectado en el formulario. Nuestros expertos te responderán
                  rápidamente. Asegúrate de incluir todos los detalles posibles
                  para que podamos brindarte la mejor asistencia.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Antes de contactarnos, revisa nuestras guías de Instalación y
                  Solución de problemas, donde encontrarás respuestas a
                  preguntas frecuentes y consejos útiles.
                </Typography>
                <Box
                  sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "secondary.main" }}
                  >
                    Contactar
                  </Button>
                </Box>
              </Box>
            </Grid2>
          </Box>
        </Container>
      </Grid2>
    </>
  );
};
