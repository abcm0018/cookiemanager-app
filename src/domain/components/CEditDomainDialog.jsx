import PropTypes from "prop-types";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { DialogLayout } from "../layout/DialogLayout";
import { useDomainStore, useForm } from "../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";

const domainFormField = {
  editDomainId: "",
  editDomainName: "",
  editDomainDescription: "",
  editDomainStatus: "",
  editDomainOwner: "",
  email: "",
  editDomainCountryOrigin: "",
};

export const CEditDomainDialog = ({
  domainName = "",
  openEditDomainDialog,
  handleCloseEditDomainDialog,
  domain,
}) => {
  const { startUpdatingDomain, errorMessage } = useDomainStore();

  const {
    editDomainId,
    editDomainName,
    editDomainDescription,
    editDomainStatus,
    editDomainOwner,
    email,
    editDomainCountryOrigin,
    onInputChange: onEditDomainChange,
    setFormState,
  } = useForm(domainFormField);

  // Prellenar los datos del formulario cuando el diálogo se abre
  useEffect(() => {
    if (openEditDomainDialog && domain?.id) {
      setFormState({
        editDomainId: domain.id,
        editDomainName: domain.name,
        editDomainDescription: domain.description,
        editDomainStatus: domain.status,
        editDomainOwner: domain.owner,
        email: domain.contactEmail,
        editDomainCountryOrigin: domain.countryOrigin,
      });
    }
  }, [openEditDomainDialog, domain, setFormState]);

  const editDomainSubmit = (event) => {
    event.preventDefault();
    if (!editDomainId || !editDomainName) {
      Swal.fire("Error", "Faltan datos obligatorios", "error");
      return;
    }
    startUpdatingDomain({
      id: editDomainId,
      name: editDomainName,
      description: editDomainDescription,
      status: editDomainStatus,
      owner: editDomainOwner,
      contactEmail: email,
      countryOrigin: editDomainCountryOrigin,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);
  return (
    <DialogLayout
      open={openEditDomainDialog}
      onClose={handleCloseEditDomainDialog}
      title={`Editar: ${domainName}`}
      maxWidth="lg"
      titleButton1="Guardar cambios"
      titleButton2="Cancelar"
      funcion={editDomainSubmit}
    >
      <Box>
        <Grid2 container direction={"row"}>
          <input
            type="hidden"
            id="domainId"
            name="editDomainId"
            value={editDomainId}
          />
          <Box sx={{ width: 775, mt: 2 }}>
            <TextField
              autoFocus
              required
              id="name"
              name="editDomainName"
              placeholder="Nombre de dominio"
              label="Nombre de dominio"
              value={editDomainName}
              type="text"
              onChange={onEditDomainChange}
              sx={{ width: 378, mr: 2 }}
            />
            <TextField
              autoFocus
              required
              id="name"
              placeholder="Nombre propietario"
              label="Nombre propietario"
              name="editDomainOwner"
              value={editDomainOwner}
              type="text"
              onChange={onEditDomainChange}
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
              value={email}
              type="text"
              onChange={onEditDomainChange}
              sx={{ width: 378, mr: 2 }}
            />
            <TextField
              autoFocus
              required
              id="name"
              name="editDomainCountryOrigin"
              placeholder="Pais"
              label="Pais"
              value={editDomainCountryOrigin}
              type="text"
              onChange={onEditDomainChange}
              sx={{ width: 378 }}
            />
          </Box>
          <Box sx={{ width: 775, mt: 1 }}>
            <TextField
              autoFocus
              id="name"
              name="editDomainDescription"
              placeholder="Descripción"
              label="Descripción"
              value={editDomainDescription}
              type="text"
              onChange={onEditDomainChange}
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        </Grid2>
      </Box>
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
          El diálogo de consentimiento de CookieManager se mostrará para todos
          los usuarios, requiriendo el consentimiento explícito. Política simple
          y estricta para cumplir con la mayoría de las regulaciones, incluyendo
          GDPR.
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
          CookieManager, garantizando una implementación sin esfuerxo en línea
          con los requisitos técnicos del modo de consentimiento.
        </Typography>
      </Box>
    </DialogLayout>
  );
};

CEditDomainDialog.propTypes = {
  domainName: PropTypes.string,
  openEditDomainDialog: PropTypes.bool,
  handleCloseEditDomainDialog: PropTypes.func,
  domain: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    owner: PropTypes.string,
    contactEmail: PropTypes.string,
    countryOrigin: PropTypes.string,
  }),
};
