import { Box, Container, Grid2, Typography } from "@mui/material";

export const MainSectionAdmin = () => {
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
            <Grid2 container sx={{ pb: 10, pt: 4, pl: 8, pr: 8 }}>
              <Box>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Información general
                </Typography>
                <Grid2 container direction="row" spacing={2}>
                  <Grid2 xs={6}>
                    <Box sx={{ width: 400, mt: 2 }}>
                      <Typography sx={{ ml: 2 }}>
                        <Typography
                          component="span"
                          fontWeight="bold"
                          variant="body1"
                        >
                          Nombre:
                        </Typography>{" "}
                        Ana Belén
                      </Typography>
                    </Box>
                  </Grid2>
                  <Grid2 xs={6}>
                    <Box sx={{ width: 400, mt: 2 }}>
                      <Typography sx={{ ml: 2 }}>
                        <Typography
                          component="span"
                          fontWeight="bold"
                          variant="body1"
                        >
                          Email:
                        </Typography>{" "}
                        ana@gmail.com
                      </Typography>
                    </Box>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
          </Box>
        </Container>
      </Grid2>
    </>
  );
};
