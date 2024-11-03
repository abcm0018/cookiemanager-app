import { Box, Container, Grid2 } from "@mui/material";
import { ControlTabs } from "../components/ControlTabs";
import { Footer } from "../components/Footer";
import { NavBarAdmin } from "../components/NavBarAdmin";

export const ControlPanelPage = () => {
  return (
    <>
      <>
        <NavBarAdmin />
        <Grid2
          container
          direction="column"
          sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
        >
          <Container>
            <Box sx={{ mt: 4 }}>
              <ControlTabs />
            </Box>
          </Container>
        </Grid2>
        <Footer />
      </>
    </>
  );
};
