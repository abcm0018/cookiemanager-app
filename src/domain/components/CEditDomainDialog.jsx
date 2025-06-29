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
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useDomainStore, useForm } from "../../hooks";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CDialogForm } from "./CDialogForm";
import { editDomainForm } from "../utils";
import { useNavigate } from "react-router-dom";

export const CEditDomainDialog = ({
  domainToEdit,
  openEditDomainDialog,
  handleCloseEditDomainDialog,
}) => {
  const { startUpdatingDomain, errorMessage } = useDomainStore();
  const navigate = useNavigate();

  const {
    domainDescription,
    domainStatus,
    domainOwner,
    domainContactEmail,
    domainCountryOrigin,
    onInputChange: onEditDomainChange,
    setFormState,
  } = useForm(editDomainForm);

  const [errors, setErrors] = useState({});
  const cleanString = (str) => str.trim().replace(/\s+/g, " ");

  // Prellenar los datos del formulario cuando el diálogo se abre
  useEffect(() => {
    if (openEditDomainDialog && domainToEdit) {
      setFormState({
        domainName: domainToEdit.name,
        domainDescription: domainToEdit.description,
        domainStatus: domainToEdit.status,
        domainOwner: domainToEdit.owner,
        domainContactEmail: domainToEdit.contactEmail,
        domainCountryOrigin: domainToEdit.countryOrigin,
      });
      setErrors({});
    }
  }, [openEditDomainDialog, domainToEdit, setFormState]);

  const validateFields = () => {
    const newErrors = {};
    const specialCharRegex = /^[^a-zA-Z0-9]/;
    const startsWithNumber = /^[0-9]/;
    const allDigits = /^\d+$/;

    if (!domainDescription.trim()) {
      newErrors.domainDescription = "* Campo obligatorio";
    } else if (domainDescription.trim().length < 4) {
      newErrors.domainDescription =
        "* La descripción debe tener al menos 4 caracteres";
    } else if (specialCharRegex.test(domainDescription.trim())) {
      newErrors.domainDescription =
        "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(domainDescription.trim())) {
      newErrors.domainDescription = "* El campo no puede empezar por un número";
    } else if (allDigits.test(domainDescription.trim())) {
      newErrors.domainDescription =
        "* El campo no puede estar compuesto solo por números";
    }

    if (!domainOwner.trim()) {
      newErrors.domainOwner = "* Campo obligatorio";
    } else if (domainOwner.trim().length < 3) {
      newErrors.domainOwner =
        "* El nombre del propietario debe tener al menos 3 caracteres";
    } else if (specialCharRegex.test(domainOwner.trim())) {
      newErrors.domainOwner =
        "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(domainOwner.trim())) {
      newErrors.domainOwner = "* El campo no puede empezar por un número";
    } else if (allDigits.test(domainOwner.trim())) {
      newErrors.domainOwner =
        "* El campo no puede estar compuesto solo por números";
    }

    if (!domainContactEmail.trim()) {
      newErrors.domainContactEmail = "* Campo obligatorio";
    }

    if (!domainCountryOrigin.trim()) {
      newErrors.domainCountryOrigin = "* Campo obligatorio";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onUpdateDomainSubmit = (event) => {
    event.preventDefault();
    if (!validateFields()) return false;
    startUpdatingDomain({
      id: domainToEdit.id,
      name: domainToEdit.name,
      description: cleanString(domainDescription),
      status: cleanString(domainStatus),
      owner: cleanString(domainOwner),
      contactEmail: cleanString(domainContactEmail),
      countryOrigin: cleanString(domainCountryOrigin),
    });
    navigate(`/domains/${domainToEdit.id}`);
    return true;
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en los datos del dominio", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openEditDomainDialog}
        onClose={handleCloseEditDomainDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            // onUpdateDomainSubmit(event);
            // handleCloseEditDomainDialog();
            const success = onUpdateDomainSubmit(event);
            if (success) handleCloseEditDomainDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Editar dominio </DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText color="primary.main">
            Escriba su nombre de dominio o sitio web a continuación para crear
            una nueva instancia de CookieManager
          </DialogContentText>
          <DialogContentText sx={{ mt: 2 }} color="primary.main">
            CookieManager restrará el sitio web para identificar las cookies en
            uso y crear un banner personalizado de consentimiento de cookies. La
            primera exploración sólo escanerá una solo página para acelerar el
            proceso de despliegue. Una exploración completa del sitio se llevará
            a cabo 24 horas más tarde o puede solicitar manualmente un nuevo
            análisis.
          </DialogContentText>
          <CDialogForm
            domainName={domainToEdit.name}
            domainOwner={domainOwner}
            domainContactEmail={domainContactEmail}
            domainCountryOrigin={domainCountryOrigin}
            domainDescription={domainDescription}
            onEditDomainChange={onEditDomainChange}
            errors={errors}
            isEditMode={true}
          />
          <FormControl sx={{ width: 775, mt: 1 }} size="medium">
            <InputLabel id="select-status-label">Estado</InputLabel>
            <Select
              labelId="select-status-label"
              name="domainStatus"
              value={domainStatus}
              onChange={onEditDomainChange}
              label="Estado"
            >
              <MenuItem value="Activo">Activo</MenuItem>
              <MenuItem value="Inactivo">Inactivo</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Marcos políticos y configuración del consentimiento
            </Typography>
            <Typography>
              Seleccione una plantilla a continuación para controlar la
              configuración regional y los marcos de políticas para su dominio.
              Siempre puede cambiar estos ajustes más adelante.
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Por defecto (consentimiento explícito)"
              />
            </FormGroup>
            <Typography>
              El diálogo de consentimiento de CookieManager se mostrará para
              todos los usuarios, requiriendo el consentimiento explícito.
              Política simple y estricta para cumplir con la mayoría de las
              regulaciones, incluyendo GDPR.
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Marcos políticos y configuración del consentimiento
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Activar el modo consentimiento"
              />
            </FormGroup>
            <Typography>
              El modo de consentimiento está perfectamente integrado en
              CookieManager, garantizando una implementación sin esfuerxo en
              línea con los requisitos técnicos del modo de consentimiento.
            </Typography>
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
            Actualizar dominio
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseEditDomainDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CEditDomainDialog.propTypes = {
  domainToEdit: PropTypes.object.isRequired,
  openEditDomainDialog: PropTypes.bool,
  handleCloseEditDomainDialog: PropTypes.func,
};
