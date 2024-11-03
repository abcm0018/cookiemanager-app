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
export const CDeleteDomainDialog = ({
  domainName = "",
  openDeleteDomainDialog,
  handleCloseDeleteDomainDialog,
}) => {
  return (
    <Box>
      <Dialog
        maxWidth="sm"
        open={openDeleteDomainDialog}
        onClose={handleCloseDeleteDomainDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseDeleteDomainDialog();
          },
        }}
      >
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <Box>
            <Grid2 container direction={"row"}>
              <Grid2 xs={6}>
                <Box sx={{ width: 378, mt: 2 }}>
                  <Typography variant="body1">
                    ¿Está seguro de que quiere eliminar el dominio seleccionado?
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
            onClick={handleCloseDeleteDomainDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CDeleteDomainDialog.propTypes = {
  domainName: PropTypes.string,
  openDeleteDomainDialog: PropTypes.bool,
  handleCloseDeleteDomainDialog: PropTypes.func,
};
