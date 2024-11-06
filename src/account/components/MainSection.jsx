import { Box, Container, Grid2 } from "@mui/material";
import { CGeneralInformation } from "./CGeneralInformation";

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
            }}
          >
            <CGeneralInformation />
          </Box>
        </Container>
      </Grid2>
    </>
  );
};
