import React, { useState } from "react";
import logo from "./logo.svg";
import Cards from "./Cards";
import { CssBaseline, Typography, Grid } from "@mui/material";
import PrimarySearchAppBar from "./PrimarySearchBar";
import { createTheme, ThemeProvider, colors } from "@mui/material";
import Size from "./Size";
import { Data } from "./interfaces";
import { convertToObject } from "typescript";

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
      price: 10.9,
      deal: "9 x$1.21",
      shipping: true,
      size: "XS",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "Mark Zuck have 365 of this",
    },
    {
      name: "Basic Cactus White T-shirt",
      id: 2,
      priceDollars: 13,
      priceCents: 25,
      price: 13.25,
      deal: "3 x$4.42",
      shipping: true,
      size: "S",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "Really cool Shirt",
    },
    {
      name: "Skater Black Sweatshirt",
      id: 3,
      priceDollars: 25,
      priceCents: 90,
      price: 25.9,
      deal: "12 x$2.16",
      shipping: false,
      size: "M",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "Wine",
    },
    {
      name: "Black Tule Oversized",
      id: 4,
      priceDollars: 29,
      priceCents: 45,
      price: 29.45,
      deal: "5 x$5.89",
      shipping: true,
      size: "L",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "black shirt",
    },
    {
      name: "Black Batman T-shirt",
      id: 5,
      priceDollars: 10,
      priceCents: 90,
      price: 10.9,
      deal: "9 x$1.21",
      shipping: true,
      size: "XL",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "Batman is great",
    },
    {
      name: "Blue T-Shirt",
      id: 6,
      priceDollars: 9,
      priceCents: 0,
      price: 9.0,
      deal: "3 x$3.00",
      shipping: false,
      size: "XXL",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "blue shirt",
    },
    {
      name: "Loose Black T-shirt",
      id: 7,
      priceDollars: 14,
      priceCents: 0,
      price: 14,
      deal: "5 x$2.80",
      shipping: true,
      size: "XS",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "blue shirt",
    },
    {
      name: "Ringer Hall Pass",
      id: 8,
      priceDollars: 10,
      priceCents: 90,
      price: 10.9,
      deal: "9 x$1.21",
      shipping: false,
      size: "M",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "",
    },
    {
      name: "Grey T-shirt",
      id: 9,
      priceDollars: 14,
      priceCents: 90,
      price: 14.9,
      deal: "7 x$2.13",
      shipping: false,
      size: "L",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "",
    },
    {
      name: "Black T-shirt with white stripes",
      id: 10,
      priceDollars: 14,
      priceCents: 90,
      price: 14.9,
      deal: "7 x$2.13",
      shipping: false,
      size: "M",
      img: "./images/purplejacket.jpg",
      quantity: 0,
      quote: "",
    },
  ]);
  const [tempDrawer, setTempDrawer] = useState<boolean>(false);
  const [subtotal, setSubtotal] = useState(0);

  function onAddCart(id: number) {
    //opens the drawer adds the new quantity
    const newData = data.map((dataItem) =>
      dataItem.id === id
        ? { ...dataItem, quantity: dataItem.quantity + 1 }
        : { ...dataItem }
    );
    setData(newData);
    if (tempDrawer === false) {
      setTempDrawer(true);
    }
  }
  function handleTempDrawer(bool: boolean) {
    setTempDrawer(bool);
  }
  function changeQuant(id: number, version: string) {
    let newData: Data[] = [];
    if (version === "increment") {
      newData = data.map((dataItem) =>
        dataItem.id === id
          ? { ...dataItem, quantity: dataItem.quantity + 1 }
          : { ...dataItem }
      );
    } else if (version === "decrement") {
      newData = data.map((dataItem) =>
        dataItem.id === id
          ? { ...dataItem, quantity: dataItem.quantity - 1 }
          : { ...dataItem }
      );
    } else if (version === "close") {
      newData = data.map((dataItem) =>
        dataItem.id === id ? { ...dataItem, quantity: 0 } : { ...dataItem }
      );
    }

    setData(newData);
  }
  function importVals() {
    const totalQuant = data
      .map((dataItem) => dataItem.quantity)
      .reduce((partialSum, a) => partialSum + a, 0);
    const totalValue = parseFloat(
      data
        .map((dataItem) => dataItem.quantity * dataItem.price)
        .reduce((partialSum, a) => partialSum + a, 0)
        .toFixed(2)
    );
    const totalAverageValue = parseFloat(
      (
        data
          .map((dataItem) => dataItem.quantity * dataItem.price)
          .reduce((partialSum, a) => partialSum + a, 0) / totalQuant
      ).toFixed(2)
    );
    return [totalQuant, totalValue, totalAverageValue];
  }
  importVals();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <PrimarySearchAppBar
            handleTempDrawer={handleTempDrawer}
            tempDrawer={tempDrawer}
            data={data}
            changeQuant={changeQuant}
            importVals={importVals}
          />
          <Grid container spacing={2} sx={{ paddingTop: "85px" }}>
            <Grid item xs={3}>
              <Size />
            </Grid>
            <Grid item xs={9}>
              <Cards data={data} onAddCart={onAddCart} />
            </Grid>
          </Grid>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
