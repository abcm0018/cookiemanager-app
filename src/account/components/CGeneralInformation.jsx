import { Box, Grid2, Typography } from "@mui/material";
import { CManageSubscription } from "./CManageSubscription";
import { useUserStore } from "../../hooks";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CGeneralInformation = () => {
  const { user, startCancelPlanUser, errorMessage } = useUserStore();
  const navigate = useNavigate();

  const handleCancelSubscription = () => {
    const userId = user.id;
    const persistRoot = localStorage.getItem("persist:root");

    if (persistRoot) {
      const parsedData = JSON.parse(persistRoot);
      const subscriptions = JSON.parse(parsedData.subscriptions);

      // Filtramos solo los dominios activos
      const activeUserDomains = (user.domains || []).filter(
        (domain) => domain.status === "Activo"
      );
      const numberActiveDomains = activeUserDomains.length;
      console.log(numberActiveDomains);

      const subscriptionsList = subscriptions.subscriptions;
      const starterPlan = subscriptionsList.find(
        (sub) => sub.planType === "Starter"
      );

      if (starterPlan) {
        const maxAllowedStarterDomains = starterPlan.maxDomains;

        if (numberActiveDomains > maxAllowedStarterDomains) {
          Swal.fire({
            icon: "error",
            title: "No puedes cancelar la suscripción",
            text: `Para cancelar tu suscripción, debes tener máximo ${maxAllowedStarterDomains} dominio activo.`,
            confirmButtonText: "Administrar dominios",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/domains");
            }
          });

          return;
        }
      }
    }

    // Si todo está bien, sigue con la cancelación de suscripción
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no podrá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    }).then((result) => {
      if (result.isConfirmed) {
        startCancelPlanUser({ userId })
          .then(() => {
            Swal.fire({
              title: "Suscripción cancelada",
              text: "La suscripción se ha cancelado de forma correcta.",
              icon: "success",
              allowOutsideClick: false,
              allowEscapeKey: false,
            });
          })
          .catch(() => {
            Swal.fire("Error", "No se pudo cancelar la suscripción.", "error");
          });
      }
    });
  };

  useEffect(() => {
    // Manejo de errores en la carga
    if (errorMessage !== undefined) {
      Swal.fire("Error al cargar los detalles", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <>
      <Grid2 container sx={{ pb: 10, pt: 4, pl: 8, pr: 8 }}>
        <Box>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Información general
          </Typography>
          <Grid2 container direction="row" spacing={2}>
            <Grid2 xs={6}>
              <Box sx={{ width: 400, mt: 2 }}>
                <Typography>
                  <Typography
                    component="span"
                    fontWeight="bold"
                    variant="body1"
                  >
                    Nombre:
                  </Typography>{" "}
                  {user.name}
                </Typography>
              </Box>
            </Grid2>
            <Grid2 xs={6}>
              <Box sx={{ width: 400, mt: 2, ml: 25 }}>
                <Typography>
                  <Typography
                    component="span"
                    fontWeight="bold"
                    variant="body1"
                  >
                    Apellidos:
                  </Typography>{" "}
                  {user.surname}
                </Typography>
              </Box>
            </Grid2>
            <Grid2 xs={6}>
              <Box sx={{ width: 400, mt: 2 }}>
                <Typography>
                  <Typography
                    component="span"
                    fontWeight="bold"
                    variant="body1"
                  >
                    Email:
                  </Typography>{" "}
                  {user.email}
                </Typography>
              </Box>
            </Grid2>
            <Grid2 xs={6}>
              <Box sx={{ width: 400, mt: 2, ml: 25 }}>
                <Typography>
                  <Typography
                    component="span"
                    fontWeight="bold"
                    variant="body1"
                  >
                    Compañía:
                  </Typography>{" "}
                  {user.company}
                </Typography>
              </Box>
            </Grid2>
            <CManageSubscription
              handleCancelSubscription={handleCancelSubscription}
            />
          </Grid2>
        </Box>
      </Grid2>
    </>
  );
};
