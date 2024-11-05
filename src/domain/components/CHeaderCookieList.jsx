import PropTypes from "prop-types";

import { Box, Button, Typography } from "@mui/material";

export const CHeaderCookieList = ({
  descripcion = "",
  handleOpenCookieDialog,
}) => {
  return (
    <>
      <Box component="div">
        <Typography variant="body" sx={{ color: "primary.main" }}>
          {descripcion}
        </Typography>
      </Box>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ bgcolor: "secondary.main" }}
          onClick={handleOpenCookieDialog}
        >
          Añadir cookies
        </Button>
      </Box>
    </>
  );
};
CHeaderCookieList.propTypes = {
  descripcion: PropTypes.string.isRequired,
  handleOpenCookieDialog: PropTypes.func.isRequired,
};
