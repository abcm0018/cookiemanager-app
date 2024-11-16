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

export const CAddDomainDialog = ({
  openAddDomainDialog,
  handleCloseAddDomainDialog,
}) => {
  return (
    <DialogLayout
      open={openAddDomainDialog}
      onClose={handleCloseAddDomainDialog}
      title="Añadir dominio"
      description1="Escriba su nombre de dominio o sitio web a continuación para crear una nueva instancia de CookieManager."
      description2="CookieManager rastreará el sitio web para identificar las cookies en uso y crear un banner personalizado de consentimiento de cookies. La primera exploración solo escaneará una sola página para acelerar el proceso de despliegue. Una exploración completa del sitio se llevará a cabo 24 horas más tarde o puede solicitar manualmente un nuevo análisis."
      maxWidth="lg"
      titleButton1="Añadir dominio"
      titleButton2="Cancelar"
      funcion={handleCloseAddDomainDialog}
    >
      <Box>
        <Grid2 container direction={"row"}>
          <Box sx={{ width: 775, mt: 2 }}>
            <TextField
              autoFocus
              required
              id="domainName"
              name="Nombre de dominio"
              label="Nombre de dominio"
              type="text"
              sx={{ width: 378, mr: 2 }}
            />
            <TextField
              required
              id="ownerName"
              name="Nombre propietario"
              label="Nombre propietario"
              type="text"
              sx={{ width: 378 }}
            />
          </Box>
          <Box sx={{ width: 775, mt: 1 }}>
            <TextField
              required
              id="email"
              name="email"
              label="Correo electrónico"
              type="email"
              sx={{ width: 378, mr: 2 }}
            />
            <TextField
              required
              id="country"
              name="Pais"
              label="País"
              type="text"
              sx={{ width: 378 }}
            />
          </Box>
          <Box sx={{ width: 775, mt: 1 }}>
            <TextField
              id="description"
              name="Descripción"
              label="Descripción"
              type="text"
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
          CookieManager, garantizando una implementación sin esfuerzo en línea
          con los requisitos técnicos del modo de consentimiento.
        </Typography>
      </Box>
    </DialogLayout>
  );
};

CAddDomainDialog.propTypes = {
  openAddDomainDialog: PropTypes.bool.isRequired,
  handleCloseAddDomainDialog: PropTypes.func.isRequired,
};
