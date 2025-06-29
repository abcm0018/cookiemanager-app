import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  FormGroup,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const CLanguageSettingsField = ({
  lang,
  onEditBannerChange,
  errors = {},
}) => {
  return (
    <Grid2 container direction="column" sx={{ mt: 2 }}>
      <FormGroup>
        <Box>
          <Typography variant="h6" color="secondary.main">
            Idiomas
          </Typography>
          <Typography variant="body2" color="primary.main">
            Elija el idioma por defecto
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Idioma</InputLabel>
            <Select
              label="Idioma"
              name="lang"
              value={lang}
              onChange={onEditBannerChange}
              error={!!errors.lang}
              helperText={errors.lang}
            >
              <MenuItem value="DE">Alemán</MenuItem>
              <MenuItem value="ES">Español</MenuItem>
              <MenuItem value="FR">Francés</MenuItem>
              <MenuItem value="EN">Inglés</MenuItem>
              <MenuItem value="IT">Italiano</MenuItem>
              <MenuItem value="PT">Portugués</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </FormGroup>
    </Grid2>
  );
};

CLanguageSettingsField.propTypes = {
  lang: PropTypes.string,
  onEditBannerChange: PropTypes.func,
  errors: PropTypes.object,
};
