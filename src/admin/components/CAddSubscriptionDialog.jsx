import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid2,
  TextField,
} from "@mui/material";

export const CAddSubscriptionDialog = ({
  openAddSubscriptionDialog,
  handleCloseAddSubscriptionDialog,
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={openAddSubscriptionDialog}
      onClose={handleCloseAddSubscriptionDialog}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleCloseAddSubscriptionDialog();
        },
      }}
    >
      <DialogTitle align="left">Añadir suscripción</DialogTitle>
      <DialogContent>
        <DialogContentText align="left">
          Añade una nueva suscripción.
        </DialogContentText>
        <Box sx={{ mt: 2 }}>
          <Grid2 container spacing={2} direction="column" alignItems="left">
            <Grid2 xs={12}>
              <TextField
                autoFocus
                required
                id="subscription-plan"
                name="Plan de subscripción"
                label="Plan de subscripción"
                type="text"
                fullWidth
                sx={{ maxWidth: 378 }}
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextField
                required
                id="description"
                name="Descripción"
                label="Descripción"
                type="text"
                multiline
                minRows={4}
                fullWidth
                sx={{ maxWidth: 378 }}
              />
            </Grid2>
            <Grid2 xs={12}>
              <TextField
                required
                id="price"
                name="Precio"
                label="Precio"
                type="text"
                fullWidth
                sx={{ maxWidth: 378 }}
              />
            </Grid2>
          </Grid2>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "flex-end", pb: 3 }}>
        <Button
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "secondary.main",
            color: "white",
            borderColor: "secondary.main",
            mr: 1,
          }}
        >
          Añadir suscripción
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "primary.main", color: "white" }}
          onClick={handleCloseAddSubscriptionDialog}
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CAddSubscriptionDialog.propTypes = {
  openAddSubscriptionDialog: PropTypes.bool,
  handleCloseAddSubscriptionDialog: PropTypes.func,
};
