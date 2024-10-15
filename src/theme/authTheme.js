import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const authTheme = createTheme({
  palette: {
    primary: {
      main: "#3F3A3A",
      light: "#FAFAFA",
    },
    secondary: {
      main: "#007AFF",
    },
    error: {
      main: red.A400,
    },
  },
});
