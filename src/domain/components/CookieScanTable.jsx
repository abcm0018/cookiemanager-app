import PropTypes from "prop-types";
import { Button, TableCell, TableRow, Typography } from "@mui/material";
import { TableLayout } from "../layout/TableLayout";
import dayjs from "dayjs";

export const CookieScanTable = ({ domain = {}, onDetailClick }) => {
  const headers = [
    { id: "progress", label: "Progreso" },
    { id: "cookies", label: "Cookies" },
    { id: "dateCreation", label: "Fecha creación" },
    { id: "dateModification", label: "Fecha modificación" },
    { id: "lastScan", label: "Último escaneo" },
    { id: "action", label: "Acción" },
  ];

  const ultimoEscaneo = dayjs(domain.lastCookieScan).format("DD/MM/YYYY");
  const fechaCreacion = dayjs(domain.dateCreation).format("DD/MM/YYYY");
  const fechaModificacion = dayjs(domain.dateModification).format("DD/MM/YYYY");

  return (
    <TableLayout headers={headers}>
      <TableRow
        key={domain.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Typography variant="body1">{domain.scanCookieProgress}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1">{domain.totalCookies}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1">{fechaCreacion}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1">{fechaModificacion}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="body1">{ultimoEscaneo}</Typography>
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
    </TableLayout>
  );
};

CookieScanTable.propTypes = {
  domain: PropTypes.object.isRequired,
  onDetailClick: PropTypes.func.isRequired,
};
