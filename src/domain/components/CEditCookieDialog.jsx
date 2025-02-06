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
import { useCookieStore } from "../../hooks/useCookieStore";
import { editCookieForm } from "../utils";
import { useForm } from "../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { CCookieForm } from "./CCookieForm";

export const CEditCookieDialog = ({
  cookie = {},
  openEditCookieDialog,
  handleCloseEditCookieDialog,
}) => {
  const { startUpdatingCookie, errorMessage } = useCookieStore();
  const {
    category,
    type,
    description,
    provider,
    duration,
    samesite,
    httpOnly,
    secure,
    onInputChange: onEditCookieChange,
    setFormState,
  } = useForm(editCookieForm);

  // Prellenar los datos del formulario cuando el diálogo se abre
  useEffect(() => {
    console.log("Datos iniciales de cookie:", cookie);
    console.log("Categoría inicial:", cookie.category);
    if (openEditCookieDialog && cookie) {
      setFormState({
        category: cookie.category,
        type: cookie.type,
        description: cookie.description,
        provider: cookie.provider,
        duration: cookie.duration,
        samesite: cookie.samesite,
        httpOnly: cookie.httpOnly ? "S" : "N",
        secure: cookie.secure ? "S" : "N",
      });
    }
  }, [openEditCookieDialog, cookie, setFormState]);

  const onUpdateCookieSubmit = (event) => {
    event.preventDefault();

    startUpdatingCookie({
      id: cookie.id,
      name: cookie.name,
      category: category,
      type: type,
      description: description,
      provider: provider,
      duration: duration,
      sameSite: samesite,
      httpOnly: httpOnly === "S" ? true : false,
      secure: secure === "S" ? true : false,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire(
        "Error al actualizar los datos de la cookie",
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
        open={openEditCookieDialog}
        onClose={handleCloseEditCookieDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            onUpdateCookieSubmit(event);
            handleCloseEditCookieDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Editar cookie</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText color="primary.main">
            Si una cookie se ha modificado y durante el proceso de escaneo no se
            ha detectado los cambios, puedes editarla manualmente en tu
            declaración de cookie.
          </DialogContentText>
          <CCookieForm
            name={cookie.name}
            category={category}
            type={type}
            description={description}
            provider={provider}
            duration={duration}
            samesite={samesite}
            httpOnly={httpOnly}
            secure={secure}
            onAddCookieChange={onEditCookieChange}
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
            Actualizar cookie
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseEditCookieDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CEditCookieDialog.propTypes = {
  cookie: PropTypes.object,
  openEditCookieDialog: PropTypes.bool,
  handleCloseEditCookieDialog: PropTypes.func,
};
