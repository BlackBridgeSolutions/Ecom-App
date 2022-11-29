import React, { useState } from "react";
import Cards from "./Cards";
import { CssBaseline, Grid } from "@mui/material";
import PrimarySearchAppBar from "./PrimarySearchBar";
import { createTheme, ThemeProvider } from "@mui/material";
import Size from "./Size";
import { Data, FilteredSizes } from "./interfaces";

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
  const rawData: Data[] = [
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
  ];
  const [data, setData] = useState<Data[]>(rawData);
  const [tempDrawer, setTempDrawer] = useState<boolean>(false);
  const [filteredSizes, setFilteredSizes] = useState<
    { name: string; value: boolean }[]
  >([
    {
      name: "XS",
      value: false,
    },
    {
      name: "S",
      value: false,
    },
    {
      name: "M",
      value: false,
    },
    {
      name: "L",
      value: false,
    },
    {
      name: "XL",
      value: false,
    },
    {
      name: "XXL",
      value: false,
    },
  ]);

  function onAddCart(id: number): void {
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
  function handleTempDrawer(bool: boolean): void {
    setTempDrawer(bool);
  }
  function changeQuant(id: number, version: string): void {
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
  function filterSize(sizeAction: string): void {
    const sizeFilteredData = filteredSizes.map((size) =>
      size.name === sizeAction ? { ...size, value: !size.value } : { ...size }
    );
    if (Object.values(sizeFilteredData).every((size) => size.value === false)) {
      setData(rawData);
      return;
    }

    setFilteredSizes(sizeFilteredData);
    // console.log(sizeFilteredData, "qwerty");

    function organiseFilter(filteredSizes: FilteredSizes[]): void {
      const filteredRawData = [];
      for (let i = 0; i < filteredSizes.length; i++) {
        if (filteredSizes[i].value === true) {
          let tempArray = rawData.filter(
            (rawDataItem) => rawDataItem.size === filteredSizes[i].name
          );
          for (let j = 0; j < tempArray.length; j++) {
            filteredRawData.push(tempArray[j]);
          }
        }
      }
      console.log(filteredRawData, "filteredRawData");
      setData(filteredRawData);
    }
    organiseFilter(sizeFilteredData);
  }
  function importVals(): number[] {
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
              <Size filterSize={filterSize} />
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
