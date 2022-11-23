import React from "react";
import "./App.css";
import { Navigation } from "./App/Routes/Navigation";
import { theme } from "./Styles/Theme";
import { ThemeProvider } from "@mui/material";
import { AdminProvider } from "./App/Providers/AdminProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AdminProvider>
        <Navigation></Navigation>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;
