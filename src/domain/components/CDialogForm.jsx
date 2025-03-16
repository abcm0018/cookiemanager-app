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
            onChange={onEditDomainChange}
          />
          <FormControl sx={{ width: 378 }} size="medium">
            <InputLabel id="country-label">Pais</InputLabel>
            <Select
              id="country"
              label="País"
              name="domainCountryOrigin"
              value={domainCountryOrigin}
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
            onChange={onEditDomainChange}
          />
        </Box>
      </Grid2>
    </Box>
  );
};

CDialogForm.propTypes = {
  domainName: PropTypes.string,
  domainDescription: PropTypes.string,
  domainOwner: PropTypes.string,
  domainContactEmail: PropTypes.string,
  domainCountryOrigin: PropTypes.string,
  onEditDomainChange: PropTypes.func,
};
