import { Box, Stack, Typography } from "@mui/material";
import dominio from "../../assets/img/misdominios.png";
import noDominio from "../../assets/img/noDominio.png";
import general from "../../assets/img/descripciongeneral.png";
import addDominio from "../../assets/img/addDomain.png";
import editDominio from "../../assets/img/editDomain.png";
import searchDominio from "../../assets/img/searchDomain.png";
import suscripcion from "../../assets/img/suscripcion.png";

export const Dominios = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Mis Dominios
      </Typography>
      <Typography variant="body1">
        Al acceder a la sección <em>Mis Dominios</em>, verás una lista de todos
        los dominios registrados en tu cuenta. Esta área proporciona un resumen
        claro de cada dominio, incluyendo información esencial y acciones
        rápidas para gestionarlos eficazmente.
      </Typography>
      <Typography variant="body1">Los datos mostrados incluyen:</Typography>
      <Stack component="ul" spacing={2} sx={{ pl: 3 }}>
        <li style={{ listStyleType: "disc" }}>
          <Typography variant="body1">
            <strong>Código:</strong> Cada dominio recibe un identificador único
            ,necesario para su integración con CookieManager.
          </Typography>
        </li>
        <li style={{ listStyleType: "disc" }}>
          <Typography variant="body1">
            <strong>Nombre:</strong> Muestra el nombre del dominio, facilitando
            su identificación dentro de la cuenta.
          </Typography>
        </li>
        <li style={{ listStyleType: "disc" }}>
          <Typography variant="body1">
            <strong>Cookies:</strong> Indica el número total de cookies
            registradas, tanto automáticas como manuales. Incluye alertas sobre
            cookies que requieren atención inmediata por temas de consentimiento
            o categorización.
          </Typography>
        </li>
        <li style={{ listStyleType: "disc" }}>
          <Typography variant="body1">
            <strong>Operación:</strong> donde se pueden ver los detalles del
            dominio, editar su información o eliminarlo (siempre que esté
            marcado como inactivo).
          </Typography>
        </li>
      </Stack>
      <Box
        component="img"
        src={dominio}
        alt="Mis dominios"
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
        En caso de que el usuario no tenga ningún dominio registrado aún, se
        mostrará un mensaje informativo que indica: “Aún no tienes dominios
        registrados”, acompañado de una sugerencia de acción: “Haz clic en
        ‘Añadir dominio’”, proporcionando un acceso directo para que pueda
        comenzar a registrar su primer dominio en el sistema
      </Typography>
      <Box
        component="img"
        src={noDominio}
        alt="Vista del usuario sin dominios"
        sx={{
          width: 500,
          display: "block",
          mx: "auto",
          ml: 35,
          textAlign: "center",
          borderRadius: 2,
        }}
      />
      <Box sx={{ mt: 0.5 }}>
        <Typography variant="h6" gutterBottom>
          Agregar dominio
        </Typography>
        <Typography variant="body1">
          Para incorporar un nuevo dominio a su cuenta, diríjase a la sección{" "}
          <em>Mis dominios</em>. Desde allí, podrá iniciar un proceso guiado que
          le permitirá ingresar el dominio para cumplir con las normativas de
          privacidad.
        </Typography>
        <Box
          component="img"
          src={addDominio}
          alt="Añadir dominio"
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
          <strong>Nota:</strong> en función del plan de suscripción activo,
          existe un límite en la cantidad de dominios que se pueden registrar.
          Si ya ha alcanzado ese límite, el botón de “Añadir dominio” dejará de
          mostrarse automáticamente, impidiendo la creación de nuevos dominios
          hasta que se elimine uno existente o se actualice el plan de
          suscripción del usuario.
        </Typography>
      </Box>
      <Box sx={{ mt: 0.5 }}>
        <Typography variant="h6" gutterBottom>
          Editar dominio
        </Typography>
        <Typography variant="body1">
          Para modificar la configuración de un dominio existente, acceda a la
          sección <em>Mis dominios</em>. Desde allí, podrá editar detalles
          asociados al dominio.
        </Typography>
        <Box
          component="img"
          src={editDominio}
          alt="Editar dominio"
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
          Buscar dominio
        </Typography>
        <Typography variant="body1">
          Utilice la barra de búsqueda para localizar rápidamente un dominio
          dentro de su lista. Ingrese el nombre completo o una parte del nombre
          del dominio, y el sistema mostrará todos los resultados que coincidan
          total o parcialmente con el término introducido.
        </Typography>
        <Box
          component="img"
          src={searchDominio}
          alt="Buscar dominio"
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
      <Box
        sx={{
          borderBottom: "2px dotted #666",
          width: "100%",
          my: 2, // Espaciado vertical
        }}
      />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Detalles del dominio
        </Typography>
        <Typography variant="body1">
          Al explorar un dominio específico, obtendrás una vista detallada
          organizada en distintas secciones clave:
        </Typography>
        <Stack component="ul" spacing={2} sx={{ pl: 3 }}>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="body1">
              <strong>Suscripción:</strong> muestra el plan activo y permite
              actualizarlo a uno superior si se desea.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="body1">
              <strong>Cookies:</strong> visualiza el total de cookies y gestiona
              aquellas que necesitan categorización o se configuran antes del
              consentimiento.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="body1">
              <strong>Escaneo de cookies:</strong> muestra los resultados del
              último análisis, incluyendo fecha, cantidad de cookies y páginas
              evaluadas. Permite iniciar un nuevo escaneo manual.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="body1">
              <strong>Utilización:</strong> monitorea las sesiones totales en el
              periodo mensual.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="body1">
              <strong>Crear banner: </strong>permite generar un nuevo banner de
              consentimiento que se mostrará a los visitantes del dominio.
            </Typography>
          </li>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="body1">
              <strong>Eliminar dominio:</strong> elimina permanentemente un
              dominio, siempre que esté marcado como inactivo.
            </Typography>
          </li>
        </Stack>
      </Box>
      <Box
        component="img"
        src={general}
        alt="Descripción general del dominio"
        sx={{
          width: 500,
          display: "block",
          mx: "auto",
          ml: 35,
          textAlign: "center",
          borderRadius: 2,
        }}
      />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Suscripción
        </Typography>
        <Typography variant="body1">
          En esta sección podrá consultar su plan de suscripción actual, con
          detalles como el número máximo de dominios activos. El plan activo se
          muestra destacado visualmente para facilitar su identificación, y en
          él el botón <em>Actualizar suscripción </em> no está disponible para
          evitar confusión. Si desea ajustar el servicio a sus necesidades,
          puede hacerlo fácilmente desde el botón{" "}
          <em>Actualizar suscripción </em>.
        </Typography>
        <Box
          component="img"
          src={suscripcion}
          alt="Administrar suscripción"
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
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Cookies
        </Typography>
        <Typography variant="body1">
          Visualice la cantidad total de cookies vinculadas a su dominio, ya
          sean identificadas automáticamente o añadidas de forma manual. Para
          gestionarlas o asignarles una categoría, diríjase a la sección{" "}
          <em>Administrar cookies</em> dentro de la pestaña correspondiente.
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Escaneo de cookies
        </Typography>
        <Typography variant="body1">
          Aquí se muestran los resultados del último escaneo realizado,
          incluyendo la fecha del análisis, la cantidad de cookies encontradas y
          el número de páginas examinadas. Si lo desea, puede ejecutar un
          escaneo manual en cualquier momento para mantener actualizado su
          registro de cookies.
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Utilización
        </Typography>
        <Typography variant="body1">
          Esta sección le permite hacer seguimiento del uso de su dominio,
          mostrando la cantidad de sesiones en el período mensual.
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Crear banner
        </Typography>
        <Typography variant="body1">
          Permite generar un nuevo banner de consentimiento que se mostrará a
          los usuarios al acceder a su dominio. Puede personalizar su contenido
          y configuración para cumplir con las normativas de privacidad
          vigentes.
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Borrar dominio
        </Typography>
        <Typography variant="body1">
          Al seleccionar esta opción, puede borrar permanentemente un dominio de
          su cuenta. Para poder eliminarlo, este debe encontrarse en estado
          “Inactivo”. Tenga en cuenta que esta acción es irreversible y
          eliminará todos los datos asociados al dominio, incluidos banners y
          cookies configuradas.
        </Typography>
      </Box>
    </>
  );
};
