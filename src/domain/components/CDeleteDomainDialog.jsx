import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";
export const CDeleteDomainDialog = ({
  openDeleteDomainDialog,
  handleCloseDeleteDomainDialog,
}) => {
  return (
    <DialogLayout
      open={openDeleteDomainDialog}
      onClose={handleCloseDeleteDomainDialog}
      maxWidth="sm"
      titleButton1="Aceptar"
      titleButton2="Cancelar"
      funcion={handleCloseDeleteDomainDialog}
    >
      <Typography variant="body1">
        ¿Está seguro de que quiere eliminar el dominio seleccionado?
      </Typography>
    </DialogLayout>
  );
};

CDeleteDomainDialog.propTypes = {
  domainName: PropTypes.string,
  openDeleteDomainDialog: PropTypes.bool,
  handleCloseDeleteDomainDialog: PropTypes.func,
};
