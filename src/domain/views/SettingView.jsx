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
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

export const SettingView = () => {
  const { banner, startUpdatingBanner, errorMessage } = useDomainStore();

  const {
    title,
    cookieDeclaration,
    companyLogo,
    consentType,
    lang,
    onInputChange: onEditBannerChange,
    setFormState,
  } = useForm(editBannerForm);

  const onUpdateBannerSubmit = (event) => {
    event.preventDefault();

    startUpdatingBanner({
      id: banner.id,
      title: banner.title,
      cookieDeclaration: cookieDeclaration,
      consentType: consentType,
      companyLogo: companyLogo,
      lang: lang,
      legislation: banner.legislation,
      legislationDescription: banner.legislationDescription,
      cookiePolicy: banner.cookiePolicy,
      privacyPolicy: banner.privacyPolicy,
    });
  };

  // Prellenar los datos del formulario
  useEffect(() => {
    if (banner) {
      setFormState({
        title: banner.title,
        cookieDeclaration: banner.cookieDeclaration,
        consentType: banner.consentType,
        companyLogo: banner.companyLogo,
        lang: banner.lang,
      });
    }
  }, [banner, setFormState]);

  const onCancel = () => {
    Navigate("/description-tab-view"); // Cambiar la ruta a DescriptionTabView
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
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 10, pr: 10 }}>
      <Box>
        <form onSubmit={onUpdateBannerSubmit}>
          {/** General */}
          <CGeneralSettingsField
            title={title}
            companyLogo={companyLogo}
            onEditBannerChange={onEditBannerChange}
          />
          <Divider sx={{ mt: 2, mb: 2 }} />
          {/**Configuración Regional */}
          <CRegionalSettingsField
            consentType={consentType}
            cookieDeclaration={cookieDeclaration}
            onEditBannerChange={onEditBannerChange}
          />
          <Divider sx={{ mt: 2, mb: 2 }} />
          {/**Idiomas */}
          <CLanguageSettingsField
            lang={lang}
            onEditBannerChange={onEditBannerChange}
          />
          <Divider sx={{ mt: 2, mb: 2 }} />
          {/**Categorías */}
          <CCategoriesSettingsField />
          <Divider sx={{ mt: 2, mb: 2 }} />
          {/**Botones */}
          <CButtonsSettingsField
            onSave={onUpdateBannerSubmit}
            onCancel={onCancel}
          />
        </form>
      </Box>
    </Grid2>
  );
};
