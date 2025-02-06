import PropTypes from "prop-types";
import {
  Box,
  Chip,
  IconButton,
  Stack,
  TableCell,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { CEditCookieDialog } from "./CEditCookieDialog";
import React, { useState } from "react";
import { CInfoCookieDialog } from "./CInfoCookieDialog";
import { TableLayout } from "../layout/TableLayout";
import Swal from "sweetalert2";
import { useCookieStore } from "../../hooks/useCookieStore";
import { CSearchCookieDialog } from "./CSearchCookieDialog";

export const CookieTable = ({ cookies = [] }) => {
  const headers = [
    { id: "name", label: "Nombre" },
    { id: "category", label: "Categoría" },
    { id: "provider", label: "Proveedor" },
    { id: "duration", label: "Duración" },
    { id: "etiquetas", label: "Etiquetas" },
    { id: "action", label: "Acción" },
  ];

  const { startDeletingCookie } = useCookieStore();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const [filteredCookies, setFilteredCookies] = useState(cookies);

  const [openEditCookieDialog, setOpenEditCookieDialog] = useState(false);
  const [openInfoCookieDialog, setOpenInfoCookieDialog] = useState(false);
  const [openFilterCookieDialog, setOpenFilterCookieDialog] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedCookies = React.useMemo(() => {
    return filteredCookies.slice().sort((a, b) => {
      if (b[orderBy] < a[orderBy]) {
        return order === "asc" ? -1 : 1;
      }
      if (b[orderBy] > a[orderBy]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredCookies, order, orderBy]);

  // Hook con la información de la cookie a editar
  const [cookieToEdit, setCookieToEdit] = useState({});

  // Hook con la de informacion la cookie a editar
  const [cookieInfo, setCookieInfo] = useState({});

  // Establecemos la cookie a editar
  const handleOpenEditCookie = (cookie) => {
    setOpenEditCookieDialog(true);
    setCookieToEdit(cookie);
  };

  const handleCloseEditCookieDialog = () => {
    setOpenEditCookieDialog(false);
  };

  const handleInfoCookie = (cookie) => {
    setCookieInfo(cookie);
    console.log("Abriendo el dialogo para ver detalles de la cookie");
    setOpenInfoCookieDialog(true);
  };

  const handleCloseInfoCookieDialog = () => {
    console.log("Cerrando dialogo de ver detalles de la cookie");
    setOpenInfoCookieDialog(false);
  };

  const handleFilterCookie = () => {
    console.log("Abriendo el dialogo para el filtrado de la cookie");
    setOpenFilterCookieDialog(true);
  };

  const handleCloseFilterCookieDialog = () => {
    console.log("Cerrando dialogo para el filtrado de la cookie");
    setOpenFilterCookieDialog(false);
  };

  const handleDeleteCookie = (cookieId) => {
    Swal.fire({
      title: "Estás a punto de eliminar una cookie, ¿Estás seguro?",
      text: "Esta acción no podrá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeletingCookie(cookieId);
        Swal.fire({
          title: "Cookie Eliminada",
          text: "La cookie se ha sido eliminado correctamente.",
          icon: "success",
        });
      }
    });
  };

  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flex: "1 1 100%",
            fontWeight: "bold",
            fontSize: "1.25rem",
          }}
        >
          Lista de cookies
        </Typography>
        <IconButton sx={{ color: "black" }}>
          <FilterListIcon onClick={() => handleFilterCookie()} />
        </IconButton>
      </Toolbar>

      <TableLayout
        headers={headers}
        order={order}
        orderBy={orderBy}
        handleRequestSort={handleRequestSort}
      >
        {sortedCookies
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((cookie) => {
            const {
              id,
              name,
              category,
              //type,
              provider,
              duration,
              samesite,
              secure,
              httpOnly,
            } = cookie;

            const etiquetas = [
              { id: 1, nombre: `${samesite}`, color: "#2196f3" },
            ];

            if (secure)
              etiquetas.push({ id: 2, nombre: "Secure", color: "#4caf50" });
            if (httpOnly)
              etiquetas.push({
                id: 3,
                nombre: "httpOnly",
                color: "#ff9800",
              });

            return (
              <TableRow
                key={id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    pl: 2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  padding="none"
                >
                  <Typography variant="body1">{name}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    pl: 2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  padding="none"
                >
                  <Typography variant="body1">{category}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    pl: 2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  padding="none"
                >
                  <Typography variant="body1">{provider}</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    pl: 2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  padding="none"
                >
                  <Typography variant="body1">{duration}</Typography>
                </TableCell>
                <TableCell sx={{ pl: 2 }} padding="none">
                  <Stack direction="row" spacing={1}>
                    {etiquetas.map((etiqueta) => (
                      <Box key={etiqueta.id} disablePadding dense>
                        <Chip
                          label={etiqueta.nombre}
                          size="small"
                          sx={{
                            backgroundColor: etiqueta.color,
                            color: "#fff",
                            whiteSpace: "nowrap",
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </TableCell>
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Stack direction="row" spacing={1}>
                    <IconButton
                      aria-label="info"
                      size="small"
                      color="secondary"
                      onClick={() => handleInfoCookie(cookie)}
                    >
                      <InfoIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      aria-label="edit"
                      size="small"
                      color="primary"
                      onClick={() => handleOpenEditCookie(cookie)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      size="small"
                      color="error"
                      onClick={() => handleDeleteCookie(cookie.id)}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
      </TableLayout>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredCookies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Filas por página:"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`
        }
      />
      <CSearchCookieDialog
        cookies={cookies}
        openFilterCookieDialog={openFilterCookieDialog}
        handleCloseFilterCookieDialog={handleCloseFilterCookieDialog}
        setFilteredCookies={setFilteredCookies}
      />
      <CInfoCookieDialog
        openInfoCookieDialog={openInfoCookieDialog}
        handleCloseInfoCookieDialog={handleCloseInfoCookieDialog}
        cookie={cookieInfo}
      />
      <CEditCookieDialog
        openEditCookieDialog={openEditCookieDialog}
        handleCloseEditCookieDialog={handleCloseEditCookieDialog}
        cookie={cookieToEdit}
      />
    </Box>
  );
};

CookieTable.propTypes = {
  cookies: PropTypes.array,
};
