import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, Grid2 } from "@mui/material";

export const HeadSectionHelp = () => {
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
                <Button size="small" startIcon={<ArrowBack />} href="/">
                  Volver | Ayuda
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
      </Grid2>
    </>
  );
};
