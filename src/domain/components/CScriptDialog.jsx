import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";

export const CScriptDialog = ({ open, onClose, scriptCode }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Script de Implementación</DialogTitle>
      <DialogContent>
        <TextField
          multiline
          fullWidth
          rows={10}
          value={scriptCode}
          variant="outlined"
          slotProps={{
            input: {
              readOnly: true,
              style: { fontFamily: "monospace" },
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Validación de propiedades con PropTypes
CScriptDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  scriptCode: PropTypes.string.isRequired,
};
