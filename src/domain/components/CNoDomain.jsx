import { Typography, Card, CardContent, Box } from "@mui/material";
import DomainDisabledIcon from "@mui/icons-material/DomainDisabled";

export const CNoDomain = () => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: "auto",
        mt: 5,
        textAlign: "center",
        padding: 2,
        boxShadow: 3,
        borderRadius: 3,
        backgroundColor: "white",
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="center" mb={2}>
          <DomainDisabledIcon color="action" sx={{ fontSize: 50 }} />
        </Box>
        <Typography variant="h6" gutterBottom>
          Aún no tienes dominios registrados
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Haz clic en <strong>Añadir dominio</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};
