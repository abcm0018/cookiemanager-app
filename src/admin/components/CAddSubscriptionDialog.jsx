import PropTypes from "prop-types";
import { Box, Grid2, TextField } from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";

export const CAddSubscriptionDialog = ({
  openAddSubscriptionDialog,
  handleCloseAddSubscriptionDialog,
}) => {
  return (
    <DialogLayout
      open={openAddSubscriptionDialog}
      onClose={handleCloseAddSubscriptionDialog}
      title="Añadir suscripción"
      description1=" Añade una nueva suscripción."
      maxWidth="lg"
      titleButton1="Añadir dominio"
      titleButton2="Cancelar"
      funcion={handleCloseAddSubscriptionDialog}
    >
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
            />
          </Grid2>
        </Grid2>
      </Box>
    </DialogLayout>
  );
};

CAddSubscriptionDialog.propTypes = {
  openAddSubscriptionDialog: PropTypes.bool,
  handleCloseAddSubscriptionDialog: PropTypes.func,
};
