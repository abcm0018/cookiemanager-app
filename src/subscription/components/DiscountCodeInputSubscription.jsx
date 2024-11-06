import { Box, Button, Grid2, InputBase, Typography } from "@mui/material";

export const DiscountCodeInputSubscription = () => {
  return (
    <Grid2
      xs={12}
      sm="auto"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        mt: { xs: 2, sm: 0 },
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        Código de descuento:
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputBase
          sx={{
            border: "1px solid #ccc",
            padding: "4px 12px",
            width: "150px",
          }}
          placeholder="Descuento"
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            borderRadius: "0 4px 4px 0",
            paddingX: 2,
            height: "41px",
            minWidth: "32px",
          }}
        >
          Aplicar
        </Button>
      </Box>
    </Grid2>
  );
};
