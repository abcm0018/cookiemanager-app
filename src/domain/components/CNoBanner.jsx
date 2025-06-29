import { Box, Card, CardContent, Typography } from "@mui/material";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";

export const CNoBanner = () => {
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
          <PrivacyTipIcon color="action" sx={{ fontSize: 50 }} />
        </Box>
        <Typography variant="h6" gutterBottom>
          Aún no has creado ningún banner de consentimiento
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Para crear uno, ve a la pestaña <strong>Ver detalles</strong> y pulsa
          el botón <strong>Crear banner</strong> en la tarjeta correspondiente.
        </Typography>
      </CardContent>
    </Card>
  );
};
