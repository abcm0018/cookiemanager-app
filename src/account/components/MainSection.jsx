import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { CCancelSubscriptionDialog } from "../../subscription/components/CCancelSubscriptionDialog";
import { Link } from "react-router-dom";
import { useState } from "react";

export const MainSection = () => {
  const [openCancelSubscriptionDialog, setOpenCancelSubscriptionDialog] =
    useState(false);

  const handleCancelSubscription = () => {
    console.log("Abriendo el dialogo para ecancelar suscripción");
    setOpenCancelSubscriptionDialog(true);
  };

  const handleCloseCancelSubscriptionDialog = () => {
    console.log("Cerrando dialogo de cancelar suscripción");
    setOpenCancelSubscriptionDialog(false);
  };

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
                        Jane
                      </Typography>
                    </Box>
                  </Grid2>
                  <Grid2 xs={6}>
                    <Box sx={{ width: 400, mt: 2, ml: 25 }}>
                      <Typography>
                        <Typography
                          component="span"
                          fontWeight="bold"
                          variant="body1"
                        >
                          Apellidos:
                        </Typography>{" "}
                        Smith
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
                        janesmith@example.com
                      </Typography>
                    </Box>
                  </Grid2>
                  <Grid2 xs={6}>
                    <Box sx={{ width: 400, mt: 2, ml: 25 }}>
                      <Typography>
                        <Typography
                          component="span"
                          fontWeight="bold"
                          variant="body1"
                        >
                          Compañía:
                        </Typography>{" "}
                        Innovatech S.L.
                      </Typography>
                    </Box>
                  </Grid2>
                </Grid2>
                <Typography variant="h6" sx={{ mt: 4 }}>
                  Administrar suscripción
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    width: "100%",
                    maxWidth: 1000,
                    height: 140,
                    bgcolor: "#FAFAFA",
                    borderRadius: 2,
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" component="span" fontWeight="bold">
                    Basic
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link to="/subscription" style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        sx={{
                          width: 170,
                          height: 40,
                          mr: 1,
                          bgcolor: "secondary.main",
                        }}
                      >
                        Actualizar plan
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      onClick={handleCancelSubscription}
                      sx={{
                        width: 170,
                        height: 40,
                        bgcolor: red[400],
                      }}
                    >
                      Cancelar plan
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid2>
          </Box>
        </Container>
      </Grid2>
      <CCancelSubscriptionDialog
        openCancelSubscriptionDialog={openCancelSubscriptionDialog}
        handleCloseCancelSubscriptionDialog={
          handleCloseCancelSubscriptionDialog
        }
      />
    </>
  );
};
