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
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useForm, useUserStore } from "../../hooks";
import { updateUserForm } from "../utils";
import Swal from "sweetalert2";
import { CDialogUserForm } from "./CDialogUserForm";

export const CEditUserDialog = ({
  userToEdit,
  openEditUserDialog,
  handleCloseEditUserDialog,
}) => {
  const { startUpdatingUser, errorMessage } = useUserStore();

  const {
    name,
    surname,
    email,
    company,
    onInputChange: onUserChange,
    setFormState,
  } = useForm(updateUserForm);

  // Prellenar los datos del formulario cuando el diálogo se abre
  useEffect(() => {
    if (openEditUserDialog && userToEdit) {
      setFormState({
        name: userToEdit.name,
        surname: userToEdit.surname,
        email: userToEdit.email,
        company: userToEdit.company,
      });
    }
  }, [openEditUserDialog, userToEdit, setFormState]);

  const onUserSubmit = (event) => {
    event.preventDefault();
    startUpdatingUser({
      name: name,
      surname: surname,
      email: email,
      company: company,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en los datos de la suscripción", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="md"
        open={openEditUserDialog}
        onClose={handleCloseEditUserDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            onUserSubmit(event);
            handleCloseEditUserDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Modificar perfil</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText color="primary.main">
            Modifique los campos necesarios para agregar cambios a tu perfil.
          </DialogContentText>
          <CDialogUserForm
            name={name}
            surname={surname}
            email={email}
            company={company}
            onEditUserChange={onUserChange}
          />
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
              Actualizar
            </Button>
            <Button
              variant="outlined"
              sx={{ bgcolor: "primary.main", color: "white" }}
              onClick={handleCloseEditUserDialog}
            >
              Cancelar
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

CEditUserDialog.propTypes = {
  userToEdit: PropTypes.object.isRequired,
  openEditUserDialog: PropTypes.bool,
  handleCloseEditUserDialog: PropTypes.func,
};
