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

export const CCookieForm = ({
  name,
  category,
  type,
  description,
  provider,
  duration,
  sameSite,
  httpOnly,
  secure,
  onAddCookieChange,
  isEditMode = false,
  errors = {},
}) => {
  return (
    <>
      <Box>
        <Grid2 container direction={"row"}>
          <Box sx={{ width: 775, mt: 2 }}>
            <TextField
              autoFocus
              required
              id="cookie-name"
              name="name"
              label="Nombre cookie"
              value={name}
              type="text"
              sx={{ width: 378, mr: 2 }}
              onChange={onAddCookieChange}
              disabled={isEditMode}
              error={!!errors.name}
              helperText={errors.name}
            />
            <FormControl sx={{ width: 378 }} size="medium">
              <InputLabel id="select-category-label">Categoría</InputLabel>
              <Select
                id="cookie-category"
                required
                label="Categoría"
                onChange={onAddCookieChange}
                name="category"
                value={category}
                error={!!errors.category}
                helperText={errors.category}
              >
                <MenuItem value="Essential">Esencial</MenuItem>
                <MenuItem value="Optional">Opcional</MenuItem>
                <MenuItem value="Third">Tercero</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: 775, mt: 1 }}>
            <TextField
              autoFocus
              required
              id="cookie-type"
              name="type"
              label="Tipo"
              value={type}
              type="text"
              onChange={onAddCookieChange}
              sx={{ width: 378, mr: 2 }}
              error={!!errors.type}
              helperText={errors.type}
            />
            <TextField
              autoFocus
              required
              id="cookie-provider"
              name="provider"
              label="Proveedor de la cookie"
              value={provider}
              onChange={onAddCookieChange}
              type="text"
              sx={{ width: 378 }}
              error={!!errors.provider}
              helperText={errors.provider}
            />
          </Box>
          <Box sx={{ width: 775, mt: 1 }}>
            <TextField
              autoFocus
              required
              id="cookie-duration"
              name="duration"
              label="Duración"
              value={duration}
              type="text"
              sx={{ width: 378, mr: 2 }}
              onChange={onAddCookieChange}
              error={!!errors.duration}
              helperText={errors.duration}
            />
            <TextField
              autoFocus
              required
              id="cookie-description"
              name="description"
              label="Descripción"
              value={description}
              type="text"
              sx={{ width: 378 }}
              onChange={onAddCookieChange}
              error={!!errors.description}
              helperText={errors.description}
            />
          </Box>
        </Grid2>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Aspectos de seguridad de las cookies
        </Typography>
        <Typography>
          A continuación, seleccione qué aspectos de seguridad contiene la
          cookie que desea añadir.
        </Typography>
        <Box sx={{ width: 775, mt: 1 }}>
          <FormControl sx={{ mt: 1, mr: 2, width: 378 }} size="medium">
            <InputLabel id="select-httpOnly-label">httpOnly</InputLabel>
            <Select
              label="httpOnly"
              required
              onChange={onAddCookieChange}
              name="httpOnly"
              value={httpOnly}
              error={!!errors.httpOnly}
              helperText={errors.httpOnly}
            >
              <MenuItem value="S">Sí</MenuItem>
              <MenuItem value="N">No</MenuItem>
            </Select>
            <Typography variant="body2" color="textSecondary">
              Las cookies marcadas como HttpOnly no serán accesibles desde el
              lado del cliente (no accesible mediante Javascript).
            </Typography>
          </FormControl>
          <FormControl sx={{ mt: 1, width: 378 }} size="medium">
            <InputLabel id="select-secure-label">Secure</InputLabel>
            <Select
              label="Secure"
              required
              onChange={onAddCookieChange}
              name="secure"
              value={secure}
              error={!!errors.secure}
              helperText={errors.secure}
            >
              <MenuItem value="S">Segura</MenuItem>
              <MenuItem value="N">Insegura</MenuItem>
            </Select>
            <Typography variant="body2" color="textSecondary">
              Las cookies marcadas como Secure solo se enviarán a través de
              conexiones HTTPS.
            </Typography>
          </FormControl>
        </Box>
        <Box sx={{ width: 775, mt: 1 }}>
          <FormControl sx={{ mt: 1, mr: 2, width: 378 }} size="medium">
            <InputLabel id="select-samesite-label">Samesite</InputLabel>
            <Select
              label="Samesite"
              required
              onChange={onAddCookieChange}
              name="sameSite"
              value={sameSite}
              error={!!errors.sameSite}
              helperText={errors.sameSite}
            >
              <MenuItem value="Strict">Strict</MenuItem>
              <MenuItem value="Lax">Lax</MenuItem>
              <MenuItem value="None">None</MenuItem>
            </Select>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Las cookies marcadas como SameSite restringirán el envío a
              solicitudes de origen cruzado.
            </Typography>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

CCookieForm.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  provider: PropTypes.string,
  duration: PropTypes.string,
  sameSite: PropTypes.string,
  httpOnly: PropTypes.string,
  secure: PropTypes.string,
  onAddCookieChange: PropTypes.func,
  isEditMode: PropTypes.bool,
  errors: PropTypes.object,
};
