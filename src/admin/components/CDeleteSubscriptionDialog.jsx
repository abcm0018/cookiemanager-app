import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";

export const CDeleteSubscriptionDialog = ({
  openDeleteSubscriptionDialog,
  handleCloseDeleteSubscriptionDialog,
}) => {
  return (
    <DialogLayout
      open={openDeleteSubscriptionDialog}
      onClose={handleCloseDeleteSubscriptionDialog}
      maxWidth="sm"
      titleButton1="Aceptar"
      titleButton2="Cancelar"
      funcion={handleCloseDeleteSubscriptionDialog}
    >
      <Typography variant="body1">
        ¿Está seguro de que quiere eliminar la suscripción seleccionada?
      </Typography>
    </DialogLayout>
  );
};

CDeleteSubscriptionDialog.propTypes = {
  openDeleteSubscriptionDialog: PropTypes.bool,
  handleCloseDeleteSubscriptionDialog: PropTypes.func,
};
