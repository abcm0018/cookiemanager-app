import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  Typography,
} from "@mui/material";

export const CInfoCookieDialog = ({
  cookieName = "randomName",
  openInfoCookieDialog,
  handleCloseInfoCookieDialog,
}) => {
  return (
    <Box>
      <Dialog
        maxWidth="lg"
        open={openInfoCookieDialog}
        onClose={handleCloseInfoCookieDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseInfoCookieDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Detalles: {cookieName}</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <Box>
            <Grid2 container direction={"row"}>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2 }}>
                  <Typography sx={{ width: 378, mr: 2 }}>
                    <Typography
                      component="span"
                      fontWeight="bold"
                      variant="body1"
                    >
                      Nombre cookie:
                    </Typography>{" "}
                    CONSENT
                  </Typography>
                </Box>
              </Grid2>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2, ml: 35 }}>
                  <Typography>
                    <Typography
                      component="span"
                      fontWeight="bold"
                      variant="body1"
                    >
                      Proveedor:
                    </Typography>{" "}
                    Google
                  </Typography>
                </Box>
              </Grid2>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2 }}>
                  <Typography sx={{ width: 378, mr: 2 }}>
                    <Typography
                      component="span"
                      fontWeight="bold"
                      variant="body1"
                    >
                      Categoría:
                    </Typography>{" "}
                    Esencial
                  </Typography>
                </Box>
              </Grid2>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2, ml: 35 }}>
                  <Typography>
                    <Typography
                      component="span"
                      fontWeight="bold"
                      variant="body1"
                    >
                      Tipo:
                    </Typography>{" "}
                    Authentication
                  </Typography>
                </Box>
              </Grid2>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2 }}>
                  <Typography>
                    <Typography
                      component="span"
                      fontWeight="bold"
                      variant="body1"
                    >
                      Duración:
                    </Typography>{" "}
                    1 año
                  </Typography>
                </Box>
              </Grid2>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2, ml: 35 }}>
                  <Typography>
                    <Typography
                      component="span"
                      fontWeight="bold"
                      variant="body1"
                    >
                      Http Only:
                    </Typography>{" "}
                    Sí
                  </Typography>
                </Box>
              </Grid2>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2 }}>
                  <Typography>
                    <Typography
                      component="span"
                      fontWeight="bold"
                      variant="body1"
                    >
                      Secure:
                    </Typography>{" "}
                    No
                  </Typography>
                </Box>
              </Grid2>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2, ml: 35 }}>
                  <Typography>
                    <Typography
                      component="span"
                      fontWeight="bold"
                      variant="body1"
                    >
                      Samesite:
                    </Typography>{" "}
                    LAX
                  </Typography>
                </Box>
              </Grid2>
              <Grid2>
                <Box sx={{ width: 775, mt: 2 }}>
                  <Typography>
                    <Typography
                      component="span"
                      fontWeight="bold"
                      variant="body1"
                    >
                      Descripción:
                    </Typography>{" "}
                    Almacena el consentimiento de cookies
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </DialogContent>
        <DialogActions sx={{ pl: 8, pr: 8, pb: 3 }}>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseInfoCookieDialog}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CInfoCookieDialog.propTypes = {
  cookieName: PropTypes.string.isRequired,
  openInfoCookieDialog: PropTypes.bool,
  handleCloseInfoCookieDialog: PropTypes.func,
};
