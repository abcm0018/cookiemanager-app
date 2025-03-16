import PropTypes from "prop-types";

import {
  FormControlLabel,
  FormGroup,
  Grid2,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

export const CGeneralSettingsField = ({
  title,
  companyLogo,
  onEditBannerChange,
}) => {
  return (
    <Grid2 container sx={{ mt: 2 }}>
      <FormGroup>
        <Typography variant="h6" color="secondary.main">
          General
        </Typography>
        <FormControlLabel
          control={<Switch />}
          label="Actualizaciones automáticas"
        />
        <Typography variant="body2" color="grey">
          Mantén el widget de CookieManager siempre actualizado a la versión más
          refiente de forma automática
        </Typography>
        <FormControlLabel
          control={<Switch />}
          label="Bloqueo automático de cookies"
        />
        <Typography variant="body2" color="grey">
          Cuando se activa, CookieManager bloquea automáticamente las cookies
          establecidas por los servicios comunes hasta que el usuario haya dado
          su consentimiento
        </Typography>
        <Grid2 container spacing={3} alignItems="center" sx={{ mt: 2 }}>
          <Grid2 sx={{ width: 484 }}>
            <TextField
              fullWidth
              name="title"
              value={title}
              onChange={onEditBannerChange}
              label="Título"
              type="text"
              placeholder="Título"
              size="medium"
              required
            />
          </Grid2>
          <Grid2 sx={{ width: 484 }}>
            <TextField
              fullWidth
              name="companyLogo"
              value={companyLogo}
              onChange={onEditBannerChange}
              label="Compañía"
              type="text"
              placeholder="Compañía"
              size="medium"
              required
            />
          </Grid2>
        </Grid2>
      </FormGroup>
    </Grid2>
  );
};

CGeneralSettingsField.propTypes = {
  title: PropTypes.string,
  companyLogo: PropTypes.string,
  onEditBannerChange: PropTypes.func,
};
