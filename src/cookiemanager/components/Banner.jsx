import { Box, Typography } from "@mui/material";
import addBanner from "../../assets/img/addBanner.png";
import editBanner from "../../assets/img/editBanner.png";
import noBanner from "../../assets/img/noBanner.png";

export const Banner = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Banner de consentimiento
      </Typography>
      <Typography variant="body1">
        Permite generar un nuevo banner de consentimiento que se mostrará a los
        usuarios al acceder a su dominio. Puede personalizar su contenido y
        configuración para cumplir con las normativas de privacidad vigentes.
      </Typography>
      <Box
        sx={{
          borderBottom: "2px dotted #666",
          width: "100%",
          my: 2, // Espaciado vertical
        }}
      />
      <Box sx={{ mt: 0.5 }}>
        <Typography variant="h6" gutterBottom>
          Agregar banner de consentimiento
        </Typography>
        <Typography variant="body1">
          Para incorporar un nuevo banner de consentimineto asociado al dominio,
          diríjase a la página <em>Descripción general</em>. Desde allí, podrá
          iniciar un proceso guiado que le permitirá ingresar el nuevo banner
          para su página.
        </Typography>
        <Box
          component="img"
          src={addBanner}
          alt="Añadir banner de consentimiento"
          sx={{
            width: 500,
            display: "block",
            mx: "auto",
            ml: 35,
            textAlign: "center",
            borderRadius: 2,
          }}
        />
      </Box>
      <Box sx={{ mt: 0.5 }}>
        <Typography variant="h6" gutterBottom>
          Editar banner de consentimiento
        </Typography>
        <Typography variant="body1">
          Para modificar un banner de consentimiento ya existente en su dominio,
          acceda a la pestaña <em>Editar banner</em>. Desde allí, puede editar
          los textos, estilos, categorías de consentimiento y el comportamiento
          del banner según sus necesidades. Una vez realizados los cambios,
          recuerde guardarlos y publicarlos para que se reflejen en su sitio
          web.
        </Typography>
        <Box
          component="img"
          src={editBanner}
          alt="Editar banner de consentimiento"
          sx={{
            width: 500,
            display: "block",
            mx: "auto",
            ml: 35,
            textAlign: "center",
            borderRadius: 2,
          }}
        />
        <Typography>
          En caso de que el dominio no cuente con un banner de consentimiento
          creado, y el usuario acceda directamente a la pestaña “Editar banner”,
          se mostrará una tarjeta informativa con el siguiente mensaje: “Aún no
          has creado ningún banner de consentimiento”, acompañado de una
          sugerencia de acción: “Para crear uno, ve a la pestaña de “Ver
          detalles” y pulsa el botón de “Crear banner” en la tarjeta
          correspondiente”
        </Typography>
        <Box
          component="img"
          src={noBanner}
          alt="Pantalla donde se muestra que no hay banner de consentimiento"
          sx={{
            width: 500,
            display: "block",
            mx: "auto",
            ml: 35,
            textAlign: "center",
            borderRadius: 2,
          }}
        />
      </Box>
      <Box sx={{ mt: 0.5 }}>
        <Typography variant="h6" gutterBottom>
          Eliminar banner de consentimiento
        </Typography>
        <Typography variant="body1">
          Si desea eliminar un banner de consentimiento asociado a un dominio,
          puede hacerlo desde la página <em>Descripción general</em>. Tenga en
          cuenta que esta acción es irreversible y el banner dejará de mostrarse
          en su sitio web.
        </Typography>
      </Box>
    </>
  );
};
