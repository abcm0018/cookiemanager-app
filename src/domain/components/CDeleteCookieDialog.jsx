import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid2,
  Typography,
} from "@mui/material";
export const CDeleteCookieDialog = ({
  cookieName = "randomName",
  openDeleteCookieDialog,
  handleCloseDeleteCookieDialog,
}) => {
  return (
    <Box>
      <Dialog
        maxWidth="sm"
        open={openDeleteCookieDialog}
        onClose={handleCloseDeleteCookieDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseDeleteCookieDialog();
          },
        }}
      >
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <Box>
            <Grid2 container direction={"row"}>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2 }}>
                  <Typography variant="body1">
                    ¿Está seguro de que quiere eliminar la cookie seleccionada?
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </DialogContent>
        <DialogActions sx={{ pl: 8, pr: 8, pb: 3 }}>
          <Button
            variant="outlined"
            type="submit"
            sx={{
              bgcolor: "secondary.main",
              color: "white",
              borderColor: "secondary.main",
            }}
          >
            Aceptar
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseDeleteCookieDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CDeleteCookieDialog.propTypes = {
  cookieName: PropTypes.string.isRequired,
  openDeleteCookieDialog: PropTypes.bool,
  handleCloseDeleteCookieDialog: PropTypes.func,
};
