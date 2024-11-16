import PropTypes from "prop-types";
import { Box, Grid2, TextField } from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";

export const CUpdateSubscriptionDialog = ({
  subscriptionName = "randomName",
  openUpdateSubscriptionDialog,
  handleCloseUpdateSubscriptionDialog,
}) => {
  return (
    <DialogLayout
      open={openUpdateSubscriptionDialog}
      onClose={handleCloseUpdateSubscriptionDialog}
      title={`Editar: ${subscriptionName}`}
      description1=" A continuación, aquí puedes editar una suscripción ya existente en el sistema."
      maxWidth="lg"
      titleButton1="Añadir dominio"
      titleButton2="Cancelar"
      funcion={handleCloseUpdateSubscriptionDialog}
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
              value="Basic"
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
              value="Para pequeñas empresas y nuevas empresas. 600 páginas por escaneo. 100.000 páginas vistas/mes"
              multiline
              minRows={4}
              fullWidth
            />
          </Grid2>
          <Grid2 item xs={12}>
            <TextField
              required
              id="price"
              name="Precio"
              label="Precio"
              type="text"
              value="9.99 €/mes"
              fullWidth
            />
          </Grid2>
        </Grid2>
      </Box>
    </DialogLayout>
  );
};

CUpdateSubscriptionDialog.propTypes = {
  subscriptionName: PropTypes.string,
  openUpdateSubscriptionDialog: PropTypes.bool,
  handleCloseUpdateSubscriptionDialog: PropTypes.func,
};
