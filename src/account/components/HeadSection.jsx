import { Box, Button, Container, Grid2 } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { CEditUserDialog } from "./CEditUserDialog";
import { useState } from "react";

export const HeadSection = () => {
  const [openEditUserDialog, setOpenEditUserDialog] = useState(false);

  const handleOpenEditUser = () => {
    console.log("Abriendo el dialogo para añadir dominio");
    setOpenEditUserDialog(true);
  };

  const handleCloseEditUserDialog = () => {
    console.log("Cerrando dialogo de añadir dominio");
    setOpenEditUserDialog(false);
  };

  return (
    <>
      <Grid2
        container
        direction="column"
        sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
      >
        <Container>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button size="small" startIcon={<ArrowBack />} href="/domains">
              Perfil | Jane Smith
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "secondary.main" }}
              onClick={handleOpenEditUser}
            >
              Editar perfil
            </Button>
          </Box>
          <CEditUserDialog
            openEditUserDialog={openEditUserDialog}
            handleCloseEditUserDialog={handleCloseEditUserDialog}
          />
        </Container>
      </Grid2>
    </>
  );
};
