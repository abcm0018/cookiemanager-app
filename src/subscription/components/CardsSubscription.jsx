import PropTypes from "prop-types";

import { Grid2 } from "@mui/material";
import { SubscriptionDetails } from "./SubscriptionDetails";
import Swal from "sweetalert2";
import { useUserStore } from "../../hooks";

export const CardsSubscription = ({ subscriptions = [] }) => {
  const { startUpdatingPlanUser, errorMessage } = useUserStore();

  const handleUpdateSubscription = (planType) => {
    Swal.fire({
      title: `Estás a punto de cambiar el plan a ${planType}, ¿Estás seguro?`,
      text: "Esta acción actualizará tu suscripción.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Cambiar a ${planType}`,
    }).then((result) => {
      if (result.isConfirmed) {
        startUpdatingPlanUser({ planType: planType });
        Swal.fire({
          title: "Subscripción actualizada",
          text: `El plan ha sido actualizado a ${planType} correctamente.`,
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        {subscriptions.map((subcription) => (
          <SubscriptionDetails
            key={subcription.id}
            title={subcription.planType}
            description={subcription.description}
            price={subcription.price}
            characteristic1={subcription.characteristic1}
            characteristic2={subcription.characteristic2}
            buttonTitle={subcription.buttonTitle}
            handleUpdateSubscription={() =>
              handleUpdateSubscription(subcription.planType)
            }
          />
        ))}
      </Grid2>
    </>
  );
};

CardsSubscription.propTypes = {
  subscriptions: PropTypes.array.isRequired,
};
