import {
  Box,
  Button,
  Container,
  Grid2,
  InputBase,
  Typography,
} from "@mui/material";
import { CardsSubscription } from "./CardsSuscription";

export const MainSection = () => {
  return (
    <>
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
              padding: 4,
            }}
          >
            <Grid2 container sx={{ pb: 6 }} justifyContent="space-between">
              <Grid2 xs={12} sm={6}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Plan de suscripción
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Plan de suscripción actual: Basic
                </Typography>
              </Grid2>
              <Grid2
                item
                xs={12}
                sm="auto"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  mt: { xs: 2, sm: 0 },
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Código de descuento:
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <InputBase
                    sx={{
                      border: "1px solid #ccc",
                      padding: "4px 12px",
                      width: "150px",
                    }}
                    placeholder="Descuento"
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "secondary.main",
                      color: "white",
                      borderRadius: "0 4px 4px 0",
                      paddingX: 2,
                      height: "41px",
                      minWidth: "32px",
                    }}
                  >
                    Aplicar
                  </Button>
                </Box>
              </Grid2>
            </Grid2>
            <Grid2>
              <CardsSubscription />
            </Grid2>
          </Box>
        </Container>
      </Grid2>
    </>
  );
};
