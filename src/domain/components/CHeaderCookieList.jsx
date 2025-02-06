import PropTypes from "prop-types";

import { Box, Typography } from "@mui/material";

export const CHeaderCookieList = ({ descripcion = "" }) => {
  return (
    <>
      <Box component="div">
        <Typography variant="body" sx={{ color: "primary.main" }}>
          {descripcion}
        </Typography>
      </Box>
    </>
  );
};
CHeaderCookieList.propTypes = {
  descripcion: PropTypes.string.isRequired,
  handleOpenCookieDialog: PropTypes.func.isRequired,
};
