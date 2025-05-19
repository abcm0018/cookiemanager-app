import { Typography } from "@mui/material";

export const Introducción = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Bienvenido a la sección de Ayuda de CookieManager
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1 }}>
        Bienvenido a CookieManager, la herramienta integral para gestionar del
        consentimiento de cookies, diseñada para ayudarte a cumplir con las
        principales normativas de privacidad de datos. Desde su panel de
        control, puedes configurar banners, administrar dominios y categorías de
        cookies, y personalizar los mensajes mostrados a los usuarios.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
        Antes de comenzar, asegúrate de acceder con tus credenciales. Si todavía
        no tienes una cuenta, puedes registrarte fácilmente y comenzar con una
        prueba gratuita desde nuestro sitio web.
      </Typography>
    </>
  );
};
