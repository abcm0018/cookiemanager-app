import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import { CUpdateSubscriptionDialog } from "./CUpdateSubscriptionDialog";
import { useState } from "react";

export const CardsSubscription = () => {
  const [openUpdateSubscriptionDialog, setOpenUpdateSubscriptionDialog] =
    useState(false);

  const handleUpdateSubscription = () => {
    console.log("Abriendo el dialogo para añadir dominio");
    setOpenUpdateSubscriptionDialog(true);
  };

  const handleCloseUpdateSubscriptionDialog = () => {
    console.log("Cerrando dialogo de añadir dominio");
    setOpenUpdateSubscriptionDialog(false);
  };

  return (
    <>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        <Grid2>
          <Card
            sx={{
              minWidth: 275,
              width: 300,
              bgcolor: "#F5F7F8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 250,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bold"
              >
                Basic
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Para pequeñas empresas y nuevas empresas
              </Typography>
              <Typography
                variant="h5"
                sx={{ pt: 2, color: "text.primary", fontWeight: "bold" }}
              >
                9.99 €/mes
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography
                component="ul"
                sx={{ color: "text.secondary", pl: 2, mb: 3 }}
              >
                <li>600 páginas por escaneo</li>
                <li>100.000 páginas vistas/mes</li>
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", p: 2, pt: 0 }}>
              <Button
                size="medium"
                fullWidth
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  mt: -3,
                }}
                variant="contained"
                onClick={handleUpdateSubscription}
              >
                Actualizar
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2>
          <Card
            sx={{
              minWidth: 275,
              width: 300,
              bgcolor: "#F5F7F8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 250,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bold"
              >
                Business
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Para medianas empresas con tráfico creciente
              </Typography>
              <Typography
                variant="h5"
                sx={{ pt: 2, color: "text.primary", fontWeight: "bold" }}
              >
                19.99 €/mes
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography
                component="ul"
                sx={{ color: "text.secondary", pl: 2, mb: 3 }}
              >
                <li>4000 páginas por escaneo</li>
                <li>300.000 páginas vistas/mes</li>
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", p: 2, pt: 0 }}>
              <Button
                size="medium"
                fullWidth
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  mt: -3,
                }}
                onClick={handleUpdateSubscription}
                variant="contained"
              >
                Actualizar
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2>
          <Card
            sx={{
              minWidth: 275,
              width: 300,
              bgcolor: "#F5F7F8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 250,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bold"
              >
                Enterprise
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Para grandes empresas con mucho tráfico
              </Typography>
              <Typography
                variant="h5"
                sx={{ pt: 2, color: "text.primary", fontWeight: "bold" }}
              >
                39.99 €/mes
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography
                component="ul"
                sx={{ color: "text.secondary", pl: 2, mb: 3 }}
              >
                <li>8000 páginas por escaneo</li>
                <li>Ilimitado de páginas vistas/mes</li>
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", p: 2, pt: 0 }}>
              <Button
                size="medium"
                fullWidth
                onClick={handleUpdateSubscription}
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  mt: -3,
                }}
                variant="contained"
              >
                Actualizar
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2>
          <Card
            sx={{
              minWidth: 275,
              width: 300,
              bgcolor: "#F5F7F8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 250,
              boxShadow: 3,
              ml: 2,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontWeight="bold"
              >
                Starter
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Para blogs y sitios web profesionales
              </Typography>
              <Typography
                variant="h5"
                sx={{ pt: 2, color: "text.primary", fontWeight: "bold" }}
              >
                0.00 €/mes
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography
                component="ul"
                sx={{ color: "text.secondary", pl: 2, mb: 3 }}
              >
                <li>100 páginas por escaneo</li>
                <li>25.000 páginas vistas/mes</li>
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", p: 2, pt: 0 }}>
              <Button
                size="medium"
                fullWidth
                onClick={handleUpdateSubscription}
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  mt: -3,
                }}
                variant="contained"
              >
                Actualizar
              </Button>
            </CardActions>
          </Card>
        </Grid2>
        <Grid2 />
      </Grid2>
      <CUpdateSubscriptionDialog
        openUpdateSubscriptionDialog={openUpdateSubscriptionDialog}
        handleCloseUpdateSubscriptionDialog={
          handleCloseUpdateSubscriptionDialog
        }
      />
    </>
  );
};
