import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CookieStats } from "./CookieStats";
import { contarCookies } from "../utils/contarCookies";

export const CGraphicDialog = ({
  openDialog,
  handleCloseDialog,
  isLoading,
  statistics = [],
}) => {
  //const { statistics = [] } = useDomainStore();
  const { aceptadas, rechazadas } = contarCookies(statistics);
  console.log({ aceptadas, rechazadas });

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
        Estadísticas de uso de cookies
        <IconButton
          onClick={handleCloseDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {isLoading ? (
          <Typography align="center">Cargando estadísticas...</Typography>
        ) : statistics.length > 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CookieStats aceptadas={aceptadas} rechazadas={rechazadas} />
          </Box>
        ) : (
          <Typography align="center">No hay datos disponibles.</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

CGraphicDialog.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  statistics: PropTypes.array,
};
