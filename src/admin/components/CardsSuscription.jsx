import PropTypes from "prop-types";

import { Grid2 } from "@mui/material";
import { CUpdateSubscriptionDialog } from "./CUpdateSubscriptionDialog";
import { CDeleteSubscriptionDialog } from "./CDeleteSubscriptionDialog";
import { useState } from "react";
import { SubscriptionDetailsAdmin } from "./SubscriptionDetailsAdmin";

export const CardsSubscription = ({ subscriptions = "" }) => {
  const [openUpdateSubscriptionDialog, setOpenUpdateSubscriptionDialog] =
    useState(false);

  const [openDeleteSubscriptionDialog, setOpenDeleteSubscriptionDialog] =
    useState(false);

  const handleUpdateSubscription = () => {
    console.log("Abriendo el dialogo para añadir dominio");
    setOpenUpdateSubscriptionDialog(true);
  };

  const handleDeleteSubscription = () => {
    console.log("Abriendo el dialogo para añadir dominio");
    setOpenDeleteSubscriptionDialog(true);
  };

  const handleCloseUpdateSubscriptionDialog = () => {
    console.log("Cerrando dialogo de añadir dominio");
    setOpenUpdateSubscriptionDialog(false);
  };

  const handleCloseDeleteSubscriptionDialog = () => {
    console.log("Cerrando dialogo de añadir dominio");
    setOpenDeleteSubscriptionDialog(false);
  };

  return (
    <>
      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        {subscriptions.map((subcription) => (
          <SubscriptionDetailsAdmin
            key={subcription.id}
            title={subcription.title}
            description={subcription.description}
            price={subcription.price}
            characteristic1={subcription.characteristic1}
            characteristic2={subcription.characteristic2}
            buttonTitle1={subcription.buttonTitle1}
            buttonTitle2={subcription.buttonTitle2}
            handleUpdateSubscription={handleUpdateSubscription}
            handleDeleteSubscription={handleDeleteSubscription}
          />
        ))}
      </Grid2>
      <CUpdateSubscriptionDialog
        openUpdateSubscriptionDialog={openUpdateSubscriptionDialog}
        handleCloseUpdateSubscriptionDialog={
          handleCloseUpdateSubscriptionDialog
        }
      />
      <CDeleteSubscriptionDialog
        openDeleteSubscriptionDialog={openDeleteSubscriptionDialog}
        handleCloseDeleteSubscriptionDialog={
          handleCloseDeleteSubscriptionDialog
        }
      />
    </>
  );
};

CardsSubscription.propTypes = {
  subscriptions: PropTypes.array.isRequired,
};
