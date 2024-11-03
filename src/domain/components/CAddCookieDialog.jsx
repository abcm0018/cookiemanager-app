import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
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

export const CAddCookieDialog = ({
  openAddCookieDialog,
  handleCloseAddCookieDialog,
}) => {
  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openAddCookieDialog}
        onClose={handleCloseAddCookieDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseAddCookieDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Añadir cookie</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText>
            Aquí puede añadir una cookie y la descripción que se muestra a los
            usuarios finales que visitan su sitio web.
          </DialogContentText>
          <Box>
            <Grid2 container direction={"row"}>
              <Box sx={{ width: 775, mt: 2 }}>
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Nombre cookie"
                  label="Nombre cookie"
                  type="text"
                  sx={{ width: 378, mr: 2 }}
                />
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Proveedor"
                  label="Proveedor"
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
                  type="text"
                  sx={{ width: 378, mr: 2 }}
                />
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Tipo"
                  label="Tipo"
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
                  type="text"
                  sx={{ width: 378, mr: 2 }}
                />
                <TextField
                  autoFocus
                  id="name"
                  name="Descripción"
                  label="Descripción"
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
                control={<Checkbox />}
                label="Http Only (no accesible mediante Javascript)"
              />
            </FormGroup>
            <Typography variant="body2" color="textSecondary">
              Las cookies marcadas como Secure solo se enviarán a través de
              conexiones HTTPS.
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
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
            Añadir cookie
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseAddCookieDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
CAddCookieDialog.propTypes = {
  openAddCookieDialog: PropTypes.bool,
  handleCloseAddCookieDialog: PropTypes.func,
};
