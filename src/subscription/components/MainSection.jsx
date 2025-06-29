import { Box, Container, Grid2 } from "@mui/material";
import { CardsSubscription } from "./CardsSubscription";
import { SubscriptionHeader } from "./SubscriptionHeader";
import { useAuthStore, useSubscriptionStore } from "../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { HeadSection } from "./HeadSection";
import { Loader } from "../../domain/components";

export const MainSection = () => {
  const { user } = useAuthStore();
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
    return <Loader />;
  }

  // Filtramos solo los dominios activos
  const activeUserDomains = (user.domains || []).filter(
    (domain) => domain.status === "Activo"
  );
  const activeDomains = activeUserDomains ? activeUserDomains.length : 0;

  return (
    <>
      <HeadSection />
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
            <SubscriptionHeader currentPlan={user.subscription} />
            <Grid2>
              <CardsSubscription
                subscriptions={subscriptions}
                currentPlan={user.subscription}
                activeDomains={activeDomains}
              />
            </Grid2>
          </Box>
        </Container>
      </Grid2>
    </>
  );
};
