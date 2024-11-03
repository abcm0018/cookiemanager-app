import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

export const CEditUserDialog = ({
  userName = "randomName",
  openEditUserDialog,
  handleCloseEditUserDialog,
}) => {
  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openEditUserDialog}
        onClose={handleCloseEditUserDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseEditUserDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Editar: {userName} </DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
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
              <Box sx={{ width: 775, mt: 1 }}>
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
            Editar perfil
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseEditUserDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CEditUserDialog.propTypes = {
  userName: PropTypes.string.isRequired,
  openEditUserDialog: PropTypes.bool,
  handleCloseEditUserDialog: PropTypes.func,
};
