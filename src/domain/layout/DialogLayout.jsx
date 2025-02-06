import PropTypes from "prop-types";

import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const DialogLayout = ({
  title = "",
  children,
  description1 = "",
  description2 = "",
  maxWidth = "",
  open,
  onClose,
  funcion,
}) => {
  return (
    <>
      <Box>
        <Dialog
          fullWidth
          maxWidth={maxWidth}
          open={open}
          onClose={onClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              funcion(event);
              onClose;
            },
          }}
        >
          <DialogTitle sx={{ pl: 8, pr: 8 }}>
            {title}

            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ pl: 8, pr: 8 }}>
            <DialogContentText>{description1}</DialogContentText>
            <DialogContentText sx={{ mt: 2 }}>{description2}</DialogContentText>
            {children}
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

DialogLayout.propTypes = {
  title: PropTypes.string.isRequired,
  description1: PropTypes.string,
  description2: PropTypes.string,
  maxWidth: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  funcion: PropTypes.func.isRequired,
  titleButton1: PropTypes.string,
  titleButton2: PropTypes.string,
  children: PropTypes.node,
};
