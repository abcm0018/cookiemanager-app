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

export const CEditDomainDialog = ({
  domainName = "",
  openEditDomainDialog,
  handleCloseEditDomainDialog,
}) => {
  return (
    <DialogLayout
      open={openEditDomainDialog}
      onClose={handleCloseEditDomainDialog}
      title={`Editar: ${domainName}`}
      maxWidth="lg"
      titleButton1="Guardar cambios"
      titleButton2="Cancelar"
      funcion={handleCloseEditDomainDialog}
    >
      <Box>
        <Grid2 container direction={"row"}>
          <Box sx={{ width: 775, mt: 2 }}>
            <TextField
              autoFocus
              required
              id="name"
              name="Nombre de dominio"
              label="Nombre de dominio"
              value="euservices.net"
              type="text"
              sx={{ width: 378, mr: 2 }}
            />
            <TextField
              autoFocus
              required
              id="name"
              name="Nombre propietario"
              label="Nombre propietario"
              value="Mark Johnson"
              type="text"
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
              value="mark.johson@euservices.net"
              type="text"
              sx={{ width: 378, mr: 2 }}
            />
            <TextField
              autoFocus
              required
              id="name"
              name="Pais"
              label="Pais"
              value="España"
              type="text"
              sx={{ width: 378 }}
            />
          </Box>
          <Box sx={{ width: 775, mt: 1 }}>
            <TextField
              autoFocus
              id="name"
              name="Descripción"
              label="Descripción"
              value="Servicio en línea para ciudadanos de la UE"
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
};
