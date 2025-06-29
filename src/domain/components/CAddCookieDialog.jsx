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
import { useDomainStore, useForm } from "../../hooks";
import { useCookieStore } from "../../hooks/useCookieStore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CCookieForm } from "./CCookieForm";
import { addCookieForm } from "../utils";

export const CAddCookieDialog = ({
  domainId,
  openAddCookieDialog,
  handleCloseAddCookieDialog,
}) => {
  const { startSavingCookie, errorMessage } = useCookieStore();
  const { startLoadingDomains } = useDomainStore();
  const {
    name,
    category,
    type,
    description,
    provider,
    duration,
    sameSite,
    httpOnly,
    secure,
    onInputChange: onAddCookieChange,
    onResetForm,
  } = useForm(addCookieForm);

  const [errors, setErrors] = useState({});

  const cleanString = (str) => str.trim().replace(/\s+/g, " ");

  const handleCloseAndReset = () => {
    onResetForm();
    setErrors({});
    handleCloseAddCookieDialog();
  };

  const validateFields = () => {
    const newErrors = {};

    const startsWithSpecialChar = /^[^a-zA-Z0-9]/;
    const startsWithNumber = /^[0-9]/;
    const allDigits = /^\d+$/;
    const durationKeywords = /(sesión|dia|día|dias|días|año|años|mes|meses)/i;

    if (!name.trim()) {
      newErrors.name = "* Campo obligatorio";
    } else if (name.trim().length < 3) {
      newErrors.name = "* El nombre debe tener al menos 3 caracteres";
    } else if (allDigits.test(name.trim())) {
      newErrors.name = "* El campo no puede estar compuesto solo por números";
    } else if (startsWithNumber.test(name.trim())) {
      newErrors.name = "* El campo no puede empezar por un número";
    }

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

  const onCreateCookieSubmit = (event) => {
    event.preventDefault();
    if (!validateFields()) return false;
    startSavingCookie({
      domainId: parseInt(domainId, 10),
      name: cleanString(name),
      category: cleanString(category),
      type: cleanString(type),
      description: cleanString(description),
      provider: cleanString(provider),
      duration: cleanString(duration),
      sameSite: cleanString(sameSite),
      httpOnly: httpOnly === "S" ? true : false,
      secure: secure === "S" ? true : false,
    });
    startLoadingDomains();
    return true;
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
        onClose={handleCloseAndReset}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            // onCreateCookieSubmit(event);
            // handleCloseAndReset();
            const success = onCreateCookieSubmit(event);
            if (success) handleCloseAndReset();
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
            name={name}
            category={category}
            type={type}
            description={description}
            provider={provider}
            duration={duration}
            sameSite={sameSite}
            secure={secure}
            onAddCookieChange={onAddCookieChange}
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
            Añadir cookie
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseAndReset}
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
