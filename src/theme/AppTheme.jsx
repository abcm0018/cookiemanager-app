import { ThemeProvider } from "@emotion/react";
import { authTheme } from "./authTheme";
import { CssBaseline } from "@mui/material";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={authTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
