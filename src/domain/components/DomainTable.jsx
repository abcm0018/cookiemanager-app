import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { CEditDomainDialog } from "./CEditDomainDialog";
import { TableLayout } from "../layout/TableLayout";
import { useDomainStore } from "../../hooks";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const DomainTable = ({ domains = [] }) => {
  const headers = ["Código", "Nombre", "totalCookies", "Operación"];

  const [openEditDomainDialog, setOpenEditDomainDialog] = useState(false);

  const { startDeletingDomain, errorMessage } = useDomainStore();

  // Hook con el la información del dominio a editar
  const [domainToEdit, setDomainToEdit] = useState({});

  // Establecemos el dominio a editar
  const handleOpenEditDomain = (domain) => {
    setOpenEditDomainDialog(true);
    setDomainToEdit(domain);
  };

  const handleCloseEditDomainDialog = () => {
    setOpenEditDomainDialog(false);
  };

  // Se usará para mostrar los datos del usuario
  // console.log("Usauario logeado: ", user);

  const handleDeleteDomain = (domainId) => {
    Swal.fire({
      title: "Estás a punto de eliminar un dominio, ¿Estás seguro?",
      text: "Esta acción no podrá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeletingDomain(domainId);
        Swal.fire({
          title: "Domininio Eliminado",
          text: "El dominio ha sido eliminado correctamente.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error al eliminar el dominio", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <Box>
      <TableLayout headers={headers}>
        {domains.map((domain) => (
          <TableRow
            key={domain.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Typography variant="body1">{domain.id}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{domain.name}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{domain.totalCookies}</Typography>
            </TableCell>
            <TableCell>
              <ButtonGroup variant="text" aria-label="Basic button group">
                <Button
                  variant="text"
                  sx={{
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "white",
                    },
                  }}
                >
                  <Link to={`/domains/${domain.id}`}>Ver detalles</Link>
                </Button>
                <Button
                  onClick={() => handleOpenEditDomain(domain)}
                  variant="text"
                  sx={{
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "white",
                    },
                  }}
                >
                  Editar
                </Button>
                <Button
                  variant="text"
                  color="error"
                  onClick={() => handleDeleteDomain(domain.id)}
                >
                  Eliminar
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableLayout>
      <CEditDomainDialog
        openEditDomainDialog={openEditDomainDialog}
        handleCloseEditDomainDialog={handleCloseEditDomainDialog}
        domainToEdit={domainToEdit}
      />
    </Box>
  );
};

DomainTable.propTypes = {
  domains: PropTypes.array,
  user: PropTypes.object,
};
