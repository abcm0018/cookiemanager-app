import PropTypes from "prop-types";
import { useState } from "react";
import { Search } from "@mui/icons-material";
import { CAddDomainDialog } from "./CAddDomainDialog";
import {
  Button,
  IconButton,
  InputBase,
  Paper,
  Typography,
  Box,
} from "@mui/material";

export const HeadSection = ({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  canAddDomain,
}) => {
  const [openAddDomainDialog, setOpenAddDomainDialog] = useState(false);

  const handleOpenAddDomain = () => {
    setOpenAddDomainDialog(true);
  };

  const handleCloseAddDomainDialog = () => {
    setOpenAddDomainDialog(false);
  };

  return (
    <Box sx={{ mb: 3 }}>
      {/* Contenedor principal con alineación vertical */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // ✅ alinea verticalmente todos los elementos
          justifyContent: "space-between",
          flexWrap: "wrap", // si la pantalla es estrecha, que se adapte
          gap: 2,
        }}
      >
        {/* Título */}
        <Typography
          variant="h4"
          sx={{
            color: "primary.main",
            fontStyle: "normal",
            whiteSpace: "nowrap",
          }}
        >
          Mis dominios
        </Typography>

        {/* Botón y buscador */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {canAddDomain && (
            <Button
              variant="contained"
              sx={{ bgcolor: "secondary.main", whiteSpace: "nowrap" }}
              onClick={handleOpenAddDomain}
            >
              Añadir dominio
            </Button>
          )}

          <Paper
            component="form"
            onSubmit={onSearchSubmit}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 300,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Buscar dominio"
              value={searchTerm}
              onChange={onSearchChange}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
          </Paper>
        </Box>
      </Box>

      {/* Diálogo para añadir dominio */}
      <CAddDomainDialog
        openAddDomainDialog={openAddDomainDialog}
        handleCloseAddDomainDialog={handleCloseAddDomainDialog}
      />
    </Box>
  );
};

HeadSection.propTypes = {
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func,
  onSearchSubmit: PropTypes.func,
  canAddDomain: PropTypes.bool,
};
