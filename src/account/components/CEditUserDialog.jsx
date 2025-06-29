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
import { useEffect, useState } from "react";
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

  const [errors, setErrors] = useState({});
  const cleanString = (str) => str.trim().replace(/\s+/g, " ");

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
      setErrors({});
    }
  }, [openEditUserDialog, userToEdit, setFormState]);

  const validateFields = () => {
    const newErrors = {};

    const specialCharRegex = /^[^a-zA-Z0-9]/;
    const startsWithNumber = /^[0-9]/; // empieza por número
    const allDigits = /^\d+$/; // solo números

    if (!name.trim()) {
      newErrors.name = "* Campo obligatorio";
    } else if (name.trim().length < 3) {
      newErrors.name = "* El nombre debe tener al menos 3 caracteres";
    } else if (startsWithNumber.test(name)) {
      newErrors.name = "* El campo no puede empezar por un número";
    } else if (specialCharRegex.test(name)) {
      newErrors.name = "* El campo no puede empezar por un carácter especial";
    } else if (allDigits.test(name)) {
      newErrors.name = "* El campo no puede estar compuesto solo por números";
    }

    if (!surname.trim()) {
      newErrors.surname = "* Campo obligatorio";
    } else if (surname.trim().length < 3) {
      newErrors.surname = "* El nombre debe tener al menos 3 caracteres";
    } else if (startsWithNumber.test(surname)) {
      newErrors.surname = "* El campo no puede empezar por un número";
    } else if (specialCharRegex.test(surname)) {
      newErrors.surname =
        "* El campo no puede empezar por un carácter especial";
    } else if (allDigits.test(surname)) {
      newErrors.surname =
        "* El campo no puede estar compuesto solo por números";
    }

    if (!company.trim()) {
      newErrors.company = "* Campo obligatorio";
    } else if (company.trim().length < 3) {
      newErrors.company =
        "* El nombre del propietario debe tener al menos 3 caracteres";
    } else if (specialCharRegex.test(company.trim())) {
      newErrors.company =
        "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(company.trim())) {
      newErrors.company =
        "* El campo no puede empezar por un carácter especial";
    } else if (allDigits.test(company.trim())) {
      newErrors.company =
        "* El campo no puede estar compuesto solo por números";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onUserSubmit = (event) => {
    event.preventDefault();
    if (!validateFields()) return false;
    startUpdatingUser({
      name: cleanString(name),
      surname: cleanString(surname),
      email: cleanString(email),
      company: cleanString(company),
    });
    return true;
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
            // onUserSubmit(event);
            // handleCloseEditUserDialog();
            const success = onUserSubmit(event);
            if (success) handleCloseEditUserDialog();
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
            email={userToEdit.email}
            company={company}
            onEditUserChange={onUserChange}
            errors={errors}
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
