import React, { useState } from "react";
import logo from "./logo.svg";
import Cards from "./Cards";
import { CssBaseline, Typography, Grid } from "@mui/material";
import PrimarySearchAppBar from "./PrimarySearchBar";
import { createTheme, ThemeProvider, colors } from "@mui/material";
import Size from "./Size";
import { Data } from "./interfaces";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B1A20",
    },
    secondary: {
      main: "#FFFFFF",
    },
    warning: {
      main: "#EABF02",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#1B1A20",
        },
      },
    },
  },
});

function App() {
  const [data, setData] = useState<Data[]>([
    {
      name: "Cropped Stay Groovy off white",
      id: 1,
      priceDollars: 10,
      priceCents: 90,
      deal: "9 x$1.21",
      shipping: true,
      size: "XS",
      img: "./images/purplejacket.jpg",
    },
    {
      name: "Basic Cactus White T-shirt",
      id: 2,
      priceDollars: 13,
      priceCents: 25,
      deal: "3 x$4.42",
      shipping: true,
      size: "S",
      img: "./images/purplejacket.jpg",
    },
    {
      name: "Skater Black Sweatshirt",
      id: 3,
      priceDollars: 25,
      priceCents: 90,
      deal: "12 x$2.16",
      shipping: false,
      size: "M",
      img: "./images/purplejacket.jpg",
    },
    {
      name: "Black Tule Oversized",
      id: 4,
      priceDollars: 29,
      priceCents: 45,
      deal: "5 x$5.89",
      shipping: true,
      size: "L",
      img: "./images/purplejacket.jpg",
    },
    {
      name: "Black Batman T-shirt",
      id: 5,
      priceDollars: 10,
      priceCents: 90,
      deal: "9 x$1.21",
      shipping: true,
      size: "XL",
      img: "./images/purplejacket.jpg",
    },
    {
      name: "Blue T-Shirt",
      id: 6,
      priceDollars: 9,
      priceCents: 0,
      deal: "3 x$3.00",
      shipping: false,
      size: "XXL",
      img: "./images/purplejacket.jpg",
    },
    {
      name: "Loose Black T-shirt",
      id: 7,
      priceDollars: 14,
      priceCents: 0,
      deal: "5 x$2.80",
      shipping: true,
      size: "XS",
      img: "./images/purplejacket.jpg",
    },
    {
      name: "Ringer Hall Pass",
      id: 8,
      priceDollars: 10,
      priceCents: 90,
      deal: "9 x$1.21",
      shipping: false,
      size: "M",
      img: "./images/purplejacket.jpg",
    },
    {
      name: "Grey T-shirt",
      id: 9,
      priceDollars: 14,
      priceCents: 90,
      deal: "7 x$2.13",
      shipping: false,
      size: "L",
      img: "./images/purplejacket.jpg",
    },
    {
      name: "Black T-shirt with white stripes",
      id: 10,
      priceDollars: 14,
      priceCents: 90,
      deal: "7 x$2.13",
      shipping: false,
      size: "M",
      img: "./images/purplejacket.jpg",
    },
  ]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <PrimarySearchAppBar /*handleClick={() => }*/ />
          <Grid container spacing={2} sx={{ paddingTop: "85px" }}>
            <Grid item xs={3}>
              <Size />
            </Grid>
            <Grid item xs={9}>
              <Cards data={data} />
            </Grid>
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
