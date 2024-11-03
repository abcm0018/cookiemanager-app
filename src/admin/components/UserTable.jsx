import {
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CDeleteUserDialog } from "./CDeleteUserDialog";
import PropTypes from "prop-types";
import { useState } from "react";

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

  return (
    <>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellidos</TableCell>
            <TableCell>Correo electrónico</TableCell>
            <TableCell>Compañía</TableCell>
            <TableCell>Suscripción</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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
        </TableBody>
      </Table>

      <CDeleteUserDialog
        openDeleteUserDialog={openDeleteUserDialog}
        handleCloseDeleteUserDialog={handleCloseUserDialog}
      />
    </>
  );
};

UserTable.propType = {
  users: PropTypes.array,
};
