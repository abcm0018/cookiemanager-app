import { EmojiFlags } from "@mui/icons-material";
import { Card, CardContent, Typography } from "@mui/material";

export const FeatureCard = ({ title = "", description = "" }) => {
  return (
    <Card sx={{ minWidth: 275, width: 350, mr: 40 }}>
      <CardContent>
        <EmojiFlags sx={{ fontSize: 50, color: "secondary.main", ml: 15 }} />
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mt: 3, fontSize: "16 px" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
