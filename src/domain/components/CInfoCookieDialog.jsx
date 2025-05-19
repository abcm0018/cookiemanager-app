import PropTypes from "prop-types";
import { Box, Grid2, Typography } from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";

export const CInfoCookieDialog = ({
  cookie,
  openInfoCookieDialog,
  handleCloseInfoCookieDialog,
}) => {
  if (!cookie) {
    return <p>No se encontró la cookie con ID {cookie.id}.</p>;
  }
  return (
    <DialogLayout
      open={openInfoCookieDialog}
      onClose={handleCloseInfoCookieDialog}
      title={`Detalles: ${cookie.name}`}
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
                {cookie.name}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2, ml: 35 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Proveedor:
                </Typography>{" "}
                {cookie.provider}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2 }}>
              <Typography sx={{ width: 378, mr: 2 }}>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Categoría:
                </Typography>{" "}
                {cookie.category}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2, ml: 35 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Tipo:
                </Typography>{" "}
                {cookie.type}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Duración:
                </Typography>{" "}
                {cookie.duration}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2, ml: 35 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  httpOnly:
                </Typography>{" "}
                {cookie.httpOnly ? "Sí" : "No"}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Secure:
                </Typography>{" "}
                {cookie.secure ? "Sí" : "No"}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 xs={6}>
            <Box sx={{ width: 378, mt: 2, ml: 35 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Samesite:
                </Typography>{" "}
                {cookie.sameSite}
              </Typography>
            </Box>
          </Grid2>
          <Grid2>
            <Box sx={{ width: 775, mt: 2 }}>
              <Typography>
                <Typography component="span" fontWeight="bold" variant="body1">
                  Descripción:
                </Typography>{" "}
                {cookie.description}
              </Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </DialogLayout>
  );
};

CInfoCookieDialog.propTypes = {
  cookie: PropTypes.object.isRequired,
  openInfoCookieDialog: PropTypes.bool,
  handleCloseInfoCookieDialog: PropTypes.func,
};
