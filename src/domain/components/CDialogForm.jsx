import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export const DialogForm = ({
  newDomainId,
  newDomainName,
  newDomainDescription,
  newDomainStatus,
  newDomainOwner,
  newDomainContactEmail,
  newDomainCountryOrigin,
  onAddDomainChange,
}) => {
  return (
    <Box>
      <input
        type="hidden"
        id="domainId"
        name="newDomainId"
        value={newDomainId}
      />
      <input
        type="hidden"
        id="domainStatus"
        name="newDomainStatus"
        value={newDomainStatus}
      />
      <Box sx={{ width: 775, mt: 2 }}>
        <TextField
          autoFocus
          required
          id="domainName"
          name="newDomainName"
          value={newDomainName}
          label="Nombre de dominio"
          placeholder="Nombre de dominio"
          type="text"
          sx={{ width: 378, mr: 2 }}
          onChange={onAddDomainChange}
        />
        <TextField
          required
          id="ownerName"
          name="newDomainOwner"
          value={newDomainOwner}
          placeholder="Nombre propietario"
          label="Nombre propietario"
          type="text"
          sx={{ width: 378 }}
          onChange={onAddDomainChange}
        />
      </Box>
      <Box sx={{ width: 775, mt: 1 }}>
        <TextField
          required
          id="email"
          name="newDomainContactEmail"
          value={newDomainContactEmail}
          placeholder="Correo electrónico"
          label="Correo electrónico"
          type="email"
          sx={{ width: 378, mr: 2 }}
          onChange={onAddDomainChange}
        />
        <TextField
          required
          id="country"
          placeholder="País"
          label="País"
          type="text"
          name="newDomainCountryOrigin"
          value={newDomainCountryOrigin}
          sx={{ width: 378 }}
          onChange={onAddDomainChange}
        />
      </Box>
      <Box sx={{ width: 775, mt: 1 }}>
        <TextField
          id="description"
          name="newDomainDescription"
          value={newDomainDescription}
          placeholder="Descripción"
          label="Descripción"
          type="text"
          fullWidth
          multiline
          rows={4}
          onChange={onAddDomainChange}
        />
      </Box>
      <Box sx={{ width: 775, mt: 3 }}>
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
        <FormGroup sx={{ mt: 2 }}>
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
    </Box>
  );
};

DialogForm.propTypes = {
  newDomainId: PropTypes.string.isRequired,
  newDomainName: PropTypes.string.isRequired,
  newDomainDescription: PropTypes.string.isRequired,
  newDomainStatus: PropTypes.string.isRequired,
  newDomainOwner: PropTypes.string.isRequired,
  newDomainContactEmail: PropTypes.string.isRequired,
  newDomainCountryOrigin: PropTypes.string.isRequired,
  onAddDomainChange: PropTypes.func.isRequired,
};
