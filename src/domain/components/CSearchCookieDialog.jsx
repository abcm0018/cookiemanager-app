import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { CFilterCookie } from "./CFilterCookie";

export const CSearchCookieDialog = ({
  cookies = [],
  openFilterCookieDialog,
  handleCloseFilterCookieDialog,
  setFilteredCookies,
}) => {
  // Convertir la duración a días
  const parseDuration = (duration) => {
    const match = duration.match(/(\d+)/);
    const value = match ? parseInt(match[0]) : NaN;

    if (duration.includes("año")) return value * 365;
    if (duration.includes("mes")) return value * 30;
    if (duration.toLowerCase() === "sesión") return 0;
    return NaN;
  };

  // Obtenemos las duraciones válidas que tienen las cookies
  const validDurations = cookies
    .map((cookie) => parseDuration(cookie.duration))
    .filter((duration) => !isNaN(duration));

  const minDuration = validDurations.length ? Math.min(...validDurations) : 0;
  const maxDuration = validDurations.length ? Math.max(...validDurations) : 365;

  // Estados para los filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [duration, setDuration] = useState([minDuration, maxDuration]);
  const [selectedHttpOnly, setSelectedHttpOnly] = useState(null);
  const [selectedSecure, setSelectedSecure] = useState(null);
  const [selectedSamesite, setSelectedSamesite] = useState([]);

  // Filtrar cookies según los criterios
  useEffect(() => {
    const filtered = cookies.filter((cookie) => {
      const matchName = searchTerm
        ? cookie.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(cookie.category);
      const matchProvider =
        selectedProviders.length === 0 ||
        selectedProviders.includes(cookie.provider);
      const cookieDuration = parseDuration(cookie.duration);
      const matchDuration =
        !isNaN(cookieDuration) &&
        cookieDuration >= duration[0] &&
        cookieDuration <= duration[1];
      const matchHttpOnly =
        selectedHttpOnly === null || cookie.httpOnly === selectedHttpOnly;
      const matchSecure =
        selectedSecure === null || cookie.secure === selectedSecure;
      const matchSamesite =
        selectedSamesite.length === 0 ||
        selectedSamesite.includes(cookie.samesite);

      return (
        matchName &&
        matchCategory &&
        matchProvider &&
        matchDuration &&
        matchHttpOnly &&
        matchSecure &&
        matchSamesite
      );
    });
    setFilteredCookies(filtered);
  }, [
    searchTerm,
    selectedCategories,
    selectedProviders,
    duration,
    cookies,
    selectedHttpOnly,
    selectedSecure,
    selectedSamesite,
  ]);

  // Función para limpiar filtros
  useEffect(() => {
    const filtered = cookies.filter((cookie) => {
      const matchName = searchTerm
        ? cookie.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(cookie.category);
      const matchProvider =
        selectedProviders.length === 0 ||
        selectedProviders.includes(cookie.provider);
      const cookieDuration = parseDuration(cookie.duration);
      const matchDuration =
        !isNaN(cookieDuration) &&
        cookieDuration >= duration[0] &&
        cookieDuration <= duration[1];
      const matchHttpOnly =
        selectedHttpOnly === null || cookie.httpOnly === selectedHttpOnly;
      const matchSecure =
        selectedSecure === null || cookie.secure === selectedSecure;
      const matchSamesite =
        selectedSamesite.length === 0 ||
        selectedSamesite.includes(cookie.samesite);

      return (
        matchName &&
        matchCategory &&
        matchProvider &&
        matchDuration &&
        matchHttpOnly &&
        matchSecure &&
        matchSamesite
      );
    });
    setFilteredCookies(filtered);
  }, [
    searchTerm,
    selectedCategories,
    selectedProviders,
    duration,
    cookies,
    selectedHttpOnly,
    selectedSecure,
    selectedSamesite,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedProviders([]);
    setDuration([minDuration, maxDuration]);
    setSelectedHttpOnly(null);
    setSelectedSecure(null);
    setSelectedSamesite([]);
  };

  // Función para restablecer filtros cuando se cierre el diálogo
  const handleCloseWithReset = () => {
    clearFilters();
    handleCloseFilterCookieDialog();
  };

  return (
    <form>
      <Box>
        <Dialog
          fullWidth
          maxWidth="md"
          open={openFilterCookieDialog}
          onClose={handleCloseFilterCookieDialog}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              handleCloseFilterCookieDialog();
            },
          }}
        >
          <DialogTitle sx={{ pl: 8, pr: 8 }}>
            <IconButton
              onClick={handleCloseWithReset}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "black",
              }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            Filtrar cookies
          </DialogTitle>
          <DialogContent sx={{ pl: 8, pr: 8 }}>
            <DialogContentText color="primary.main">
              Para ayudarte a encontrar la información que necesitas, puedes
              utilizar los filtros disponibles para buscar cookies específicas.
              Filtra por nombre, categoría, proveedor, duración, httpOnly,
              samesite y secure.
            </DialogContentText>
            <CFilterCookie
              cookies={cookies}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedProviders={selectedProviders}
              setSelectedProviders={setSelectedProviders}
              duration={duration}
              setDuration={setDuration}
              minDuration={minDuration}
              maxDuration={maxDuration}
              selectedHttpOnly={selectedHttpOnly}
              setSelectedHttpOnly={setSelectedHttpOnly}
              selectedSecure={selectedSecure}
              setSelectedSecure={setSelectedSecure}
              selectedSamesite={selectedSamesite}
              setSelectedSamesite={setSelectedSamesite}
            />
          </DialogContent>
          <DialogActions sx={{ pl: 8, pr: 8, pb: 3 }}>
            <Button
              variant="outlined"
              type="submit"
              autoFocus
              sx={{
                bgcolor: "secondary.main",
                color: "white",
                borderColor: "secondary.main",
              }}
            >
              Aplicar filtros
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </form>
  );
};

CSearchCookieDialog.propTypes = {
  cookies: PropTypes.array.isRequired,
  openFilterCookieDialog: PropTypes.bool.isRequired,
  handleCloseFilterCookieDialog: PropTypes.func.isRequired,
  setFilteredCookies: PropTypes.func.isRequired,
};
