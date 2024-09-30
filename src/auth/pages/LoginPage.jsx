import { Button, Grid2, TextField, Typography } from "@mui/material";

export const LoginPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2 sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }} align="center" color="#79747E">
          Iniciar Sesión
        </Typography>
        <Typography variant="body2" sx={{mb:1}} align="center" color="#79747E">
          Introduzca el email y la contraseña para iniciar sesión
        </Typography>
        <form>
          <Grid2 container>
            <Grid2 size={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo electrónico"
                type="email"
                placeholder="Correo electrónico*"
                fullWidth
              />
            </Grid2>
          </Grid2>
          <Grid2 container>
            <Grid2 size={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña*"
                fullWidth
              />
            </Grid2>
          </Grid2>
          <Grid2>
            <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Button variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  );
};
