import React from "react";
import logo from "./logo.svg";
import Cards from "./Cards";
import { CssBaseline, Typography, Grid } from "@mui/material";
import PrimarySearchAppBar from "./PrimarySearchBar";
import { createTheme, ThemeProvider, colors } from "@mui/material";
import Size from "./Size";

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
          <Grid container spacing={2}>
            <Grid item xs={2.5} sx={{ backgroundColor: "grey" }}>
              <Size />
            </Grid>
            <Grid item xs={9.5}>
              <Cards />
            </Grid>
          </Grid>
          <Typography variant="h1">RHS</Typography>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
