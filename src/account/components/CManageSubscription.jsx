import PropTypes from "prop-types";

import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CManageSubscription = ({ handleCancelSubscription }) => {
  return (
    <>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Administrar suscripción
      </Typography>
      <Box
        sx={{
          mt: 2,
          width: "100%",
          maxWidth: 1000,
          height: 140,
          bgcolor: "#FAFAFA",
          borderRadius: 2,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="span" fontWeight="bold">
          Basic
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="/subscription" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                width: 170,
                height: 40,
                mr: 1,
                bgcolor: "secondary.main",
              }}
            >
              Actualizar plan
            </Button>
          </Link>
          <Button
            variant="contained"
            onClick={handleCancelSubscription}
            sx={{
              width: 170,
              height: 40,
              bgcolor: "primary.main",
            }}
          >
            Cancelar plan
          </Button>
        </Box>
      </Box>
    </>
  );
};

CManageSubscription.propTypes = {
  handleCancelSubscription: PropTypes.func,
};
