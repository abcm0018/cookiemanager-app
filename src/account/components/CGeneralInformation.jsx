import { Box, Grid2, Typography } from "@mui/material";
import { CManageSubscription } from "./CManageSubscription";
import { CCancelSubscriptionDialog } from "../../subscription/components/CCancelSubscriptionDialog";
import { useState } from "react";

export const CGeneralInformation = () => {
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
      <Grid2 container sx={{ pb: 10, pt: 4, pl: 8, pr: 8 }}>
        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Información general
          </Typography>
          <Grid2 container direction="row" spacing={2}>
            <Grid2 xs={6}>
              <Box sx={{ width: 400, mt: 2 }}>
                <Typography>
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
                <Typography>
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
            <CManageSubscription
              handleCancelSubscription={handleCancelSubscription}
            />
          </Grid2>
        </Box>
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
