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
} from "@mui/material";
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
      {
        <Card sx={{ padding: "15px", display: "flex" }}>
          <CardMedia
            component="img"
            image={image}
            alt="clothes"
            sx={{ maxWidth: "70px", display: "flex" }}
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
      }
      <Box sx={{ position: "absolute", bottom: "0px" }}>
        <Typography color="secondary">Subtotal</Typography>
        <Typography color="secondary">$116.65</Typography>
        <Typography color="secondary">Or up to 12 x $9.72</Typography>
        <Typography color="secondary">{quantity}</Typography>
        <Button size="large" sx={{ width: "100%" }}>
          Checkout
        </Button>
      </Box>
    </div>
  );
}
