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
import { useForm } from "../../hooks";
import { addCookieForm } from "../utils";
import { useCookieStore } from "../../hooks/useCookieStore";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { CCookieForm } from "./CCookieForm";

export const CAddCookieDialog = ({
  domainId,
  openAddCookieDialog,
  handleCloseAddCookieDialog,
}) => {
  const { startSavingCookie, errorMessage } = useCookieStore();
  const {
    cookieName,
    cookieCategory,
    cookieType,
    description,
    provider,
    duration,
    sameSite,
    httpOnly,
    secure,
    onInputChange: onAddCookieChange,
  } = useForm(addCookieForm);

  const onCreateCookieSubmit = (event) => {
    event.preventDefault();
    startSavingCookie({
      domainId: parseInt(domainId, 10),
      name: cookieName,
      category: cookieCategory,
      type: cookieType,
      description: description,
      provider: provider,
      duration: duration,
      samesite: sameSite,
      httpOnly: httpOnly === "S" ? true : false,
      secure: secure === "S" ? true : false,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire(
        "Error al guardar los datos de la cookie",
        errorMessage,
        "error"
      );
    }
  }, [errorMessage]);
  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openAddCookieDialog}
        onClose={handleCloseAddCookieDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            onCreateCookieSubmit(event);
            handleCloseAddCookieDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Añadir cookie</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText color="primary.main">
            Si una cookie no ha sido detectada durante el proceso de escaneo,
            puedes añadirla manualmente en tu declaración de cookie
          </DialogContentText>
          <CCookieForm
            name={cookieName}
            category={cookieCategory}
            type={cookieType}
            description={description}
            provider={provider}
            duration={duration}
            samesite={sameSite}
            secure={secure}
            onAddCookieChange={onAddCookieChange}
          />
        </DialogContent>
        <DialogActions sx={{ pl: 8, pr: 8, pb: 3 }}>
          <Button
            variant="outlined"
            type="submit"
            sx={{
              bgcolor: "secondary.main",
              color: "white",
              borderColor: "secondary.main",
            }}
          >
            Añadir cookie
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseAddCookieDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CAddCookieDialog.propTypes = {
  domainId: PropTypes.string,
  openAddCookieDialog: PropTypes.bool,
  handleCloseAddCookieDialog: PropTypes.func,
};
