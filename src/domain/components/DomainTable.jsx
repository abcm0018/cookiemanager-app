import PropTypes from "prop-types";
import {
  Box,
  Button,
  ButtonGroup,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CEditDomainDialog } from "./CEditDomainDialog";
import { CDeleteDomainDialog } from "./CDeleteDomainDialog";
import { TableLayout } from "../layout/TableLayout";

export const DomainTable = ({ dominios = [] }) => {
  const headers = ["Código", "Nombre", "totalCookies", "Operación"];

  const [openEditDomainDialog, setOpenEditDomainDialog] = useState(false);
  const [openDeleteDomainDialog, setOpenDeleteDomainDialog] = useState(false);

  const handleEditDomain = () => {
    console.log("Abriendo el dialogo para editar dominio");
    setOpenEditDomainDialog(true);
  };

  const handleDeleteDomain = () => {
    console.log("Abriendo el dialogo para editar dominio");
    setOpenDeleteDomainDialog(true);
  };

  const handleCloseEditDomainDialog = () => {
    console.log("Cerrando dialogo de editar dominio");
    setOpenEditDomainDialog(false);
  };

  const handleCloseDeleteDomainDialog = () => {
    console.log("Cerrando dialogo de editar dominio");
    setOpenDeleteDomainDialog(false);
  };

  return (
    <Box>
      <TableLayout headers={headers}>
        {dominios.map((dominio) => (
          <TableRow
            key={dominio.codigo}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Typography variant="body1">{dominio.codigo}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{dominio.nombre}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{dominio.totalCookies}</Typography>
            </TableCell>
            <TableCell>
              <ButtonGroup variant="text" aria-label="Basic button group">
                <Button
                  variant="text"
                  href="/domains/details"
                  sx={{
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "white",
                    },
                  }}
                >
                  Ver detalles
                </Button>
                <Button variant="text" onClick={handleEditDomain}>
                  Editar
                </Button>
                <Button
                  variant="text"
                  color="error"
                  onClick={handleDeleteDomain}
                >
                  Eliminar
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableLayout>
      <CEditDomainDialog
        domainName="marca.com"
        openEditDomainDialog={openEditDomainDialog}
        handleCloseEditDomainDialog={handleCloseEditDomainDialog}
      />
      <CDeleteDomainDialog
        domainName="marca.com"
        openDeleteDomainDialog={openDeleteDomainDialog}
        handleCloseDeleteDomainDialog={handleCloseDeleteDomainDialog}
      />
    </Box>
  );
};

DomainTable.propTypes = {
  dominios: PropTypes.array,
};
