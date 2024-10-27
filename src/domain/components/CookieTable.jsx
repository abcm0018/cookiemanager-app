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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const CookieTable = ({ cookies = [] }) => {
  return (
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
              <IconButton aria-label="edit" size="small" color="primary">
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" size="small" color="error">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

CookieTable.propTypes = {
  cookies: PropTypes.array,
};
