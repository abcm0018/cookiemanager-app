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

export const CCancelSubscriptionDialog = ({
  openCancelSubscriptionDialog,
  handleCloseCancelSubscriptionDialog,
}) => {
  return (
    <Box>
      <Dialog
        maxWidth="sm"
        open={openCancelSubscriptionDialog}
        onClose={handleCloseCancelSubscriptionDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseCancelSubscriptionDialog();
          },
        }}
      >
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <Box>
            <Grid2 container direction={"row"}>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2 }}>
                  <Typography variant="body1">
                    ¿Está seguro de que quiere cancelar la suscripción?
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
            onClick={handleCloseCancelSubscriptionDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CCancelSubscriptionDialog.propTypes = {
  openCancelSubscriptionDialog: PropTypes.bool,
  handleCloseCancelSubscriptionDialog: PropTypes.func,
};
