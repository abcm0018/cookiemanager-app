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

export const CLanguageSettingsField = ({ lang, onEditBannerChange }) => {
  return (
    <Grid2 container direction="column" sx={{ mt: 2 }}>
      <FormGroup>
        <Box>
          <Typography variant="h6" color="secondary.main">
            Idiomas
          </Typography>
          <Typography variant="body2">Elija el idioma por defecto</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="select-label-idioma">Idiomas</InputLabel>
            <Select
              labelId="select-label-idioma"
              name="lang"
              value={lang}
              onChange={onEditBannerChange}
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
};
