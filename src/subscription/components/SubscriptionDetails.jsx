import PropTypes from "prop-types";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";

export const SubscriptionDetails = ({
  title = "",
  description = "",
  price = "",
  maxDomains = 0,
  buttonTitle = "Actualizar",
  handleUpdateSubscription,
  isCurrentPlan = false,
}) => {
  return (
    <Grid2>
      <Card
        sx={{
          minWidth: 275,
          width: 300,
          height: 325,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: isCurrentPlan ? "#E0F7FA" : "#F5F7F8", // Un color diferente si es el plan actual
          border: isCurrentPlan ? "2px solid #00BCD4" : "none", // Borde opcional para destacar aún más
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            fontWeight="bold"
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            {description}
          </Typography>
          <Typography
            variant="h5"
            sx={{ pt: 2, color: "text.primary", fontWeight: "bold" }}
          >
            {parseFloat(price).toLocaleString("es-ES", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            €uros/mes
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography
            component="ul"
            sx={{ color: "text.secondary", pl: 2, mb: 3 }}
          >
            <li>El número máximo de dominios permitidos es: {maxDomains}</li>
          </Typography>
        </CardContent>
        {handleUpdateSubscription && (
          <CardActions sx={{ justifyContent: "center", p: 2, pt: 0 }}>
            <Button
              size="medium"
              fullWidth
              sx={{
                bgcolor: "secondary.main",
                color: "white",
                borderColor: "secondary.main",
                mt: -3,
              }}
              variant="contained"
              onClick={handleUpdateSubscription}
            >
              {buttonTitle}
            </Button>
          </CardActions>
        )}
        {!handleUpdateSubscription && (
          <Box sx={{ p: 0.5, pt: 0 }}>
            <Button
              size="medium"
              fullWidth
              variant="outlined"
              disabled
              sx={{
                mt: -3,
                visibility: "hidden",
              }}
            >
              {buttonTitle}
            </Button>
          </Box>
        )}
      </Card>
    </Grid2>
  );
};

SubscriptionDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  maxDomains: PropTypes.number.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  handleUpdateSubscription: PropTypes.func,
  isCurrentPlan: PropTypes.bool,
};
