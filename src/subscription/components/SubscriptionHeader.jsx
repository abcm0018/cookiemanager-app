import PropTypes from "prop-types";

import { Grid2, Typography } from "@mui/material";

export const SubscriptionHeader = ({ currentPlan = "" }) => {
  return (
    <Grid2 container sx={{ pb: 6 }} justifyContent="space-between">
      <Grid2 xs={12} sm={6}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Plan de suscripción
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Plan de suscripción actual: {currentPlan}
        </Typography>
      </Grid2>
    </Grid2>
  );
};

SubscriptionHeader.propTypes = {
  currentPlan: PropTypes.string.isRequired,
};
