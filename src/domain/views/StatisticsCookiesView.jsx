import { Grid2 } from "@mui/material";
import { StatisticsForm } from "../components/StatisticsForm";

export const StatisticsCookiesView = () => {
  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 14, mr: 14 }}>
      <StatisticsForm />
    </Grid2>
  );
};
