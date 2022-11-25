import React from "react";
import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  ButtonGroup,
  Grid,
} from "@mui/material";
import { spacing } from "@mui/system";
import image from "./images/purplejacket.jpg";

export default function Cart() {
  const [quantity, setQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  function increment() {
    let newQuantity: number = quantity + 1;
    setQuantity(newQuantity);
  }
  function decrement() {
    if (quantity > 1) {
      let newQuantity: number = quantity - 1;
      setQuantity(newQuantity);
    }
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "200px",
        }}
      >
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Card sx={{ padding: "15px", display: "flex", width: "450px" }}>
            <CardMedia
              component="img"
              image={image}
              alt="clothes"
              sx={{ maxWidth: "100px", display: "flex" }}
            />
            <Box>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography variant="h6" color="primary">
                  Cropped Stay Groovy off white
                </Typography>
                <Typography>X | Wine</Typography>
                <Typography>Quantity: 1</Typography>
              </CardContent>
            </Box>
            <Box sx={{ display: "block", flexDirection: "row" }}>
              <CardContent>
                <Button>x</Button>
                <Typography>$50.23</Typography>
                <ButtonGroup>
                  <Button onClick={decrement}>-</Button>
                  <Button onClick={increment}>+</Button>
                </ButtonGroup>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: "0px",
          backgroundColor: "#232129",
        }}
      >
        <Grid container xs={12} sx={{ margin: "40px 0 10px 0" }}>
          <Grid item xs={6}>
            <Typography color="secondary" sx={{ paddingLeft: "30px" }}>
              SUBTOTAL
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h5"
              color="warning.main"
              sx={{ float: "right", paddingRight: "30px" }}
            >
              $116.65
            </Typography>
            <Typography
              color="secondary"
              sx={{ display: "block", float: "right", paddingRight: "30px" }}
            >
              OR UP TO 12 x $9.72
            </Typography>
          </Grid>
        </Grid>

        {/* <Typography color="secondary">{quantity}</Typography> */}
        <Button
          size="large"
          sx={{
            width: "410px",
            backgroundColor: "#1b1a20",
            margin: "25px 20px",
          }}
          color="secondary"
        >
          Checkout
        </Button>
      </Box>
    </div>
  );
}
