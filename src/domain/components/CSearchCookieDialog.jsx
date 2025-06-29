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
import { useState, useEffect, useMemo } from "react";
import { CFilterCookie } from "./CFilterCookie";

export const CSearchCookieDialog = ({
  cookies = [],
  openFilterCookieDialog,
  handleCloseFilterCookieDialog,
  setFilteredCookies,
  translateCategory,
}) => {
  // Define el orden personalizado para las categorías
  const categoryOrder = ["Esencial", "Opcional", "Tercero"];

  // Obtenemos las categorías únicas, las traducimos y luego las ordenamos
  // Pasamos 'categorias' directamente a CFilterCookie
  const categorias = useMemo(() => {
    const uniqueTranslatedCategories = [
      ...new Set(cookies.map((cookie) => translateCategory(cookie.category))),
    ];

    return uniqueTranslatedCategories.sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);

      // Maneja casos en los que una categoría podría no estar en el orden predefinido
      if (indexA === -1 && indexB === -1) {
        return 0;
      }
      if (indexA === -1) {
        return 1;
      }
      if (indexB === -1) {
        return -1;
      }

      return indexA - indexB;
    });
  }, []);

  const parseDuration = (duration) => {
    const trimmed = duration.trim().toLowerCase();

    // Permitir solo "sesión" sin número
    if (trimmed === "sesión" || trimmed === "sesion") return 0;

    // Rechazar casos como "1 sesión", "2 sesion", etc.
    if (/\d+\s*(sesión|sesion)/i.test(trimmed)) return NaN;

    const match = trimmed.match(/(\d+)/);
    const value = match ? parseInt(match[0], 10) : NaN;

    if (trimmed.includes("año") || trimmed.includes("años")) return value * 365;
    if (trimmed.includes("mes") || trimmed.includes("meses")) return value * 30;
    if (
      trimmed.includes("día") ||
      trimmed.includes("dias") ||
      trimmed.includes("días") ||
      trimmed.includes("dia")
    )
      return value;

    return NaN;
  };

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

  // Solo actualizar duration cuando se abre el diálogo o cambian los cookies
  useEffect(() => {
    if (openFilterCookieDialog) {
      setDuration([minDuration, maxDuration]);
    }
  }, [openFilterCookieDialog, minDuration, maxDuration]);

  // Nueva función para aplicar filtros solo al enviar el formulario
  const handleApplyFilters = (event) => {
    event.preventDefault();
    const filtered = cookies.filter((cookie) => {
      const matchName = searchTerm
        ? cookie.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(translateCategory(cookie.category));
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
        selectedSamesite.includes(cookie.sameSite);

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
    handleCloseFilterCookieDialog();
  };

  // Función para limpiar filtros
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedProviders([]);
    setDuration([minDuration, maxDuration]);
    setSelectedHttpOnly(null);
    setSelectedSecure(null);
    setSelectedSamesite([]);
    setFilteredCookies(cookies); // ← Reset de cookies al completo
  };

  // Función para cerrar el diálogo y restablecer filtros
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
            onSubmit: handleApplyFilters,
          }}
        >
          <DialogTitle sx={{ pl: 8, pr: 8 }}>
            <IconButton
              onClick={handleCloseFilterCookieDialog}
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
              categorias={categorias}
              translateCategory={translateCategory}
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
            <Button
              variant="outlined"
              sx={{
                bgcolor: "primary.main",
                color: "white",
                borderColor: "primary.main",
              }}
              onClick={handleCloseWithReset}
            >
              Limpiar filtros
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
  translateCategory: PropTypes.func.isRequired,
};
