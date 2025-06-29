import PropTypes from "prop-types";
import { Box, Divider, Grid2 } from "@mui/material";
import {
  CButtonsSettingsField,
  CCategoriesSettingsField,
  CGeneralSettingsField,
  CLanguageSettingsField,
  CRegionalSettingsField,
} from "../components";
import { useDomainStore, useForm } from "../../hooks";
import { editBannerForm } from "../utils";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { CNoBanner } from "../components/CNoBanner";

export const SettingView = ({ setCurrentTabIndex }) => {
  const { id } = useParams();
  const { banner, startUpdatingBanner, errorMessage, startLoadingBanner } =
    useDomainStore();

  const [errors, setErrors] = useState({});

  const cleanString = (str) => str.trim().replace(/\s+/g, " ");

  const [formInitialized, setFormInitialized] = useState(false);

  useEffect(() => {
    startLoadingBanner(id);
  }, [startLoadingBanner, id]);

  useEffect(() => {
    setFormInitialized(false);
  }, [id]);

  const {
    title,
    cookieDeclaration,
    companyLogo,
    consentType,
    lang,
    onInputChange: onEditBannerChange,
    setFormState,
  } = useForm(editBannerForm);

  // Prellenar los datos del formulario
  useEffect(() => {
    if (banner && !formInitialized) {
      setFormState({
        title: banner.title,
        cookieDeclaration: banner.cookieDeclaration,
        consentType: banner.consentType,
        companyLogo: banner.companyLogo,
        lang: banner.lang,
      });
      setFormInitialized(true);
      setErrors({});
    }
  }, [banner, formInitialized, setFormState]);

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

  const onUpdateBannerSubmit = (event) => {
    event.preventDefault();

    if (!validateFields()) return false;

    startUpdatingBanner({
      id: banner.id,
      title: cleanString(title),
      cookieDeclaration: cleanString(cookieDeclaration),
      consentType: cleanString(consentType),
      companyLogo: cleanString(companyLogo),
      lang: cleanString(lang),
      legislation: banner.legislation,
      legislationDescription: banner.legislationDescription,
      cookiePolicy: banner.cookiePolicy,
      privacyPolicy: banner.privacyPolicy,
    }).then((result) => {
      if (result) {
        Swal.fire(
          "¡Actualizado!",
          "El banner se ha actualizado correctamente.",
          "success"
        );
        return true;
      }
      return false;
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

  const onCancel = () => {
    // Restaura los valores del banner
    setFormState({
      title: banner.title,
      cookieDeclaration: banner.cookieDeclaration,
      consentType: banner.consentType,
      companyLogo: banner.companyLogo,
      lang: banner.lang,
    });

    setCurrentTabIndex(0); // Cambiar la ruta a DescriptionTabView
  };

  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 10, pr: 10 }}>
      {!banner ? (
        <CNoBanner />
      ) : (
        <Box>
          <form onSubmit={onUpdateBannerSubmit}>
            {/** General */}
            <CGeneralSettingsField
              title={title}
              companyLogo={companyLogo}
              onEditBannerChange={onEditBannerChange}
              errors={errors}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
            {/**Configuración Regional */}
            <CRegionalSettingsField
              consentType={consentType}
              cookieDeclaration={cookieDeclaration}
              onEditBannerChange={onEditBannerChange}
              errors={errors}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
            {/**Idiomas */}
            <CLanguageSettingsField
              lang={lang}
              onEditBannerChange={onEditBannerChange}
              errors={errors}
            />
            <Divider sx={{ mt: 2, mb: 2 }} />
            {/**Categorías */}
            <CCategoriesSettingsField />
            <Divider sx={{ mt: 2, mb: 2 }} />
            {/**Botones */}
            <CButtonsSettingsField onCancel={onCancel} />
          </form>
        </Box>
      )}
    </Grid2>
  );
};

SettingView.propTypes = {
  setCurrentTabIndex: PropTypes.func.isRequired,
};
