import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";
export const CDeleteUserDialog = ({
  openDeleteUserDialog,
  handleCloseDeleteUserDialog,
}) => {
  return (
    <DialogLayout
      open={openDeleteUserDialog}
      onClose={handleCloseDeleteUserDialog}
      maxWidth="sm"
      titleButton1="Aceptar"
      titleButton2="Cancelar"
      funcion={handleCloseDeleteUserDialog}
    >
      <Typography variant="body1">
        ¿Está seguro de que quiere eliminar el usuario seleccionado?
      </Typography>
    </DialogLayout>
  );
};

CDeleteUserDialog.propTypes = {
  openDeleteUserDialog: PropTypes.bool,
  handleCloseDeleteUserDialog: PropTypes.func,
};
