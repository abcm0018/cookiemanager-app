import { Button, Grid2, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout
      title="Iniciar sesión"
      description="Introduce tu email y contraseña para iniciar sesión en tu cuenta"
      size={420}
    >
      <form>
        <Grid2 container>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo electrónico"
              type="email"
              placeholder="Correo electrónico"
              fullWidth
              size="medium"
              required
            />
          </Grid2>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              size="medium"
              required
            />
            <Grid2
              container
              direction="row"
              justifyContent="end"
              sx={{ mt: 1, mb: 1 }}
            >
              <Link
                to="/auth/recovery-password"
                component={RouterLink}
                underline="none"
                sx={{ color: "secondary.main" }}
              >
                ¿Has olvidado la contraseña?
              </Link>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} sx={{ mb: 1, mt: 2 }}>
          <Grid2 size={12}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              href="/domain"
              sx={{ height: 52, bgcolor: "secondary.main" }}
            >
              INICIAR SESIÓN
            </Button>
          </Grid2>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" sx={{ mb: 3 }}>
          <Link
            to="/auth/register"
            component={RouterLink}
            underline="none"
            sx={{ color: "secondary.main" }}
          >
            ¿No tienes una cuenta? Registrarse
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
