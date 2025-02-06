import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

export const CMoreInfoDialog = ({ open, onClose, title, details }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Más información sobre {title}</DialogTitle>
      <DialogContent>
        <Typography variant="body2">{details}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CMoreInfoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
