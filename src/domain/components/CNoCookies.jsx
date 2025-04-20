import { Box, Card, CardContent, Typography } from "@mui/material";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";

export const CNoCookies = () => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "auto",
        mt: 5,
        textAlign: "center",
        alignContent: "center",
        padding: 2,
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: "white",
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="center" mb={2}>
          <CookieOutlinedIcon color="action" sx={{ fontSize: 50 }} />
        </Box>
        <Typography variant="h6" gutterBottom>
          No hay cookies cargadas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Aún no se han detectado ni cargado cookies tras el escaneo. Por favor,
          realiza un escaneo o carga manual de tus cookies.
        </Typography>
      </CardContent>
    </Card>
  );
};
