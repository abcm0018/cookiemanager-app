import { Box, Grid2, Paper, TableContainer } from "@mui/material";
import { NavBarAdmin } from "../components/NavBarAdmin";
import { HeadSectionTableUser } from "../components/HeadSectionTableUser";
import { Footer } from "../components/Footer";
import { UserTable } from "../components/UserTable";

export const UsersPage = () => {
  function createData(nombre, apellidos, email, compañia, suscripcion) {
    return {
      nombre,
      apellidos,
      email,
      compañia,
      suscripcion,
    };
  }
  const users = [
    createData(
      "Jane",
      "Smith",
      "janesmith@example.com",
      "Innovatech S.L.",
      "Basic"
    ),
    createData(
      "John",
      "Doe",
      "johndoe@example.com",
      "Tech Solutions S.L.",
      "Business"
    ),
  ];

  return (
    <>
      <NavBarAdmin />
      <HeadSectionTableUser />
      <Grid2
        container
        sx={{
          pb: 5,
          pt: 4,
          pl: 10,
          pr: 10,
          display: "flex",
          justifyContent: "center",
        }}
        bgcolor="#F5F7F8"
      >
        <Box sx={{ width: "100%", maxWidth: 1080 }}>
          <Box component="div">
            <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
              <UserTable users={users} />
            </TableContainer>
          </Box>
        </Box>
      </Grid2>
      <Footer />
    </>
  );
};
