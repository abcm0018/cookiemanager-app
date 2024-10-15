import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";

export const BoxComponentDetails = () => {
  return (
    <Grid2
      container
      spacing={4}
      sx={{ backgroundColor: "#fafafa", pt: 2, minHeight: "100vh" }}
    >
      <Container>
        <Box
          sx={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "1200px", // Asegúrate de que sea el mismo ancho
            margin: "0 auto", // Centro el contenido
            backgroundColor: "white",
          }}
        >
          <Grid2 container spacing={4}>
            <Grid2 item>
              <Card
                sx={{
                  width: 333,
                  height: 245,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    Plan básico
                  </Typography>
                </CardContent>
                <Button variant="outlined" sx={{ alignSelf: "flex-end", m: 2 }}>
                  Actualizar plan
                </Button>
              </Card>
            </Grid2>

            <Grid2 item>
              <Card
                sx={{
                  width: 333,
                  height: 245,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    107 cookies
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                    66 cookies se instalan antes del consentimiento del usuario
                    o aún no se han categorizado.
                  </Typography>
                </CardContent>
                <Button variant="outlined" sx={{ alignSelf: "flex-end", m: 2 }}>
                  Gestionar cookies
                </Button>
              </Card>
            </Grid2>

            <Grid2 item>
              <Card sx={{ width: 333, height: 245 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    ¿Qué quieres hacer?
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 2, fontSize: "16px", textAlign: "left" }}
                  >
                    - Customizar el cookie banner.
                    <br />
                    - Cambiar los ajustes y la región.
                    <br />
                    - Configurar el idioma.
                    <br />
                    - Implementar en mi sitio web.
                    <br />- Gestionar cookies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>

            <Grid2 item>
              <Card
                sx={{
                  width: 333,
                  height: 245,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    Último escaneo de cookies: 18/07/2024
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "left", mt: 2 }}>
                    107 cookies encontradas en 50 páginas.
                  </Typography>
                </CardContent>
                <Button variant="outlined" sx={{ alignSelf: "flex-end", m: 2 }}>
                  Escanear
                </Button>
              </Card>
            </Grid2>

            <Grid2 item>
              <Card
                sx={{
                  width: 333,
                  height: 245,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ textAlign: "left" }}>
                    Borrar dominio
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "left", mt: 2 }}>
                    Esto borrará tu dominio incluyendo cualquier personalización
                    y registro de consentimiento. Tenga en cuenta que esta
                    acción NO se puede revertir.
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  sx={{ alignSelf: "flex-end", m: 2, color: "red" }}
                >
                  Borrar dominio
                </Button>
              </Card>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Grid2>
  );
};
