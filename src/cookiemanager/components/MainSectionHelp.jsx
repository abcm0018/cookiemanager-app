import { Box, Container, Divider, Grid2 } from "@mui/material";
import { HeadSectionHelp } from "./HeadSectionHelp";
import { Introducción } from "./Introducción";
import { Autenticacion } from "./Autenticacion";
import { Cuenta } from "./Cuenta";
import { Dominios } from "./Dominios";
import { Implementacion } from "./Implementacion";
import { Cookies } from "./Cookies";
import { Escaneos } from "./Escaneos";
import { Banner } from "./Banner";
import { Informes } from "./Informes";

export const MainSectionHelp = () => {
  return (
    <>
      <HeadSectionHelp />
      <Grid2
        container
        direction="column"
        sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
      >
        <Container>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              boxShadow: 3,
            }}
          >
            <Grid2 container sx={{ pb: 10, pt: 4, pl: 8, pr: 8 }}>
              <Introducción />
              <Divider sx={{ my: 3, width: "100%", bgcolor: "black" }} />
              <Autenticacion />
              <Divider sx={{ my: 3, width: "100%", bgcolor: "black" }} />
              <Cuenta />
              <Divider sx={{ my: 3, width: "100%", bgcolor: "black" }} />
              <Dominios />
              <Divider sx={{ my: 3, width: "100%", bgcolor: "black" }} />
              <Implementacion />
              <Divider sx={{ my: 3, width: "100%", bgcolor: "black" }} />
              <Cookies />
              <Divider sx={{ my: 3, width: "100%", bgcolor: "black" }} />
              <Escaneos />
              <Divider sx={{ my: 3, width: "100%", bgcolor: "black" }} />
              <Banner />
              <Divider sx={{ my: 3, width: "100%", bgcolor: "black" }} />
              <Informes />
            </Grid2>
          </Box>
        </Container>
      </Grid2>
    </>
  );
};
