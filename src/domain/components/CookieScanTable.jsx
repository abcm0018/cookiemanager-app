import PropTypes from "prop-types";
import { Button, TableCell, TableRow, Typography } from "@mui/material";
import { TableLayout } from "../layout/TableLayout";

export const CookieScanTable = ({ scans = [], onDetailClick }) => {
  const headers = [
    "Estado",
    "Cookies",
    "Fecha creación",
    "Fecha modificación",
    "Último escaneo",
    "Acción",
  ];

  return (
    <TableLayout headers={headers}>
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
    </TableLayout>
  );
};

CookieScanTable.propType = {
  scans: PropTypes.array.isRequired,
  onDetailClick: PropTypes.func.isRequired,
};
