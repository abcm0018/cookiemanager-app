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
import { addBannerForm } from "../utils";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CBannerForm } from "./CBannerForm";
export const CAddBannerDialog = ({
  id,
  openAddBannerDialog,
  handleCloseAddBannerDialog,
}) => {
  const { startSavingBanner, errorMessage } = useDomainStore();

  const [errors, setErrors] = useState({});

  const cleanString = (str) => str.trim().replace(/\s+/g, " ");

  const legislation = "GDPR";
  const legislationDescription =
    "Reglamento General de Protección de Datos (GDPR)";
  const cookiePolicy = "https://gdpr.eu/cookies/";
  const privacyPolicy = "https://gdpr-info.eu/";

  const {
    title,
    cookieDeclaration,
    consentType,
    lang,
    companyLogo,
    onInputChange: onAddBannerChange,
    onResetForm,
  } = useForm(addBannerForm);

  const handleCloseAndReset = () => {
    onResetForm();
    setErrors({});
    handleCloseAddBannerDialog();
  };

  const validateFields = () => {
    const newErrors = {};

    const specialCharRegex = /^[^a-zA-Z0-9]/; // Detecta si empieza por carácter no alfanumérico
    const onlyOneNumberRegex = /^(?!.*\d.*\d).*$/; // Máximo un número
    const welcomeMinLength = 50;
    const startsWithNumber = /^[0-9]/; // empieza por número
    const allDigits = /^\d+$/; // solo números

    if (!title.trim()) {
      newErrors.title = "* Campo obligatorio";
    } else if (title.trim().length < 3) {
      newErrors.title = "* El título debe tener al menos 3 caracteres";
    } else if (!onlyOneNumberRegex.test(title.trim())) {
      newErrors.title = "* El título solo puede contener un número";
    } else if (specialCharRegex.test(title.trim())) {
      newErrors.title = "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(title.trim())) {
      newErrors.title = "* El campo no puede empezar por un número";
    } else if (allDigits.test(title.trim())) {
      newErrors.title = "* El campo no puede estar compuesto solo por números";
    }

    if (!cookieDeclaration.trim()) {
      newErrors.cookieDeclaration =
        "* La declaración de cookies es obligatoria";
    } else if (cookieDeclaration.trim().length < welcomeMinLength) {
      newErrors.cookieDeclaration = `* La declaración debe tener al menos ${welcomeMinLength} caracteres`;
    } else if (specialCharRegex.test(cookieDeclaration.trim())) {
      newErrors.cookieDeclaration =
        "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(cookieDeclaration.trim())) {
      newErrors.cookieDeclaration = "* El campo no puede empezar por un número";
    } else if (allDigits.test(cookieDeclaration.trim())) {
      newErrors.cookieDeclaration =
        "* El campo no puede estar compuesto solo por números";
    }

    if (!consentType.trim()) newErrors.consentType = "* Campo obligatorio";

    if (!lang.trim()) newErrors.lang = "* Campo obligatorio";

    if (!companyLogo.trim()) {
      newErrors.companyLogo = "* Campo obligatorio";
    } else if (companyLogo.trim().length < 3) {
      newErrors.companyLogo =
        "* El nombre del propietario debe tener al menos 3 caracteres";
    } else if (specialCharRegex.test(companyLogo.trim())) {
      newErrors.companyLogo =
        "* El campo no puede empezar por un carácter especial";
    } else if (startsWithNumber.test(companyLogo.trim())) {
      newErrors.companyLogo = "* El campo no puede empezar por un número";
    } else if (allDigits.test(companyLogo.trim())) {
      newErrors.companyLogo =
        "* El campo no puede estar compuesto solo por números";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onCreateBannerSubmit = (event) => {
    event.preventDefault();
    if (!validateFields()) return false;
    startSavingBanner({
      id: parseInt(id, 10),
      title: cleanString(title),
      cookieDeclaration: cleanString(cookieDeclaration),
      consentType: cleanString(consentType),
      lang: cleanString(lang),
      companyLogo: cleanString(companyLogo),
      legislation: legislation,
      legislationDescription: legislationDescription,
      cookiePolicy: cookiePolicy,
      privacyPolicy: privacyPolicy,
    });
    return true;
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error al guardar los datos del banner", errorMessage, "error");
    }
  }, [errorMessage]);
  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openAddBannerDialog}
        onClose={handleCloseAndReset}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            // onCreateBannerSubmit(event);
            // handleCloseAndReset();
            const success = onCreateBannerSubmit(event);
            if (success) handleCloseAndReset();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Añadir banner</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText color="primary.main">
            Para cumplir con las normativas de privacidad como el GDPR, es
            necesario configurar un banner de cookies que informe a los usuarios
            sobre el uso de cookies en tu sitio web. Por favor, completa los
            campos requeridos para personalizar el banner, incluyendo detalles
            como el nombre, la categoría y los aspectos de seguridad
            relacionados con las cookies. Asegúrate de incluir enlaces válidos
            para la política de cookies y la política de privacidad, los cuales
            serán accesibles para los usuarios. Una vez configurado, el banner
            será visible en tu sitio web y permitirá a los usuarios administrar
            su consentimiento de forma transparente.
          </DialogContentText>
          <CBannerForm
            title={title}
            cookieDeclaration={cookieDeclaration}
            consentType={consentType}
            lang={lang}
            legislation={legislation}
            legislationDescription={legislationDescription}
            cookiePolicy={cookiePolicy}
            privacyPolicy={privacyPolicy}
            onAddBannerChange={onAddBannerChange}
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
            Añadir banner
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

CAddBannerDialog.propTypes = {
  id: PropTypes.string,
  openAddBannerDialog: PropTypes.bool,
  handleCloseAddBannerDialog: PropTypes.func,
};
