import { AdminPanelSettings, EmojiFlags, Rule } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid2,
  Typography,
} from "@mui/material";

export const FeaturesComponent = () => {
  return (
    <Box>
      <Grid2 container>
        <Container>
          <Grid2 sx={{ bgcolor: "white", padding: 6 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "40px",
              }}
            >
              CookieManager te ayuda a gestionar las cookies y rastradores en tu
              sitio web para poder cumplir con la privacidad
            </Typography>
          </Grid2>
          <Grid2 container sx={{ pb: 10 }}>
            <Card sx={{ minWidth: 275, width: 350, mr: 4 }}>
              <CardContent>
                <EmojiFlags
                  sx={{ fontSize: 50, color: "secondary.main", ml: 15 }}
                />
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Control total de cookies y rastreadores
                </Typography>
                <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                  El potente escáner de Usercentrics comprueba tu sitio web
                  mensualmente para identificar las cookies y tecnologías de
                  seguimiento que estás usando, las categoriza automáticamente y
                  las bloquea hasta que los visitantes den su consentimiento.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, width: 350, mr: 4 }}>
              <CardContent>
                <Rule sx={{ fontSize: 50, color: "secondary.main", ml: 15 }} />
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Recopilación de consentimientos de confianza
                </Typography>
                <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                  Empieza a recopilar consentimientos en tu sitio web de
                  inmediato con una de nuestras plantillas o diseña fácilmente
                  tu propio banner de cookies. Provee transparencia a tus
                  usuarios sobre cómo se recopilan sus datos y con qué
                  propósitos.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, width: 350, mr: 4 }}>
              <CardContent>
                <AdminPanelSettings
                  sx={{
                    fontSize: 50,
                    color: "secondary.main",
                    ml: 15,
                  }}
                />
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Almacenamiento seguro de los consentimientos
                </Typography>
                <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                  Disfruta de la tranquilidad de cumplir con la privacidad en tu
                  sitio web en todo momento gracias a nuestros informes de
                  cookies y panel de consentimiento. Los consentimientos se
                  almacenan por hasta 12 meses y los registros están disponibles
                  en caso de auditorías de protección de datos o peticiones de
                  acceso de sujetos de datos.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Container>
      </Grid2>
    </Box>
  );
};
