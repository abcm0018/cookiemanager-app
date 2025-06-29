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
import { useEffect, useState } from "react";
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
    sameSite,
    httpOnly,
    secure,
    onInputChange: onEditCookieChange,
    setFormState,
  } = useForm(editCookieForm);

  const [errors, setErrors] = useState({});
  const cleanString = (str) => str.trim().replace(/\s+/g, " ");

  // Prellenar los datos del formulario cuando el diálogo se abre
  useEffect(() => {
    if (openEditCookieDialog && cookie) {
      setFormState({
        category: cookie.category,
        type: cookie.type,
        description: cookie.description,
        provider: cookie.provider,
        duration: cookie.duration,
        sameSite: cookie.sameSite,
        httpOnly: cookie.httpOnly ? "S" : "N",
        secure: cookie.secure ? "S" : "N",
      });
      setErrors({});
    }
  }, [openEditCookieDialog, cookie, setFormState]);

  const validateFields = () => {
    const newErrors = {};

    const startsWithSpecialChar = /^[^a-zA-Z0-9]/;
    const startsWithNumber = /^[0-9]/;
    const allDigits = /^\d+$/;
    const durationKeywords = /(sesión|dia|día|dias|días|año|años|mes|meses)/i;

    if (!category.trim()) {
      newErrors.category = "* Campo obligatorio";
    }
    if (!type.trim()) {
      newErrors.type = "* Campo obligatorio";
    } else if (type.trim().length < 3) {
      newErrors.type = "* El tipo debe tener al menos 3 caracteres";
    } else if (allDigits.test(type.trim())) {
      newErrors.type = "* El campo no puede estar compuesto solo por números";
    } else if (startsWithNumber.test(type.trim())) {
      newErrors.type = "* El campo no puede empezar por un número";
    } else if (startsWithSpecialChar.test(type.trim())) {
      newErrors.type = "* El campo no puede empezar por un carácter especial";
    }

    if (!description.trim()) {
      newErrors.description = "* Campo obligatorio";
    } else if (description.trim().length < 4) {
      newErrors.description =
        "* La descripción debe tener al menos 4 caracteres";
    } else if (startsWithSpecialChar.test(description.trim())) {
      newErrors.description =
        "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(description.trim())) {
      newErrors.description = "* El campo no puede empezar por un número";
    } else if (allDigits.test(description.trim())) {
      newErrors.type = "* El campo no puede estar compuesto solo por números";
    }

    if (!provider.trim()) {
      newErrors.provider = "* Campo obligatorio";
    } else if (provider.trim().length < 3) {
      newErrors.provider =
        "El nombre del proveedor debe tener al menos 3 caracteres";
    } else if (startsWithSpecialChar.test(provider.trim())) {
      newErrors.provider =
        "* El campo no puede empezar por un carácter especial";
    } else if (allDigits.test(provider.trim())) {
      newErrors.provider =
        "* El campo no puede estar compuesto solo por números";
    } else if (startsWithNumber.test(provider.trim())) {
      newErrors.provider = "* El campo no puede empezar por un número";
    }

    if (!duration.trim()) {
      newErrors.duration = "* Campo obligatorio";
    } else if (!durationKeywords.test(duration.trim())) {
      newErrors.duration =
        "La duración debe incluir palabras como: sesión, día, días, año, años, mes, meses";
    } else if (startsWithSpecialChar.test(duration.trim())) {
      newErrors.duration =
        "* El campo no puede empezar por un carácter especial";
    }

    if (!sameSite.trim()) newErrors.sameSite = "* Campo obligatorio";
    if (!httpOnly.trim()) newErrors.httpOnly = "* Campo obligatorio";
    if (!secure.trim()) newErrors.secure = "* Campo obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onUpdateCookieSubmit = (event) => {
    event.preventDefault();
    if (!validateFields()) return false;
    startUpdatingCookie({
      id: cookie.id,
      name: cookie.name,
      category: cleanString(category),
      type: cleanString(type),
      description: cleanString(description),
      provider: cleanString(provider),
      duration: cleanString(duration),
      sameSite: cleanString(sameSite),
      httpOnly: httpOnly === "S" ? true : false,
      secure: secure === "S" ? true : false,
    });
    return true;
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
            // onUpdateCookieSubmit(event);
            // handleCloseEditCookieDialog();
            const success = onUpdateCookieSubmit(event);
            if (success) handleCloseEditCookieDialog();
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
            sameSite={sameSite}
            httpOnly={httpOnly}
            secure={secure}
            onAddCookieChange={onEditCookieChange}
            isEditMode={true}
            errors={errors}
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
