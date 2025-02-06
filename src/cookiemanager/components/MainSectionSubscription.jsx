import { Box, Container, Grid2 } from "@mui/material";
import { CardsSubscriptions } from "./CardsSubscriptions";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useSubscriptionStore } from "../../hooks";
import { HeadSectionSubscription } from "./HeadSectionSubscription";

export const MainSectionSubscription = () => {
  const {
    subscriptions,
    errorMessage,
    isLoadingSubscriptions,
    startLoadingSubscriptions,
  } = useSubscriptionStore();

  useEffect(() => {
    startLoadingSubscriptions();
  }, []);

  useEffect(() => {
    // Manejo de errores en la carga
    if (errorMessage !== undefined) {
      Swal.fire(
        "Error al cargar los detalles del dominio",
        errorMessage,
        "error"
      );
    }
  }, [errorMessage]);

  if (isLoadingSubscriptions) {
    return <p>Cargando la lista de suscripciones...</p>;
  }

  console.log({ subscriptions });

  return (
    <>
      <HeadSectionSubscription />
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
            <Grid2>
              <CardsSubscriptions subscriptions={subscriptions} />
            </Grid2>
          </Box>
        </Container>
      </Grid2>
    </>
  );
};
