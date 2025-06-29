import PropTypes from "prop-types";
import { Box, Chip, Slider, TextField, Typography } from "@mui/material";

export const CFilterCookie = ({
  categorias,
  cookies = [],
  searchTerm,
  setSearchTerm,
  selectedCategories,
  setSelectedCategories,
  selectedProviders,
  setSelectedProviders,
  duration,
  setDuration,
  minDuration,
  maxDuration,
  selectedHttpOnly,
  setSelectedHttpOnly,
  selectedSecure,
  setSelectedSecure,
  selectedSamesite,
  setSelectedSamesite,
}) => {
  const proveedores = [...new Set(cookies.map((cookie) => cookie.provider))];

  // Solo mostramos valores válidos de SameSite
  const sameSiteOptions = [
    ...new Set(cookies.map((cookie) => cookie.sameSite)),
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleProvider = (provider) => {
    setSelectedProviders((prev) =>
      prev.includes(provider)
        ? prev.filter((p) => p !== provider)
        : [...prev, provider]
    );
  };

  const toggleHttpOnly = (value) => {
    setSelectedHttpOnly((prev) => (prev === value ? null : value));
  };

  const toggleSecure = (value) => {
    setSelectedSecure((prev) => (prev === value ? null : value));
  };

  const toggleSameSite = (samesite) => {
    setSelectedSamesite((prev = []) =>
      prev.includes(samesite)
        ? prev.filter((s) => s !== samesite)
        : [...prev, samesite]
    );
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
        Nombre de cookie
      </Typography>
      <TextField
        fullWidth
        label="Buscar cookie"
        placeholder="Escribe el nombre de la cookie"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 2 }}
      />

      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Categoría
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {categorias.map((categoria) => (
          <Chip
            key={categoria}
            label={categoria}
            onClick={() => toggleCategory(categoria)}
            color={
              selectedCategories.includes(categoria) ? "primary" : "default"
            }
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Box>

      <Typography variant="body1" sx={{ fontWeight: "bold", mt: 2 }}>
        Proveedor
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {proveedores.map((proveedor) => (
          <Chip
            key={proveedor}
            label={proveedor}
            onClick={() => toggleProvider(proveedor)}
            color={
              selectedProviders.includes(proveedor) ? "primary" : "default"
            }
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Box>

      <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
        Duración (días)
      </Typography>
      <Slider
        value={duration}
        onChange={(event, newValue) => setDuration(newValue)}
        valueLabelDisplay="auto"
        min={minDuration}
        max={maxDuration}
        sx={{
          mt: 2,
          color: "secondary.main",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        {/* HttpOnly */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", textAlign: "left" }}
          >
            HttpOnly
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <Chip
              label="Sí"
              onClick={() => toggleHttpOnly(true)}
              color={selectedHttpOnly === true ? "primary" : "default"}
              sx={{ cursor: "pointer" }}
            />
            <Chip
              label="No"
              onClick={() => toggleHttpOnly(false)}
              color={selectedHttpOnly === false ? "primary" : "default"}
              sx={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        {/* Secure */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{ display: "flex", fontWeight: "bold" }}
          >
            Secure
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <Chip
              label="Sí"
              onClick={() => toggleSecure(true)}
              color={selectedSecure === true ? "primary" : "default"}
              sx={{ cursor: "pointer" }}
            />
            <Chip
              label="No"
              onClick={() => toggleSecure(false)}
              color={selectedSecure === false ? "primary" : "default"}
              sx={{ cursor: "pointer" }}
            />
          </Box>
        </Box>

        {/* SameSite */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{ display: "flex", fontWeight: "bold" }}
          >
            SameSite
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            {sameSiteOptions.map((samesite) => (
              <Chip
                key={samesite}
                label={samesite}
                onClick={() => toggleSameSite(samesite)}
                color={
                  selectedSamesite?.includes(samesite) ? "primary" : "default"
                }
                sx={{ cursor: "pointer" }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

CFilterCookie.propTypes = {
  categorias: PropTypes.array.isRequired,
  cookies: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
  selectedProviders: PropTypes.array.isRequired,
  setSelectedProviders: PropTypes.func.isRequired,
  duration: PropTypes.array.isRequired,
  setDuration: PropTypes.func.isRequired,
  minDuration: PropTypes.number.isRequired,
  maxDuration: PropTypes.number.isRequired,
  selectedHttpOnly: PropTypes.bool,
  setSelectedHttpOnly: PropTypes.func.isRequired,
  selectedSecure: PropTypes.bool,
  setSelectedSecure: PropTypes.func.isRequired,
  selectedSamesite: PropTypes.array.isRequired,
  setSelectedSamesite: PropTypes.func.isRequired,
  translateCategory: PropTypes.func.isRequired,
};
