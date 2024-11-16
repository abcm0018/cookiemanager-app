import PropTypes from "prop-types";
import { Box, Grid2, TextField } from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";

export const CEditAdminDialog = ({
  userName = "randomName",
  openEditAdminDialog,
  handleCloseAdminUserDialog,
}) => {
  return (
    <DialogLayout
      open={openEditAdminDialog}
      onClose={handleCloseAdminUserDialog}
      title={`Editar: ${userName}`}
      maxWidth="lg"
      titleButton1="Editar perfil"
      titleButton2="Cancelar"
      funcion={handleCloseAdminUserDialog}
    >
      <Box>
        <Grid2 container direction={"row"}>
          <Box sx={{ width: 775, mt: 2 }}>
            <TextField
              autoFocus
              required
              id="name"
              name="Nombre"
              label="Nombre"
              value="Ana Belén"
              type="text"
              sx={{ width: 378, mr: 2 }}
            />
          </Box>
          <Box sx={{ width: 775, mt: 2 }}>
            <TextField
              autoFocus
              required
              id="name"
              name="email"
              label="Correo electrónico"
              value="ana@gmail.com"
              type="text"
              sx={{ width: 378, mr: 2 }}
            />
          </Box>
        </Grid2>
      </Box>
    </DialogLayout>
  );
};

CEditAdminDialog.propTypes = {
  userName: PropTypes.string.isRequired,
  openEditAdminDialog: PropTypes.bool,
  handleCloseAdminUserDialog: PropTypes.func,
};
