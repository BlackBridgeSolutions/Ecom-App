import React from "react";
import logo from "./logo.svg";
import Cards from "./Cards";
import { CssBaseline, Typography } from "@mui/material";
import PrimarySearchAppBar from "./PrimarySearchBar";
import { createTheme, ThemeProvider, colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
    warning: {
      main: "#EABF02",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <PrimarySearchAppBar />
          <Typography variant="h1">LHS</Typography>
          <Cards />
          <Typography variant="h1">RHS</Typography>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
