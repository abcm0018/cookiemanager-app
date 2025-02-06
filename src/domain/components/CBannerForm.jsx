import PropTypes from "prop-types";
import {
  Box,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export const CBannerForm = ({
  title,
  cookieDeclaration,
  consentType,
  lang,
  legislation,
  legislationDescription,
  cookiePolicy,
  privacyPolicy,
  onAddBannerChange,
}) => {
  return (
    <>
      <Box>
        <Grid2 container direction={"row"}>
          <Box spacing={2} sx={{ width: 775, mt: 2 }}>
            <TextField
              autoFocus
              required
              id="banner-title"
              label="Título del Banner"
              name="title"
              value={title}
              type="text"
              sx={{ width: 378, mr: 2 }}
              onChange={onAddBannerChange}
            />
            <TextField
              autoFocus
              required
              id="cookie-declaration"
              label="Declaración de Cookies"
              name="cookieDeclaration"
              value={cookieDeclaration}
              type="text"
              sx={{ width: 378 }}
              onChange={onAddBannerChange}
            />
          </Box>
          <Box sx={{ width: 775, mt: 1 }}>
            <FormControl sx={{ width: 378, mr: 2 }} size="medium">
              <InputLabel id="consent-type-label">
                Tipo de Consentimiento
              </InputLabel>
              <Select
                id="consent-type"
                label="Tipo de Consentimiento"
                name="consentType"
                value={consentType}
                onChange={onAddBannerChange}
              >
                <MenuItem value="Explícito">Explícito</MenuItem>
                <MenuItem value="Implícito">Implícito</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: 378 }} size="medium">
              <InputLabel id="language-label">Idioma</InputLabel>
              <Select
                id="lang"
                label="Idioma"
                name="lang"
                value={lang}
                onChange={onAddBannerChange}
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
        </Grid2>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Información Relacionada con GDPR
        </Typography>
        <Typography variant="body1" sx={{ width: 378, mt: 2 }}>
          <strong>Legislación:</strong> {legislation}
        </Typography>
        <Typography variant="body2" sx={{ width: 378, mb: 1 }}>
          <strong>Descripción:</strong>
          {legislationDescription}
        </Typography>
        <Typography variant="body1">
          <strong>Política de Cookies:</strong>{" "}
          <a href={cookiePolicy} target="_blank" rel="noopener noreferrer">
            {cookiePolicy}
          </a>
        </Typography>
        <Typography variant="body1">
          <strong>Política de Privacidad:</strong>{" "}
          <a href={privacyPolicy} target="_blank" rel="noopener noreferrer">
            {privacyPolicy}
          </a>
        </Typography>
      </Box>
    </>
  );
};

CBannerForm.propTypes = {
  title: PropTypes.string.isRequired,
  cookieDeclaration: PropTypes.string.isRequired,
  consentType: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  legislation: PropTypes.string.isRequired,
  legislationDescription: PropTypes.string.isRequired,
  cookiePolicy: PropTypes.string.isRequired,
  privacyPolicy: PropTypes.string.isRequired,
  onAddBannerChange: PropTypes.func.isRequired,
};
