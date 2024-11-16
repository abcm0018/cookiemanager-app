import PropTypes from "prop-types";

import {
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CDeleteUserDialog } from "./CDeleteUserDialog";
import { useState } from "react";
import { TableLayout } from "../layout/TableLayout";

export const UserTable = ({ users = [] }) => {
  const [openDeleteUserDialog, setOpenDeleteUserDialog] = useState(false);

  const handleDeleteUser = () => {
    console.log("Abriendo el dialogo para ver detalles de la cookie");
    setOpenDeleteUserDialog(true);
  };

  const handleCloseUserDialog = () => {
    console.log("Cerrando dialogo de ver detalles de la cookie");
    setOpenDeleteUserDialog(false);
  };

  const headers = [
    "Nombre",
    "Apellidos",
    "Correo electrónico",
    "Compañía",
    "Subscripción",
    "Acción",
  ];

  return (
    <>
      <TableLayout headers={headers}>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell component="th" scope="row">
              <Typography variant="body1">{user.nombre}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{user.apellidos}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{user.email}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{user.compañia}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{user.suscripcion}</Typography>
            </TableCell>
            <TableCell>
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="delete"
                  size="small"
                  color="error"
                  onClick={handleDeleteUser}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </TableLayout>
      <CDeleteUserDialog
        openDeleteUserDialog={openDeleteUserDialog}
        handleCloseDeleteUserDialog={handleCloseUserDialog}
      />
    </>
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
};
