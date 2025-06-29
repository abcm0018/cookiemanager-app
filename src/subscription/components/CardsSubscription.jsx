import PropTypes from "prop-types";

import { Grid2 } from "@mui/material";
import { SubscriptionDetails } from "./SubscriptionDetails";
import { useUserStore } from "../../hooks";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const CardsSubscription = ({
  subscriptions = [],
  currentPlan,
  activeDomains,
}) => {
  const { startUpdatingPlanUser, startPaymentSuccess } = useUserStore();

  const navigate = useNavigate();

  const initiatePayment = (planType) => {
    // Buscamos el plan actual del usuario para obtener cúal es el número máximo de dominios
    const currentPlanDetails = subscriptions.find(
      (sub) => sub.planType === currentPlan
    );
    const currentMaxDomains = currentPlanDetails
      ? currentPlanDetails.maxDomains
      : 0;

    // Buscamos el plan al que el usuario quiere cambiar para saber cúal es el máximo de dominios permitidos
    const newPlanDetails = subscriptions.find(
      (sub) => sub.planType === planType
    );
    const newMaxDomains = newPlanDetails ? newPlanDetails.maxDomains : 0;

    // Comprobamos si el usuario tiene más dominios activos que el que permite el nuevo plan
    if (activeDomains > newMaxDomains) {
      Swal.fire({
        icon: "warning",
        title: "No puedes actualizar la suscripción",
        text: `Tu plan actual permite ${currentMaxDomains} dominios, pero el plan "${
          newPlanDetails.planType
        }" solo permite ${newMaxDomains}. Debes desactivar o eliminar ${
          activeDomains - newMaxDomains
        } dominio(s) antes de poder cambiar a este plan.`,
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

    // Si el número de dominios es válido
    startUpdatingPlanUser({ planType });
  };

  console.log("🔄 CardsSubscription montado con URL:", window.location.href);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("paymentId");
  const payerId = queryParams.get("PayerID");

  useEffect(() => {
    startPaymentSuccess(paymentId, payerId);
  }, []);

  return (
    <>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        {subscriptions
          .filter((subscription) => subscription.planType !== "Starter")
          .map((subscription) => (
            <SubscriptionDetails
              key={subscription.id}
              title={subscription.planType}
              maxDomains={subscription.maxDomains}
              description={subscription.description}
              price={subscription.price}
              buttonTitle={subscription.buttonTitle}
              handleUpdateSubscription={
                subscription.planType !== currentPlan
                  ? () => initiatePayment(subscription.planType)
                  : undefined
              }
              isCurrentPlan={subscription.planType === currentPlan}
            />
          ))}
      </Grid2>
    </>
  );
};

CardsSubscription.propTypes = {
  subscriptions: PropTypes.array.isRequired,
  currentPlan: PropTypes.string,
  activeDomains: PropTypes.number.isRequired,
};
