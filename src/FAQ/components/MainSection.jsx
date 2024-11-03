import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const MainSection = () => {
  return (
    <Grid2
      container
      direction="column"
      sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
    >
      <Container>
        <Box
          sx={{
            bgcolor: "#F5F7F8",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Acerca de Cookie Manager
          </Typography>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              ¿Qué es CookieManager?
            </AccordionSummary>
            <AccordionDetails>
              CookieManager es una plataforma diseñada para gestionar cookies y
              la obtención de consentimiento de los usuarios respecto al
              seguimiento en línea. Su principal función es asegurar que los
              sitios web y aplicaciones cumplan con normativas de privacidad,
              como el Reglamento General de Protección de Datos (RGPD) de la
              Unión Europea
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              ¿Cómo funciona CookieManager?
            </AccordionSummary>
            <AccordionDetails>
              CookieManager ofrece a los dueños de sitios web y aplicaciones una
              interfaz sencilla para crear y administrar banners de
              consentimiento, manejar las preferencias de los usuarios y
              habilitar o bloquear automáticamente las cookies según dichas
              preferencias.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              ¿CookieManager cumple con el GDPR?
            </AccordionSummary>
            <AccordionDetails>
              CookieManager está en conformidad con el GDPR, ofreciendo todas
              las herramientas que los dueños de sitios web y aplicaciones
              necesitan para gestionar y obtener el consentimiento de los
              usuarios. Además, se actualiza periódicamente para asegurar que
              sigue cumpliendo con las normativas de privacidad más recientes.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              Si uso CookieManager, ¿mi sitio web cumple plenamente con el GDPR?
            </AccordionSummary>
            <AccordionDetails>
              CookieManager es una robusta plataforma de gestión de
              consentimiento de cookies (CMP) que se puede integrar fácilmente
              en su sitio web. Al implementarse correctamente, CookieManager
              cumple eficazmente con los requisitos específicos del GDPR en
              cuanto a las cookies de seguimiento y el consentimiento de los
              usuarios, siendo un paso importante hacia la conformidad con esta
              normativa. Sin embargo, es esencial recordar que el GDPR abarca
              una amplia gama de regulaciones relacionadas con la privacidad y
              la seguridad, más allá del consentimiento de cookies. Aunque
              CookieHub es clave para cumplir con las obligaciones de cookies
              bajo el GDPR, su proceso de cumplimiento puede requerir acciones
              adicionales para abordar otros aspectos del reglamento, como la
              protección de datos, la seguridad y los derechos de los usuarios.
              Es recomendable realizar una evaluación exhaustiva del
              cumplimiento del GDPR en su sitio web para asegurar que se sigan
              todas las normativas aplicables.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              ¿CookieManager es compatible con sitios web que tienen múltiples
              idiomas?
            </AccordionSummary>
            <AccordionDetails>
              Sí, CookieManager es compatible con sitios web en varios idiomas.
              Puedes configurar el widget en diferentes idiomas y seleccionar
              los que deseas habilitar para tu sitio web desde el panel de
              control de CookieHub.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              ¿Qué pasos debo seguir para cerrar mi cuenta?
            </AccordionSummary>
            <AccordionDetails>
              Si ya no deseas usar CookieManager y quieres eliminar tu cuenta y
              datos de manera permanente, sigue estos pasos: Primero, elimina
              todos los dominios vinculados a tu cuenta. Para hacerlo,
              selecciona cada dominio y haz clic en el botón "Eliminar". Solo se
              eliminarán las cuentas que no tengan dominios activos para evitar
              interrupciones del servicio, especialmente en casos de cuentas
              comprometidas o solicitudes falsas. Luego, envía una solicitud de
              eliminación a ana@gmail.com desde la dirección de correo
              electrónico asociada a tu cuenta principal. Tu cuenta será
              eliminada en un plazo de 24 horas y recibirás una confirmación.
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Cookies
          </Typography>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7-content"
              id="panel7-header"
            >
              ¿Qué son las cookies?
            </AccordionSummary>
            <AccordionDetails>
              Las cookies son archivos de texto pequeños que se guardan en el
              dispositivo de un usuario cuando visita un sitio web o usa una
              app. Se emplean con distintos fines, como análisis,
              personalización y seguimiento de actividad.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel8-content"
              id="panel8-header"
            >
              ¿Qué tipo de cookies hay?
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ mb: 2 }}>
                • <strong>Cookies esenciales:</strong> necesarias para el
                correcto funcionamiento de un sitio web o una aplicación.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                • <strong>Cookies opcionales:</strong> no son imprescindibles
                para la operatividad del sitio, pero ofrecen mejoras en la
                experiencia del usuario, como personalización o análisis.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                • <strong>Cookies de terceros:</strong> originadas en dominios
                externos, a menudo se utilizan para el seguimiento del usuario y
                la publicidad dirigida.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Gestion del consentimiento
          </Typography>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel9-content"
              id="panel9-header"
            >
              ¿Qué significa la gestión del consentimiento?
            </AccordionSummary>
            <AccordionDetails>
              La gestión del consentimiento implica obtener y administrar el
              permiso de los usuarios para utilizar cookies y otras tecnologías
              de seguimiento en un sitio web o aplicación.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel10-content"
              id="panel10-header"
            >
              ¿Cómo se define un banner de cookies?
            </AccordionSummary>
            <AccordionDetails>
              Un banner de cookies es una ventana emergente que se muestra en
              una página web o aplicación para notificar a los usuarios sobre la
              utilización de cookies y solicitar su permiso para emplearlas.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel11-content"
              id="panel11-header"
            >
              ¿Es posible ajustar el diseño del banner de CookieManager?
            </AccordionSummary>
            <AccordionDetails>
              Sí, es posible modificar el diseño del banner de CookieManager
              para que se alinee con la identidad visual de tu sitio web o
              aplicación.
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Grid2>
  );
};
