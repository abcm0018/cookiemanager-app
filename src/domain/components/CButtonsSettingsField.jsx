import { Box, Button, Grid2 } from "@mui/material";
import PropTypes from "prop-types";

export const CButtonsSettingsField = ({ onCancel }) => {
  return (
    <Grid2 container sx={{ mt: 2 }}>
      <Box component="div" sx={{ width: 484, mr: 3 }}>
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ height: 45, bgcolor: "secondary.main" }}
          type="submit"
        >
          Guardar cambios
        </Button>
      </Box>
      <Box component="div" sx={{ width: 484 }}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ height: 45, bgcolor: "primary.main" }}
          type="submit"
          onClick={onCancel}
        >
          Cancelar cambios
        </Button>
      </Box>
    </Grid2>
  );
};

CButtonsSettingsField.propTypes = {
  onCancel: PropTypes.func.isRequired,
};
