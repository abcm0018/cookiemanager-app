import { CardContent, Divider, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const SubscriptionDetails = ({
  title = "",
  description = "",
  price = "",
  characteristic1 = "",
  characteristic2 = "",
}) => {
  <CardContent>
    <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
      {title}
    </Typography>
    <Typography variant="body1" sx={{ color: "text.secondary" }}>
      {description}
    </Typography>
    <Typography
      variant="h5"
      sx={{ pt: 2, color: "text.primary", fontWeight: "bold" }}
    >
      {price}
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography component="ul" sx={{ color: "text.secondary", pl: 2, mb: 3 }}>
      <li>{characteristic1}</li>
      <li>{characteristic2}</li>
    </Typography>
  </CardContent>;
};

SubscriptionDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  characteristic1: PropTypes.string,
  characteristic2: PropTypes.string,
  actions: PropTypes.array,
  onButtonClick: PropTypes.func,
};
