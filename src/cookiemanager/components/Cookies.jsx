import { Box, Stack, Typography } from "@mui/material";
import cookies from "../../assets/img/cookies.png";
import noCookies from "../../assets/img/noCookies.png";
import edit from "../../assets/img/editCookie.png";
import add from "../../assets/img/addCookie.png";
import info from "../../assets/img/infoCookie.png";
import filtroCookie from "../../assets/img/filtroCookie.png";
import filtradoCookie from "../../assets/img/filtradoCookie.png";

export const Cookies = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Gestión de cookies
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        En la pestaña <em>Cookies</em> podrá consultar una lista completa de las
        cookies detectadas en su sitio web, junto con detalles sobre cada una.
        Desde aquí, puede mover las cookies entre categorías, añadir o modificar
        datos de las mismas.
      </Typography>
      <Box
        component="img"
        src={cookies}
        alt="Tabla de cookies"
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
        En caso de que el dominio no tenga cookies registradas, ya sea porque
        aún no se ha realizado un escaneo o porque no se han cargado
        manualmente, se mostrará una vista informativa con el siguiente mensaje:
        “No hay cookies cargadas”. Este mensaje indica que aún no se han
        detectado ni cargado cookies tras el escaneo y sugiere al usuario que
        realice un escaneo del sitio o proceda a la carga manual de cookies para
        comenzar su gestión.
      </Typography>
      <Box
        component="img"
        src={noCookies}
        alt="Tabla de cookies"
        sx={{
          width: 500,
          display: "block",
          mx: "auto",
          ml: 35,
          textAlign: "center",
          borderRadius: 2,
        }}
      />
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Filtros y exportación
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Para facilitar la gestión de cookies, dispone de opciones avanzadas de
          filtrado que le permiten buscar cookies específicas según diferentes
          parámetros.
        </Typography>
        <Box
          component="img"
          src={filtroCookie}
          alt="Filtrar de cookies"
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
          Esto le permite localizar rápidamente la información que necesita sin
          recorrer toda la lista.
        </Typography>
        <Box
          component="img"
          src={filtradoCookie}
          alt="Filtrado de cookies"
          sx={{
            width: 500,
            display: "block",
            mx: "auto",
            ml: 35,
            textAlign: "center",
            borderRadius: 2,
          }}
        />
        <Typography variant="body1">
          Además, puede exportar la lista completa de cookies o un subconjunto
          filtrado en formato Excel para su análisis o documentación externa.
          Esta función está disponible a través del botón{" "}
          <em>Exportar cookies</em>.
        </Typography>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" gutterBottom>
          Ver información detallada de una cookie
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Para obtener más información sobre una cookie específica, haga clic en
          el icono de información junto a la cookie que desea revisar. Allí
          podrá consultar información toda la información asociada.
        </Typography>
        <Box
          component="img"
          src={info}
          alt="Información de cookie"
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
      {/* Entrar */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Cómo gestionar una cookie
        </Typography>
        <Stack component="ul" spacing={2} sx={{ pl: 3 }}>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="body1">
              Haga clic en el botón <em>Editar</em> junto a la cookie que desea
              gestionar.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ listStyleType: "disc" }}>
              En el cuadro de diálogo que se abre, podrá modificar diferentes
              campos de la cookie seleccionando.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" style={{ listStyleType: "disc" }}>
              Una vez realizados los cambios, haga clic en <em>Guardar</em> para
              aplicarlos o en <em>Cancelar</em> para descartarlos.
            </Typography>
          </li>
        </Stack>
        <Box
          component="img"
          src={edit}
          alt="Tabla de cookies"
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
      <Box>
        <Typography variant="h6" gutterBottom>
          Preguntas frecuentes
        </Typography>
        <Stack component="ul" spacing={2} sx={{ pl: 3 }}>
          <li style={{ listStyleType: "disc" }}>
            <Typography variant="body1">
              ¿Es posible agregar cookies manualmente?
            </Typography>
            <Typography>
              Sí, puede añadir cookies manualmente si el escáner no las detectó.
              Simplemente haga clic en el botón <em>Añadir cookie</em>, complete
              la información necesaria y guarde los cambios.
            </Typography>
            <Box
              component="img"
              src={add}
              alt="Tabla de cookies"
              sx={{
                width: 500,
                display: "block",
                mx: "auto",
                ml: 35,
                textAlign: "center",
                borderRadius: 2,
              }}
            />
          </li>
          <li>
            <Typography variant="body1" style={{ listStyleType: "disc" }}>
              ¿Puedo eliminar una cookie?
            </Typography>
            <Typography>
              Sí, las cookies pueden eliminarse sin problemas.
            </Typography>
          </li>
        </Stack>
      </Box>
    </>
  );
};
