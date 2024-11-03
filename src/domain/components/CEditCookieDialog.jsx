import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export const CEditCookieDialog = ({
  cookieName = "randomName",
  openEditCookieDialog,
  handleCloseEditCookieDialog,
}) => {
  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openEditCookieDialog}
        onClose={handleCloseEditCookieDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseEditCookieDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Editar: {cookieName}</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <Box>
            <Grid2 container direction={"row"}>
              <Box sx={{ width: 775, mt: 2 }}>
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Nombre cookie"
                  label="Nombre cookie"
                  value="CONSENT"
                  type="text"
                  sx={{ width: 378, mr: 2 }}
                />
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Proveedor"
                  label="Proveedor"
                  value="Google"
                  type="text"
                  sx={{ width: 378 }}
                />
              </Box>
              <Box sx={{ width: 775, mt: 1 }}>
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Categoría"
                  label="Categoría"
                  value="Esencial"
                  type="text"
                  sx={{ width: 378, mr: 2 }}
                />
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Tipo"
                  label="Tipo"
                  value="Authentication"
                  type="text"
                  sx={{ width: 378 }}
                />
              </Box>
              <Box sx={{ width: 775, mt: 1 }}>
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Duración"
                  label="Duración"
                  value="1 año"
                  type="text"
                  sx={{ width: 378, mr: 2 }}
                />
                <TextField
                  autoFocus
                  id="name"
                  name="Descripción"
                  label="Descripción"
                  value="Almacena el consentimiento de cookies"
                  type="text"
                  sx={{ width: 378 }}
                />
              </Box>
            </Grid2>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Aspectos de seguridad de las cookies
            </Typography>
            <Typography>
              A continuación, seleccione qué aspectos de seguridad contiene la
              cookie que desea añadir.
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Http Only (no accesible mediante Javascript)"
              />
            </FormGroup>
            <Typography variant="body2" color="textSecondary">
              Las cookies marcadas como Secure solo se enviarán a través de
              conexiones HTTPS.
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Secure (sólo accesible en https)"
              />
              <Typography variant="body2" color="textSecondary">
                Las cookies marcadas como HttpOnly no serán accesibles desde el
                lado del cliente.
              </Typography>
            </FormGroup>
            <FormControl sx={{ width: 660, mt: 1 }} size="medium">
              <InputLabel id="select-label">Samesite</InputLabel>
              <Select label="Plan de suscripción">
                <MenuItem value="Lax">Lax</MenuItem>
                <MenuItem value="Strict">Strict</MenuItem>
                <MenuItem value="None">None</MenuItem>
              </Select>
              <Typography variant="body2" color="textSecondary">
                Las cookies marcadas como SameSite restringirán el envío a
                solicitudes de origen cruzado.
              </Typography>
            </FormControl>
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
            Guardar cambios
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseEditCookieDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
CEditCookieDialog.propTypes = {
  cookieName: PropTypes.string.isRequired,
  openEditCookieDialog: PropTypes.bool,
  handleCloseEditCookieDialog: PropTypes.func,
};
