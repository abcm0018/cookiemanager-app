import {
  Box,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";

export const CDialogForm = ({
  domainName,
  domainDescription,
  domainOwner,
  domainContactEmail,
  domainCountryOrigin,
  onEditDomainChange,
  isEditMode = false,
  errors = {},
}) => {
  return (
    <Box>
      <Grid2 container direction={"row"}>
        <Box sx={{ width: 775, mt: 2 }}>
          <TextField
            autoFocus
            required
            name="domainName"
            value={domainName}
            label="Nombre de dominio"
            placeholder="Nombre de dominio"
            type="text"
            sx={{ width: 378, mr: 2 }}
            onChange={onEditDomainChange}
            disabled={isEditMode}
            error={!!errors.domainName}
            helperText={errors.domainName}
          />
          <TextField
            autoFocus
            required
            name="domainOwner"
            value={domainOwner}
            placeholder="Nombre propietario"
            label="Nombre propietario"
            type="text"
            sx={{ width: 378 }}
            onChange={onEditDomainChange}
            error={!!errors.domainOwner}
            helperText={errors.domainOwner}
          />
        </Box>
        <Box sx={{ width: 775, mt: 1 }}>
          <TextField
            autoFocus
            required
            id="email"
            name="domainContactEmail"
            value={domainContactEmail}
            placeholder="Correo electrónico"
            label="Correo electrónico"
            type="email"
            sx={{ width: 378, mr: 2 }}
            error={!!errors.domainContactEmail}
            helperText={errors.domainContactEmail}
            onChange={onEditDomainChange}
          />
          <FormControl sx={{ width: 378 }} size="medium">
            <InputLabel id="country-label">Pais</InputLabel>
            <Select
              id="country"
              label="País"
              name="domainCountryOrigin"
              value={domainCountryOrigin}
              error={!!errors.domainCountryOrigin}
              helperText={errors.domainCountryOrigin}
              onChange={onEditDomainChange}
            >
              <MenuItem value="DE">Alemania</MenuItem>
              <MenuItem value="ES">España</MenuItem>
              <MenuItem value="FR">Francia</MenuItem>
              <MenuItem value="EN">Inglaterra</MenuItem>
              <MenuItem value="IT">Italia</MenuItem>
              <MenuItem value="PT">Portugal</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 775, mt: 1 }}>
          <TextField
            autoFocus
            name="domainDescription"
            value={domainDescription}
            placeholder="Descripción"
            label="Descripción"
            type="text"
            fullWidth
            multiline
            rows={4}
            error={!!errors.domainDescription}
            helperText={errors.domainDescription}
            onChange={onEditDomainChange}
          />
        </Box>
      </Grid2>
    </Box>
  );
};

CDialogForm.propTypes = {
  domainName: PropTypes.string.isRequired,
  domainDescription: PropTypes.string.isRequired,
  domainOwner: PropTypes.string.isRequired,
  domainContactEmail: PropTypes.string.isRequired,
  domainCountryOrigin: PropTypes.string.isRequired,
  onEditDomainChange: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool,
  errors: PropTypes.object,
};
