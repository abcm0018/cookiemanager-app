import PropTypes from "prop-types";

import { Grid2 } from "@mui/material";
import { SubscriptionDetails } from "./SubscriptionDetails";
import { useUserStore } from "../../hooks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const CardsSubscription = ({ subscriptions = [] }) => {
  const { startUpdatingPlanUser, startPaymentSuccess } = useUserStore();

  const initiatePayment = (planType) => {
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
              handleUpdateSubscription={() =>
                initiatePayment(subscription.planType)
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
