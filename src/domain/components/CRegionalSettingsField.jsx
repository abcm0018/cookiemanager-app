import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  FormGroup,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export const CRegionalSettingsField = ({
  consentType,
  cookieDeclaration,
  onEditBannerChange,
}) => {
  return (
    <Grid2 container direction="column" sx={{ mt: 2 }}>
      <FormGroup>
        <Box>
          <Typography variant="h6" color="secondary.main">
            Configuración regional
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Ajuste el comportamiento de CookieManager y los marcos normativos
            según la ubicación de los usuarios. Tienes la opción de modificar el
            tipo de diálogo, el consentimiento, el marco legal y el diseño del
            widget de CookieManager para cada región agregada. Si un usuario no
            pertenece a una región específica, se aplicarán las configuraciones
            por defecto de la región predeterminada.
          </Typography>
        </Box>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="select-label">Tipo de consentimiento</InputLabel>
          <Select
            label="Tipo de consentimiento"
            name="consentType"
            value={consentType}
            onChange={onEditBannerChange}
          >
            <MenuItem value="Explicit">Explícito</MenuItem>
            <MenuItem value="Implied">Implícito</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          multiline
          minRows={3}
          name="cookieDeclaration"
          value={cookieDeclaration}
          onChange={onEditBannerChange}
          label="Mensaje de bienvenida"
          placeholder="Escribe tu mensaje de bienvenida aquí..."
          size="medium"
          required
        />
      </FormGroup>
    </Grid2>
  );
};

CRegionalSettingsField.propTypes = {
  consentType: PropTypes.string,
  cookieDeclaration: PropTypes.string,
  onEditBannerChange: PropTypes.func,
};
