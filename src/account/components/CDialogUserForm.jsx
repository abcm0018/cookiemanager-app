import { Box, Grid2, TextField } from "@mui/material";
import PropTypes from "prop-types";

export const CDialogUserForm = ({
  name,
  surname,
  email,
  company,
  onEditUserChange,
}) => {
  return (
    <Box>
      <Grid2 container direction={"row"}>
        <Box sx={{ width: 775, mt: 2 }}>
          <TextField
            autoFocus
            required
            id="user-name"
            name="name"
            label="Nombre"
            value={name}
            type="text"
            sx={{ width: 378, mr: 2 }}
            onChange={onEditUserChange}
          />
          <TextField
            autoFocus
            required
            id="user-surname"
            name="surname"
            label="Apellidos"
            value={surname}
            type="text"
            sx={{ width: 378 }}
            onChange={onEditUserChange}
          />
        </Box>
        <Box sx={{ width: 775, mt: 2 }}>
          <TextField
            autoFocus
            required
            id="user-email"
            name="email"
            label="Correo electrónico"
            value={email}
            type="text"
            sx={{ width: 378, mr: 2 }}
            onChange={onEditUserChange}
          />
          <TextField
            autoFocus
            required
            id="company-name"
            name="company"
            label="Compañía"
            value={company}
            type="text"
            sx={{ width: 378 }}
            onChange={onEditUserChange}
          />
        </Box>
      </Grid2>
    </Box>
  );
};

CDialogUserForm.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  onEditUserChange: PropTypes.func.isRequired,
};
