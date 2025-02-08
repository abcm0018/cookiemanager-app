import PropTypes from "prop-types";

import {
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
}) => {
  return (
    <Grid2>
      <Card
        sx={{
          minWidth: 275,
          width: 300,
          bgcolor: "#F5F7F8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 250,
          boxShadow: 3,
          borderRadius: 2,
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
            {price} €uros/mes
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography
            component="ul"
            sx={{ color: "text.secondary", pl: 2, mb: 3 }}
          >
            <li>El número máximo de dominios permitidos es: {maxDomains}</li>
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", p: 2, pt: 0 }}>
          <Button
            size="medium"
            fullWidth
            sx={{
              bgcolor: "secondary.main",
              color: "white",
              mt: -3,
            }}
            variant="contained"
            onClick={handleUpdateSubscription}
          >
            {buttonTitle}
          </Button>
        </CardActions>
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
  handleUpdateSubscription: PropTypes.func.isRequired,
};
