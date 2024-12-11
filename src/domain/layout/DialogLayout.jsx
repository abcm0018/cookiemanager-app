import PropTypes from "prop-types";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const DialogLayout = ({
  title = "",
  children,
  description1 = "",
  description2 = "",
  maxWidth = "null",
  open,
  onClose,
  funcion,
  titleButton1 = "",
  titleButton2 = "",
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
          <DialogTitle sx={{ pl: 8, pr: 8 }}>{title}</DialogTitle>

          <DialogContent sx={{ pl: 8, pr: 8 }}>
            <DialogContentText>{description1}</DialogContentText>
            <DialogContentText sx={{ mt: 2 }}>{description2}</DialogContentText>
            {children}
          </DialogContent>
          <DialogActions
            sx={{
              pl: 8,
              pr: 8,
              pb: 3,
            }}
          >
            {titleButton1 && (
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  borderColor: "secondary.main",
                }}
              >
                {titleButton1}
              </Button>
            )}
            <Button
              variant="outlined"
              sx={{ bgcolor: "primary.main", color: "white" }}
              onClick={onClose}
            >
              {titleButton2}
            </Button>
          </DialogActions>
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
