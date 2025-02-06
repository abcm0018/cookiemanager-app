import { Box, Button, Container, Grid2 } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export const HeadSection = () => {
  // Recuperamos el id del dominio desde localStorage, si existe
  const storedDomainId = localStorage.getItem("activeDomainId");

  // Definimos la ruta de redirección
  const redirectTo = storedDomainId ? `/domains/${storedDomainId}` : "/domains";

  return (
    <>
      <Grid2
        container
        direction="column"
        sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
      >
        <Container>
          <Box>
            <Grid2 container spacing={2}>
              <Grid2 size={8} alignContent="center">
                <Button
                  size="small"
                  startIcon={<ArrowBack />}
                  href={redirectTo}
                >
                  Volver | Planes de subscripción
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
      </Grid2>
    </>
  );
};
