import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const CardDetail = ({
  title = "",
  description = "",
  buttonTitle = "",
  secondaryButtonTitle = "",
  bgcolor = "#F5F5F7",
  onButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        width: 300,
        mr: 3,
        mt: 2,
        bgcolor: bgcolor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 150,
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body" sx={{ color: "primary.main" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between" }}>
        {secondaryButtonTitle && (
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={onSecondaryButtonClick}
          >
            {secondaryButtonTitle}
          </Button>
        )}
        <Button
          size="small"
          sx={{
            color: "primary.main",
            "&:hover": {
              bgcolor: "white",
              color: "secondary.main",
              borderColor: "primary.main",
            },
          }}
          variant="text"
          onClick={onButtonClick}
        >
          {buttonTitle}
        </Button>
      </CardActions>
    </Card>
  );
};

CardDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonTitle: PropTypes.string,
  secondaryButtonTitle: PropTypes.string,
  bgcolor: PropTypes.string,
  onButtonClick: PropTypes.func,
  onSecondaryButtonClick: PropTypes.func,
};
