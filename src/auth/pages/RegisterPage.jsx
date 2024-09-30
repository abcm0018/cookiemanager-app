import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

export const RegisterPage = () => {
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
          Registro
        </Typography>
        <form>
          <Grid2 container spacing={2}>
            <Grid2 item xs={6} sx={{ minWidth: "250px" }}>
              <TextField
                label="Nombre"
                type="text"
                placeholder="Nombre*"
                fullWidth
              />
            </Grid2>
            <Grid2 item xs={6} sx={{ minWidth: "250px" }}>
              <TextField
                label="Apellidos"
                type="text"
                placeholder="Apellidos*"
                fullWidth
              />
            </Grid2>
          </Grid2>
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
          <Grid2 container>
            <Grid2 size={12} sx={{ mt: 2 }}>
              <TextField
                label="Compañía"
                type="text"
                placeholder="Compañía*"
                fullWidth
              />
            </Grid2>
          </Grid2>
          <Grid2 container>
            <Grid2 size={12} sx={{ mt: 2 }}>
              <TextField
                label="Plan de subscripción"
                type="text"
                placeholder="Elige un plan de subscripción*"
                fullWidth
              />
            </Grid2>
          </Grid2>
          <Grid2>
            <FormGroup>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Acepto las Condiciones de Servicio y la Política de Privacidad"
              />
            </FormGroup>
          </Grid2>
          <Grid2>
            <Grid2 container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Button variant="contained" color="primary" fullWidth>
                Crear cuenta
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  );
};
