import { Box, Button, Container, Grid2 } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useUserStore } from "../../hooks";

export const HeadSection = () => {
  // Recuperamos el usuario
  const { user } = useUserStore();

  // Recuperamos la página desde la cual se desencadena la acción de actualizar plan
  const previousUpdateSubscriptionPage = localStorage.getItem(
    "updateSubscriptionPreviousPage"
  );
  const activeDomainId = localStorage.getItem("activeDomainId");

  let redirectTo = "";

  if (previousUpdateSubscriptionPage === "domains") {
    // Definimos la ruta de redirección
    redirectTo = `/domains/${activeDomainId}`;
  } else {
    redirectTo = `/users/${user.name}`;
  }

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
