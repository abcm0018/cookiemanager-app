import PropTypes from "prop-types";
import {
  Box,
  Chip,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CEditCookieDialog } from "./CEditCookieDialog";
import { useState } from "react";
import { CInfoCookieDialog } from "./CInfoCookieDialog";
import { CDeleteCookieDialog } from "./CDeleteCookieDialog";

export const CookieTable = ({ cookies = [] }) => {
  const [openEditCookieDialog, setOpenEditCookieDialog] = useState(false);
  const [openInfoCookieDialog, setOpenInfoCookieDialog] = useState(false);
  const [openDeleteCookieDialog, setOpenDeleteCookieDialog] = useState(false);

  const handleEditCookie = () => {
    console.log("Abriendo el dialogo para editar cookie");
    setOpenEditCookieDialog(true);
  };
  const handleInfoCookie = () => {
    console.log("Abriendo el dialogo para ver detalles de la cookie");
    setOpenInfoCookieDialog(true);
  };

  const handleDeleteCookie = () => {
    console.log("Abriendo el dialogo para ver detalles de la cookie");
    setOpenDeleteCookieDialog(true);
  };

  const handleCloseEditCookieDialog = () => {
    console.log("Cerrando dialogo de editar cookie");
    setOpenEditCookieDialog(false);
  };

  const handleCloseInfoCookieDialog = () => {
    console.log("Cerrando dialogo de ver detalles de la cookie");
    setOpenInfoCookieDialog(false);
  };

  const handleCloseDeleteCookieDialog = () => {
    console.log("Cerrando dialogo de ver detalles de la cookie");
    setOpenDeleteCookieDialog(false);
  };

  return (
    <>
      <Table sx={{ width: 990 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Proveedor</TableCell>
            <TableCell>Duracion</TableCell>
            <TableCell>Etiquetas</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cookies.map((cookie) => (
            <TableRow
              key={cookie.nombre}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{ pl: 2 }} padding="none">
                <Typography variant="body1">{cookie.nombre}</Typography>
              </TableCell>
              <TableCell sx={{ pl: 2 }} padding="none">
                <Typography variant="body1">{cookie.tipo}</Typography>
              </TableCell>
              <TableCell sx={{ pl: 2 }} padding="none">
                <Typography variant="body1">{cookie.proveedor}</Typography>
              </TableCell>
              <TableCell sx={{ pl: 2 }} padding="none">
                <Typography variant="body1">{cookie.duracion}</Typography>
              </TableCell>
              <TableCell sx={{ pl: 2 }} padding="none">
                <Stack direction="row" spacing={1}>
                  {cookie.etiquetas.map((etiqueta) => (
                    <Box key={etiqueta.id} disablePadding dense>
                      <Chip label={etiqueta.nombre} size="small" />
                    </Box>
                  ))}
                </Stack>
              </TableCell>
              <TableCell>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    aria-label="info"
                    size="small"
                    color="secondary"
                    onClick={handleInfoCookie}
                  >
                    <InfoIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label="edit"
                    size="small"
                    color="primary"
                    onClick={handleEditCookie}
                  >
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    color="error"
                    onClick={handleDeleteCookie}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CInfoCookieDialog
        openInfoCookieDialog={openInfoCookieDialog}
        handleCloseInfoCookieDialog={handleCloseInfoCookieDialog}
      />
      <CEditCookieDialog
        openEditCookieDialog={openEditCookieDialog}
        handleCloseEditCookieDialog={handleCloseEditCookieDialog}
      />
      <CDeleteCookieDialog
        openDeleteCookieDialog={openDeleteCookieDialog}
        handleCloseDeleteCookieDialog={handleCloseDeleteCookieDialog}
      />
    </>
  );
};

CookieTable.propTypes = {
  cookies: PropTypes.array,
};
