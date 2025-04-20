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
import { useEffect } from "react";
import Swal from "sweetalert2";
import { CBannerForm } from "./CBannerForm";
export const CAddBannerDialog = ({
  id,
  openAddBannerDialog,
  handleCloseAddBannerDialog,
}) => {
  const { startSavingBanner, errorMessage } = useDomainStore();

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
    handleCloseAddBannerDialog();
  };

  const onCreateBannerSubmit = (event) => {
    event.preventDefault();
    startSavingBanner({
      id: parseInt(id, 10),
      title: title,
      cookieDeclaration: cookieDeclaration,
      consentType: consentType,
      lang: lang,
      companyLogo: companyLogo,
      legislation: legislation,
      legislationDescription: legislationDescription,
      cookiePolicy: cookiePolicy,
      privacyPolicy: privacyPolicy,
    });
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
            onCreateBannerSubmit(event);
            handleCloseAndReset();
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
