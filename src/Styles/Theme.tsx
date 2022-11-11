import { createTheme, ThemeOptions } from "@mui/material";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#f9c712",
    },
    secondary: {
      main: "#303030",
    },
  },
  shape: {
    borderRadius: 10,
  },
});
