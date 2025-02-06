import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CMoreInfoDialog } from "./CDialogMoreInfo";
import { CScriptDialog } from "./CScriptDialog";

export const CCardImplementation = ({
  title = "",
  description = "",
  firstButtonTitle = "",
  secondButtonTitle = "",
  details = "",
  instructionsLink = "",
  scriptCode = "",
  isConsentManagement = false,
}) => {
  const [openScriptDialog, setOpenScriptDialog] = useState(false); // Estado para el diálogo de script
  const [openMoreInfoDialog, setOpenMoreInfoDialog] = useState(false); // Estado para el diálogo "Saber más"

  const handleInstructionsClick = () => {
    if (instructionsLink) {
      window.open(instructionsLink, "_blank");
    }
  };

  const handleScriptClick = () => {
    if (isConsentManagement) {
      setOpenScriptDialog(true);
    }
  };

  const handleScriptDialogClose = () => {
    setOpenScriptDialog(false);
  };

  const handleMoreInfoClick = () => {
    setOpenMoreInfoDialog(true);
  };

  const handleMoreInfoDialogClose = () => {
    setOpenMoreInfoDialog(false);
  };

  return (
    <>
      <Box sx={{ width: 300, mr: 1 }}>
        <Card sx={{ bgcolor: "#F5F7F8" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
          <CardActions>
            {isConsentManagement ? (
              <>
                <Button size="small" onClick={handleScriptClick}>
                  {firstButtonTitle}
                </Button>
                <Button size="small" onClick={handleMoreInfoClick}>
                  {secondButtonTitle}
                </Button>
              </>
            ) : (
              <>
                <Button size="small" onClick={handleInstructionsClick}>
                  {firstButtonTitle}
                </Button>
                <Button size="small" onClick={handleMoreInfoClick}>
                  {secondButtonTitle}
                </Button>
              </>
            )}
          </CardActions>
        </Card>
      </Box>

      {/* Diálogo para mostrar el script (solo si es gestión del consentimiento) */}
      {isConsentManagement && scriptCode && (
        <CScriptDialog
          open={openScriptDialog}
          onClose={handleScriptDialogClose}
          scriptCode={scriptCode}
        />
      )}

      {/* Diálogo de información adicional */}
      <CMoreInfoDialog
        open={openMoreInfoDialog}
        onClose={handleMoreInfoDialogClose}
        title={title}
        details={details}
      />
    </>
  );
};

CCardImplementation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  firstButtonTitle: PropTypes.string,
  secondButtonTitle: PropTypes.string,
  details: PropTypes.string,
  instructionsLink: PropTypes.string,
  scriptCode: PropTypes.string,
  isConsentManagement: PropTypes.bool,
};
