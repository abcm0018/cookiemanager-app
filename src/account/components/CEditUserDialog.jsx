import PropTypes from "prop-types";

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { DialogLayout } from "../../admin/layout/DialogLayout";

export const CEditUserDialog = ({
  userName = "randomName",
  openEditUserDialog,
  handleCloseEditUserDialog,
}) => {
  return (
    <DialogLayout
      open={openEditUserDialog}
      onClose={handleCloseEditUserDialog}
      title={`Editar: ${userName}`}
      maxWidth="lg"
      titleButton1="Editar perfil"
      titleButton2="Cancelar"
      funcion={handleCloseEditUserDialog}
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
              value="Jane"
              type="text"
              sx={{ width: 378, mr: 2 }}
            />
            <TextField
              autoFocus
              required
              id="name"
              name="Apellidos"
              label="Apellidos"
              value="Smith"
              type="text"
              sx={{ width: 378 }}
            />
          </Box>
          <Box sx={{ width: 775, mt: 2 }}>
            <TextField
              autoFocus
              required
              id="name"
              name="email"
              label="Correo electrónico"
              value="janesmith@example.com"
              type="text"
              sx={{ width: 378, mr: 2 }}
            />
            <TextField
              autoFocus
              required
              id="name"
              name="Compañía"
              label="Compañía"
              value="Innovatech S.L."
              type="text"
              sx={{ width: 378 }}
            />
          </Box>
        </Grid2>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Comunicaciones
        </Typography>
        <Typography>
          Use las casillas de abajo para controlar que tipos de mensajes
          CookieManager puede enviar a su dirección de correo electrónico.
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Actualizaciones y anuncios de CookieManager"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Informes de análisis de cookies"
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Facturas y facturación"
          />
        </FormGroup>
      </Box>
    </DialogLayout>
  );
};

CEditUserDialog.propTypes = {
  userName: PropTypes.string.isRequired,
  openEditUserDialog: PropTypes.bool,
  handleCloseEditUserDialog: PropTypes.func,
};
