import { Box, Stack, Typography } from "@mui/material";
import perfil from "../../assets/img/datospersonale.png";

export const Cuenta = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Cuenta
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Esta sección ofrece una guía completa para gestionar tu perfil,
        incluyendo la actualización de datos personales y la modificación o
        cancelación de tu plan de suscripción.
      </Typography>
      <Box>
        <Typography variant="h6" component="h3" gutterBottom sx={{ mb: 3 }}>
          Perfil de usuario
        </Typography>
        <Typography variant="body1">
          Para editar tus datos personales, haz clic en tu nombre ubicado en la
          esquina superior derecha y selecciona <em>Configuración</em>. Dentro
          de esa sección, encontrarás:
        </Typography>
        <Stack component="ul" spacing={2} sx={{ pl: 3 }}>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="body1">
              Actualizar tu nombre, correo electrónico y demás información
              personal desde la opción <em>Editar perfil</em>.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ listStyleType: "disc" }}>
              Modificar tu plan de suscripción mediante la opción{" "}
              <em>Actualizar plan</em>.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ listStyleType: "disc" }}>
              Cancelar tu suscripción desde la opción <em>Cancelar plan</em>.
            </Typography>
          </li>
        </Stack>
        <Box
          component="img"
          src={perfil}
          alt="Perfil de usuario"
          sx={{
            width: 500,
            display: "block",
            mx: "auto",
            ml: 35,
            textAlign: "center",
            borderRadius: 2,
          }}
        />
      </Box>
    </>
  );
};
