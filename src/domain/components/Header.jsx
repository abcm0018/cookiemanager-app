import {
  Box,
  Button,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Grid2
      container
      direction="column"
      sx={{ backgroundColor: "primary.light", padding: 5, height: "auto" }}
    >
      <Container>
        <Box
          sx={{
            maxWidth: "1200px", // Asegúrate de que sea el mismo ancho
            margin: "0 auto", // Centro el contenido
          }}
        >
          <Grid2
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid2 container alignItems="center" xs={8}>
              <Link to="/domain">
                <IconButton color="primary">
                  <ArrowBackIcon />
                </IconButton>
              </Link>
              <Typography
                variant="h5"
                align="left"
                sx={{
                  color: "primary.main",
                  fontStyle: "normal",
                  display: "inline-block",
                  marginLeft: 1,
                }}
              >
                marca.com
              </Typography>
            </Grid2>

            <Grid2>
              <Link to="/domain/modify-domain">
                <Button variant="contained" sx={{ bgcolor: "secondary.main" }}>
                  Editar dominio
                </Button>
              </Link>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Grid2>
  );
};
