import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import PropTypes from "prop-types";

export const DialogLayout = ({
  title = "",
  children,
  description1 = "",
  description2 = "",
  maxWidth = "",
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
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              {
                funcion;
              }
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
              onClick={funcion}
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
  cookies: PropTypes.array.isRequired,
};
