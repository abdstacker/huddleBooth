import React from "react";
import "./App.css";
import { Navigation } from "./App/Routes/Navigation";
import { theme } from "./Styles/Theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation></Navigation>
    </ThemeProvider>
  );
}

export default App;
