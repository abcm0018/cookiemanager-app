import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CMoreBannerInfo } from "./CMoreBannerInfo";

export const CardDetail = ({
  title = "",
  description = "",
  buttonTitle = "",
  secondaryButtonTitle = "",
  bgcolor = "#F5F5F7",
  onButtonClick,
  onSecondaryButtonClick,
  disabled = false,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const isBanner = title.toLowerCase().includes("banner");
  const isLongDescription = isBanner && description.length > 100;
  const shortDescription = isLongDescription
    ? `${description.slice(0, 100)}...`
    : description;

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  return (
    <>
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
          height: 195,
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>

            <Typography variant="body" sx={{ color: "primary.main" }}>
              {shortDescription}
              {isLongDescription && (
                <Button
                  size="small"
                  onClick={handleOpenDialog}
                  sx={{
                    textTransform: "none",
                    ml: 1,
                    color: "primary.main",
                  }}
                >
                  Leer más
                </Button>
              )}
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
            disabled={disabled}
            onClick={onButtonClick}
          >
            {buttonTitle}
          </Button>
        </CardActions>
      </Card>
      <CMoreBannerInfo
        open={openDialog}
        onClose={handleCloseDialog}
        title={title}
        description={description}
      />
    </>
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
  disabled: PropTypes.bool,
};
