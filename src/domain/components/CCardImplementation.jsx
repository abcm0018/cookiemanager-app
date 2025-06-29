import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CMoreInfoDialog } from "./CDialogMoreInfo";
import { CScriptDialog } from "./CScriptDialog";
import { useParams } from "react-router-dom";
import { useDomainStore } from "../../hooks";
import Swal from "sweetalert2";

export const CCardImplementation = ({
  title = "",
  description = "",
  firstButtonTitle = "",
  secondButtonTitle = "",
  thirdButtonTitle = "",
  details = "",
  instructionsLink = "",
  scriptCss = "",
  scriptJs = "",
  isConsentManagement = false,
}) => {
  const { id } = useParams();
  const {
    activeDomain,
    script,
    startLoadingBanner,
    startLoadingScript,
    startDownloadFile,
    banner,
  } = useDomainStore();

  const isInactive = activeDomain?.status === "Inactivo";

  const [openScriptDialog, setOpenScriptDialog] = useState(false);
  const [openMoreInfoDialog, setOpenMoreInfoDialog] = useState(false);

  const handleInstructionsClick = () => {
    if (instructionsLink) {
      window.open(instructionsLink, "_blank");
    }
  };

  const handleScriptClick = () => {
    if (isInactive) {
      Swal.fire({
        title: "Acción no permitida",
        text: "El dominio está inactivo. Actívalo para usar esta función.",
        icon: "warning",
      });
      return;
    }
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

  const handleDownloadClick = () => {
    if (isInactive) {
      Swal.fire({
        title: "Acción no permitida",
        text: "El dominio está inactivo. Actívalo para usar esta función.",
        icon: "warning",
      });
      return;
    }
    startDownloadFile(banner.id);
  };

  useEffect(() => {
    startLoadingBanner(id);
    startLoadingScript(id);
  }, [id]);

  return (
    <>
      <Box sx={{ width: 300, mr: 1 }}>
        <Card
          sx={{
            bgcolor: "#F5F7F8",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <CardContent
            sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ flexGrow: 1, minHeight: 80 }}>
              {description}{" "}
              {isConsentManagement && (
                <Button
                  size="small"
                  onClick={handleMoreInfoClick}
                  sx={{ mt: 2 }}
                >
                  {secondButtonTitle}
                </Button>
              )}
            </Typography>
          </CardContent>
          <CardActions sx={{ mt: "auto" }}>
            {isConsentManagement ? (
              <>
                <Button
                  size="small"
                  onClick={handleScriptClick}
                  disabled={!banner}
                >
                  {firstButtonTitle}
                </Button>
                <Button
                  size="small"
                  onClick={handleDownloadClick}
                  disabled={!banner}
                >
                  {thirdButtonTitle}
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

      {/* Diálogo para mostrar el script */}
      {isConsentManagement && script && (
        <CScriptDialog
          open={openScriptDialog}
          onClose={handleScriptDialogClose}
          apiKey={script.apiKey}
          scriptCss={script.codigoCss}
          scriptJs={script.codigoJs}
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
  thirdButtonTitle: PropTypes.string,
  details: PropTypes.string,
  instructionsLink: PropTypes.string,
  scriptCss: PropTypes.string,
  scriptJs: PropTypes.string,
  isConsentManagement: PropTypes.bool,
};
