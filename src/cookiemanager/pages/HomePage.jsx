import { Box, Container } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { BoxComponent } from "../components/BoxComponent";
import { FeaturesComponent } from "../components/FeaturesComponent";

export const HomePage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <NavBar />
        </Container>
      </Box>
      <BoxComponent />
      <FeaturesComponent />
    </>
  );
};
