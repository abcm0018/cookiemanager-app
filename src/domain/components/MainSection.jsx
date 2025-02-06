import {
  Box,
  Container,
  Grid2,
  Paper,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { DomainTable } from "./DomainTable";
import { HeadSection } from "./HeadSection";
import { useEffect, useState } from "react";
import { useDomainStore } from "../../hooks";
import { Loader } from "./Loader";

export const MainSection = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDomains, setFilteredDomains] = useState([]);

  const { domains, isLoadingDomains, startLoadingDomains } = useDomainStore();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    startLoadingDomains();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      // Si no hay término de búsqueda, mostrar todos los dominios
      setFilteredDomains(domains);
    } else {
      // Filtrar dominios según el término de búsqueda
      const filtered = domains.filter((domain) =>
        domain.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredDomains(filtered);
    }
  }, [searchTerm, domains]);

  if (isLoadingDomains) {
    return <Loader />;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Búsqueda enviada:", searchTerm);
  };

  return (
    <Grid2
      container
      direction="column"
      sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
    >
      <Container>
        <Box>
          <HeadSection
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
          />
        </Box>
        <Box sx={{ mt: 5 }}>
          <TableContainer component={Paper}>
            <DomainTable
              domains={filteredDomains.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )}
              user={user}
            />
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={domains.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Filas por página:"
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`
            }
          />
        </Box>
      </Container>
    </Grid2>
  );
};
