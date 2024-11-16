import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";

export const CDeleteCookieDialog = ({
  openDeleteCookieDialog,
  handleCloseDeleteCookieDialog,
}) => {
  return (
    <DialogLayout
      open={openDeleteCookieDialog}
      onClose={handleCloseDeleteCookieDialog}
      maxWidth="sm"
      titleButton1="Aceptar"
      titleButton2="Cancelar"
      funcion={handleCloseDeleteCookieDialog}
    >
      <Typography variant="body1">
        ¿Está seguro de que quiere eliminar la cookie seleccionada?
      </Typography>
    </DialogLayout>
  );
};

CDeleteCookieDialog.propTypes = {
  cookieName: PropTypes.string.isRequired,
  openDeleteCookieDialog: PropTypes.bool,
  handleCloseDeleteCookieDialog: PropTypes.func,
};
