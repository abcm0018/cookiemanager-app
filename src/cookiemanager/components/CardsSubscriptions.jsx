import PropTypes from "prop-types";

import { Grid2 } from "@mui/material";
import { SubscriptionDetails } from "./SubscriptionDetails";

export const CardsSubscriptions = ({ subscriptions = [] }) => {
  return (
    <>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        {subscriptions.map((subcription) => (
          <SubscriptionDetails
            key={subcription.id}
            title={subcription.planType}
            description={subcription.description}
            price={subcription.price}
            maxDomains={subcription.maxDomains}
            characteristic1={subcription.characteristic1}
            characteristic2={subcription.characteristic2}
          />
        ))}
      </Grid2>
    </>
  );
};

CardsSubscriptions.propTypes = {
  subscriptions: PropTypes.array.isRequired,
};
