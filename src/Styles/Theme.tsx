import { createTheme, ThemeOptions } from "@mui/material";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#f9c712",
    },
    secondary: {
      main: "#303030",
      dark: "#242424",
      light: "#f6f6f6",
    },
    action: {
      selected: "#f9c712",
      selectedOpacity: 0.88,
    },
  },
  typography: {
    h5: {
      fontWeight: 600,
      fontSize: "1.6rem",
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#303030",
          color: "white",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          py: 0,
          "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#242424",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          py: 0,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
});
