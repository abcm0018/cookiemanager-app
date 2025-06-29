import { Box, Typography } from "@mui/material";
import login from "../../assets/img/login.png";
import contrasena from "../../assets/img/contrasena.png";
import registro from "../../assets/img/registro.png";

export const Autenticacion = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Autenticación
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        El acceso a tu cuenta de CookieManager se realiza a través de la
        pantalla de inicio de sesión. Desde allí podrás gestionar tus sitios
        web, configurar tus dominios y controlar el comportamiento del sistema
        de cookies de forma centralizada. Para ingresar, introduce tu correo
        electrónico y la contraseña vinculada a tu cuenta.
      </Typography>
      {/* Entrar */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Inicio de sesión
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Accede con tus credenciales desde la página de login. Una vez
          autenticado, serás redirigido automáticamente al panel principal,
          donde podrás administrar tu configuración personalizada y tus dominios
          registrados.
        </Typography>
        <Box
          component="img"
          src={login}
          alt="Pantalla de inicio de sesión"
          sx={{
            width: 300,
            display: "block",
            mx: "auto",
            ml: 50,
            textAlign: "center",
            borderRadius: 2,
          }}
        />
      </Box>
      {/* Registro de usuario*/}
      <Box>
        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Crear una cuenta
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Registrarse en CookieManager es un proceso rápido que solo te tomará
          unos minutos. Al crear una cuenta, podrás administrar fácilmente el
          cumplimiento de cookies y el consentimiento desde un panel
          centralizado.
        </Typography>

        <Typography variant="body1" sx={{ mb: 1.5 }}>
          A continuación, te mostramos una guía paso a paso para completar el
          registro:
        </Typography>

        <Typography variant="body1" sx={{ mb: 1.5 }}>
          1. Accede a CookieManager y haz clic en <em>Crear cuenta</em>.
        </Typography>

        <Typography variant="body1" sx={{ mb: 1.5 }}>
          2. Introduce tu nombre, apellidos, correo electrónico, contraseña,
          compañía y selecciona un plan de suscripción. Además, es necesario
          aceptar las condiciones del servicio y la política de privacidad.
          Finalmente, haz clic en el botón <em>Crear cuenta</em>.
        </Typography>
        <Box
          component="img"
          src={registro}
          alt="Pantalla de crear cuenta"
          sx={{
            width: 300,
            display: "block",
            mx: "auto",
            mb: 5,
            ml: 50,
            textAlign: "center",
            borderRadius: 2,
          }}
        />
        <Typography variant="body1">
          Finalmente, accederás al panel de control de dominios de
          CookieManager, donde podrás gestionar tus propios dominios.
        </Typography>
      </Box>
      {/* Contraseña olvidada */}
      <Box>
        <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
          ¿Olvidaste tu contraseña?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Si no recuerdas tu contraseña, puedes restablecerla rápidamente. Solo
          debes hacer clic en <em>¿Has olvidado tu contraseña?</em> en la
          pantalla de acceso, introducir el correo asociado y la nueva
          contraseña, y posteriormente presionar <em>Restablecer contraseña</em>
          .
        </Typography>
        <Box
          component="img"
          src={contrasena}
          alt="Pantalla de recuperar contraseña"
          sx={{
            width: 300,
            display: "block",
            mx: "auto",
            ml: 50,
            textAlign: "center",
            borderRadius: 2,
          }}
        />
      </Box>
    </>
  );
};
