import { Box, Card, CardContent, Typography } from "@mui/material";
import FindInPageIcon from "@mui/icons-material/FindInPage";

export const CNoCookieScan = () => {
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
          <FindInPageIcon color="action" sx={{ fontSize: 50 }} />
        </Box>
        <Typography variant="h6" gutterBottom>
          Aún no has realizado ningún escaneo ni carga de cookies
        </Typography>
      </CardContent>
    </Card>
  );
};
