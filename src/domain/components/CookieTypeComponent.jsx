import PropTypes from "prop-types";

import { Box, Paper, TableContainer, Typography } from "@mui/material";
import { CookieTable } from "./CookieTable";

export const CookieTypeComponent = ({ title = "", cookies = [] }) => {
  return (
    <Box component="div" sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ color: "primary.main", pb: 2 }}>
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <CookieTable cookies={cookies} />
      </TableContainer>
    </Box>
  );
};

CookieTypeComponent.propTypes = {
  title: PropTypes.string.isRequired,
  cookies: PropTypes.array.isRequired,
};
