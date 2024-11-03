import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid2,
  TextField,
} from "@mui/material";

export const CUpdateSubscriptionDialog = ({
  openUpdateSubscriptionDialog,
  handleCloseUpdateSubscriptionDialog,
}) => {
  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={openUpdateSubscriptionDialog}
        onClose={handleCloseUpdateSubscriptionDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseUpdateSubscriptionDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Editar subscripción</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText align="left">
            A continuación, aquí puedes editar una suscripción ya existente en
            el sistema.
          </DialogContentText>
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
                  sx={{ maxWidth: 378 }}
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
                  sx={{ maxWidth: 378 }}
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
                  sx={{ maxWidth: 378 }}
                />
              </Grid2>
            </Grid2>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-end", pl: 8, pr: 8, pb: 3 }}>
          <Button
            variant="outlined"
            type="submit"
            sx={{
              bgcolor: "secondary.main",
              color: "white",
              borderColor: "secondary.main",
            }}
          >
            Modificar suscripción
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseUpdateSubscriptionDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CUpdateSubscriptionDialog.propTypes = {
  openUpdateSubscriptionDialog: PropTypes.bool,
  handleCloseUpdateSubscriptionDialog: PropTypes.func,
};
