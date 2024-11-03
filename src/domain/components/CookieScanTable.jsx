import PropTypes from "prop-types";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const CookieScanTable = ({ scans = [], onDetailClick }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Estado</TableCell>
          <TableCell>Cookies</TableCell>
          <TableCell>Fecha creación</TableCell>
          <TableCell>Fecha modificación</TableCell>
          <TableCell>Último escaneo</TableCell>
          <TableCell>Acción</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {scans.map((scan) => (
          <TableRow
            key={scan.codigo}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Typography variant="body1">{scan.estado}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{scan.totalCookies}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{scan.fechaCreacion}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{scan.fechaModificacion}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{scan.ultimoEscaneo}</Typography>
            </TableCell>
            <TableCell>
              <Button
                variant="text"
                onClick={onDetailClick}
                sx={{
                  "&:hover": {
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Detalles
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

CookieScanTable.propType = {
  scans: PropTypes.array.isRequired,
  onDetailClick: PropTypes.func.isRequired,
};
