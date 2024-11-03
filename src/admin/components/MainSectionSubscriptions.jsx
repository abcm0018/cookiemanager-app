import { Container, Grid2 } from "@mui/material";
import { CardsSubscription } from "./CardsSuscription";

export const MainSectionSubscriptions = () => {
  return (
    <>
      <Grid2
        container
        direction="column"
        sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
      >
        <Container>
          <Grid2>
            <CardsSubscription />
          </Grid2>
        </Container>
      </Grid2>
    </>
  );
};
