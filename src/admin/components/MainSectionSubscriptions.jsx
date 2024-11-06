import { Container, Grid2 } from "@mui/material";
import { CardsSubscription } from "./CardsSuscription";

export const MainSectionSubscriptions = () => {
  const subscriptions = [
    {
      id: 1,
      title: "Basic",
      description: "Para pequeñas empresas y nuevas empresas",
      price: "9.99 €/mes",
      characteristic1: "600 páginas por escaneo",
      characteristic2: "100.000 páginas vistas/mes",
    },
    {
      id: 2,
      title: "Business",
      description: "Para medianas empresas con tráfico creciente",
      price: "19.99 €/mes",
      characteristic1: "4000 páginas por escaneo",
      characteristic2: "300.000 páginas vistas/mes",
    },
    {
      id: 3,
      title: "Enterprise",
      description: "Para grandes empresas con mucho tráfico",
      price: "39.99 €/mes",
      characteristic1: "8000 páginas por escaneo",
      characteristic2: "Ilimitado de páginas vistas/mes",
    },
    {
      id: 4,
      title: "Starter",
      description: "Para blogs y sitios web profesionales",
      price: "0.00 €/mes",
      characteristic1: "100 páginas por escaneo",
      characteristic2: "25.000 páginas vistas/mes",
    },
  ];

  return (
    <>
      <Grid2
        container
        direction="column"
        sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
      >
        <Container>
          <Grid2>
            <CardsSubscription subscriptions={subscriptions} />
          </Grid2>
        </Container>
      </Grid2>
    </>
  );
};
