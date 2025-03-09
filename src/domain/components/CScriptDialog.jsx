import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

export const CScriptDialog = ({
  open,
  onClose,
  apiKey,
  scriptCss,
  scriptJs,
}) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Script de Implementación</DialogTitle>
      <DialogContent>
        <Tabs
          value={tabIndex}
          onChange={(_, newIndex) => setTabIndex(newIndex)}
        >
          <Tab label="API Key" />
          <Tab label="CSS" />
          <Tab label="JavaScript" />
        </Tabs>

        <Box mt={2}>
          {tabIndex === 0 ? (
            <TextField
              multiline
              fullWidth
              rows={3}
              value={apiKey}
              variant="outlined"
              PaperProps={{
                readOnly: true,
                style: { fontFamily: "monospace" },
              }}
            />
          ) : tabIndex === 1 ? (
            <TextField
              multiline
              fullWidth
              rows={10}
              value={scriptCss}
              variant="outlined"
              PaperProps={{
                readOnly: true,
                style: { fontFamily: "monospace" },
              }}
            />
          ) : (
            <TextField
              multiline
              fullWidth
              rows={10}
              value={scriptJs}
              variant="outlined"
              PaperProps={{
                readOnly: true,
                style: { fontFamily: "monospace" },
              }}
            />
          )}
        </Box>
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
  apiKey: PropTypes.string,
  scriptCss: PropTypes.string,
  scriptJs: PropTypes.string,
};
