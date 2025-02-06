import { Box, Grid2, Typography } from "@mui/material";
import { CCardImplementation } from "../components";

export const ImplementationView = () => {
  const implementationsModes = [
    {
      title: "Gestión Google Tag Manager",
      description:
        "CookieManager proporciona una plantilla de Google Tag Manager con soporte incorporado de Google Consent Mode para una implementación fácil y sin problemas.",
      details:
        "Aquí puedes encontrar detalles adicionales sobre cómo integrar y configurar Google Tag Manager con el modo de consentimiento de Google. Asegúrate de seguir las instrucciones detalladas para configurar las etiquetas correctamente y garantizar la privacidad de los usuarios.",
      firstButtonTitle: "Ver instrucciones",
      secondButtonTitle: "Saber más...",
      instructionsLink: "https://tagmanager.google.com/",
      isConsentManagement: false,
    },
    {
      title: "Gestión WordPress Plugin",
      description:
        "CookieManager provee un plugin de Wordpress para hacer la implementación a su Wordpress. El plugin está disponible desde el repositorio de plugins de Wordpress.",
      details:
        "El plugin de WordPress permite una integración sencilla con CookieManager. Para instalarlo, simplemente ve al repositorio de plugins de WordPress y busca 'CookieManager'. Luego, sigue los pasos de configuración para ajustar la integración a tus necesidades específicas.",
      firstButtonTitle: "Ver instrucciones",
      secondButtonTitle: "Saber más...",
      instructionsLink: "https://wordpress.org/plugins/",
      isConsentManagement: false,
    },
    {
      title: "Gestión del consentimiento",
      description:
        "CookieManager proporciona un script para hacer su implementación más fácil en su proyecto. Tan solo tienes que añadirlo entre las etiquetas head. Consulte el manual de integración.",
      details:
        "Este script permite gestionar el consentimiento de los usuarios antes de cargar cualquier etiqueta o script que recopile datos personales. Solo tienes que incluir el código proporcionado en la sección 'head' de tu HTML para empezar. Asegúrate de revisar la documentación completa para obtener más detalles sobre cómo personalizar el comportamiento del script según tus necesidades.",
      firstButtonTitle: "Ver script",
      secondButtonTitle: "Saber más...",
      scriptCode: "<script>/* Script de Consentimiento aquí */</script>",
      isConsentManagement: true,
    },
  ];

  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 14, mr: 14 }}>
      <Box>
        <Typography variant="h5">
          Elegir el método de aplicación adecuado
        </Typography>
        <Box sx={{ pt: 2 }}>
          <Typography variant="body">
            Implementar CookieManager en su sitio web es un paso crucial para
            garantizar la privacidad de los datos y el cumplimiento de la
            normativa. El método que elija para la implementación depende de la
            configuración de su sitio web y del sistema de gestión de contenidos
            (CSM) que esté utilizando. Es esencial implementar CookieManager
            correctamente para evitar cualquier pérdida de datos de seguimiento
            o la instalación prematura de cookies antes de obtener el
            consentimiento del usuario. Puede encontrar instrucciones detalladas
            de implementación en la documentación de CookieManager.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ pt: 2 }}>
          Selecciona su método de implementación:
        </Typography>
        <Typography variant="body" sx={{ pt: 2 }}>
          Puede encontrar más información sobre la integración en la
          documentación de CookieManager.
        </Typography>
      </Box>
      <Grid2 container sx={{ pt: 3 }}>
        {implementationsModes.map((mode) => (
          <CCardImplementation
            key={mode.title}
            title={mode.title}
            description={mode.description}
            firstButtonTitle={mode.firstButtonTitle}
            secondButtonTitle={mode.secondButtonTitle}
            details={mode.details}
            instructionsLink={mode.instructionsLink}
            isConsentManagement={mode.isConsentManagement}
            scriptCode={mode.scriptCode}
          />
        ))}
      </Grid2>
    </Grid2>
  );
};
