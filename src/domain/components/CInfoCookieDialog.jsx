import PropTypes from "prop-types";
import { Box, Grid2, Typography } from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";

export const CInfoCookieDialog = ({
  cookieName = "randomName",
  openInfoCookieDialog,
  handleCloseInfoCookieDialog,
}) => {
  return (
    <DialogLayout
      open={openInfoCookieDialog}
      onClose={handleCloseInfoCookieDialog}
      title={`Detalles: ${cookieName}`}
      maxWidth="lg"
      titleButton2="Cerrar"
      funcion={handleCloseInfoCookieDialog}
    >
      <Box>
        <Grid2 container direction={"row"}>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2 }}>
              <Typography sx={{ width: 378, mr: 2 }}>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Nombre cookie:
                </Typography>{" "}
                CONSENT
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2, ml: 35 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Proveedor:
                </Typography>{" "}
                Google
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2 }}>
              <Typography sx={{ width: 378, mr: 2 }}>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Categoría:
                </Typography>{" "}
                Esencial
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2, ml: 35 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Tipo:
                </Typography>{" "}
                Authentication
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Duración:
                </Typography>{" "}
                1 año
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2, ml: 35 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Http Only:
                </Typography>{" "}
                Sí
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Secure:
                </Typography>{" "}
                No
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2, ml: 35 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Samesite:
                </Typography>{" "}
                LAX
              </Typography>
            </Box>
          </Grid2>
          <Grid2>
            <Box sx={{ width: 775, mt: 2 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Descripción:
                </Typography>{" "}
                Almacena el consentimiento de cookies
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </DialogLayout>
  );
};

CInfoCookieDialog.propTypes = {
  cookieName: PropTypes.string.isRequired,
  openInfoCookieDialog: PropTypes.bool,
  handleCloseInfoCookieDialog: PropTypes.func,
};
