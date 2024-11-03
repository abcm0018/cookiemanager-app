import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  TextField,
} from "@mui/material";

export const CEditAdminDialog = ({
  userName = "randomName",
  openEditAdminDialog,
  handleCloseAdminUserDialog,
}) => {
  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openEditAdminDialog}
        onClose={handleCloseAdminUserDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseAdminUserDialog();
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
                  value="Ana Belén"
                  type="text"
                  sx={{ width: 378, mr: 2 }}
                />
              </Box>
              <Box sx={{ width: 775, mt: 1 }}>
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
            onClick={handleCloseAdminUserDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CEditAdminDialog.propTypes = {
  userName: PropTypes.string.isRequired,
  openEditAdminDialog: PropTypes.bool,
  handleCloseAdminUserDialog: PropTypes.func,
};
