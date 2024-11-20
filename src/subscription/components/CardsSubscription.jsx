import PropTypes from "prop-types";

import { Grid2 } from "@mui/material";
import { CUpdateSubscriptionDialog } from "./CUpdateSubscriptionDialog";
import { useState } from "react";
import { SubscriptionDetails } from "./SubscriptionDetails";

export const CardsSubscription = ({ subscriptions = [] }) => {
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
        {subscriptions.map((subcription) => (
          <SubscriptionDetails
            key={subcription.id}
            title={subcription.title}
            description={subcription.description}
            price={subcription.price}
            characteristic1={subcription.characteristic1}
            characteristic2={subcription.characteristic2}
            buttonTitle={subcription.buttonTitle}
            handleUpdateSubscription={handleUpdateSubscription}
          />
        ))}
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

CardsSubscription.propTypes = {
  subscriptions: PropTypes.array.isRequired,
};
