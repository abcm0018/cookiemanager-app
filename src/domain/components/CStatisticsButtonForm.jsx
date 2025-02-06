import PropTypes from "prop-types";

import { Box, Button, Divider } from "@mui/material";

export const CStatisticsButtonForm = ({ clearFilters }) => {
  return (
    <Box sx={{ width: 950 }}>
      <Divider sx={{ mt: 5, mb: 2 }} />
      <Button
        variant="contained"
        sx={{
          width: 220,
          height: 40,
          mt: 2,
          mr: 2,
          bgcolor: "secondary.main",
        }}
        type="submit"
      >
        Aplicar filtros
      </Button>
      <Button
        variant="contained"
        sx={{
          width: 220,
          height: 40,
          mt: 2,
          bgcolor: "primary.main",
        }}
        onClick={clearFilters}
      >
        Limpiar filtros
      </Button>
    </Box>
  );
};

CStatisticsButtonForm.propTypes = {
  clearFilters: PropTypes.func,
};
