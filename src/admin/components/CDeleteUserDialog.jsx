import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid2,
  Typography,
} from "@mui/material";
export const CDeleteUserDialog = ({
  openDeleteUserDialog,
  handleCloseDeleteUserDialog,
}) => {
  return (
    <Box>
      <Dialog
        maxWidth="sm"
        open={openDeleteUserDialog}
        onClose={handleCloseDeleteUserDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseDeleteUserDialog();
          },
        }}
      >
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <Box>
            <Grid2 container direction={"row"}>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2 }}>
                  <Typography variant="body1">
                    ¿Está seguro de que quiere eliminar el usuario seleccionado?
                  </Typography>
                </Box>
              </Grid2>
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
            Aceptar
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseDeleteUserDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CDeleteUserDialog.propTypes = {
  openDeleteUserDialog: PropTypes.bool,
  handleCloseDeleteUserDialog: PropTypes.func,
};
