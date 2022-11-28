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
  Divider,
  IconButton,
} from "@mui/material";
import image from "./images/purplejacket.jpg";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
  const dividerDiv = (
    <Divider
      sx={{ textAlign: "center", marginLeft: "90%", marginRight: "10%" }}
    />
  );

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
          <div>
            {dividerDiv}
            <Card
              sx={{
                padding: "15px 15px",
                display: "flex",
                width: "450px",
                backgroundColor: "#1B1A20",
                color: "#FFFFFF",
              }}
            >
              <Divider />
              <CardMedia
                component="img"
                image={image}
                alt="clothes"
                sx={{ maxWidth: "100px", display: "flex" }}
              />
              <Box>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    variant="h6"
                    color="secondary"
                    sx={{ fontSize: "16px", lineHeight: 1.3 }}
                  >
                    Cropped Stay Groovy off white
                  </Typography>
                  <Typography color="#5B5A5E" sx={{ lineHeight: 1 }}>
                    X | Wine
                  </Typography>
                  <Typography color="#5B5A5E">Quantity: 1</Typography>
                </CardContent>
              </Box>
              <Box>
                <CardContent
                  sx={{
                    padding: "0px 15px",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton
                    sx={{
                      padding: "0px 15px",
                      // marginLeft: "50%",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{
                      margin: "10px",
                      justifyContent: "flex-end",
                    }}
                    color="#EABF02"
                  >
                    $50.23
                  </Typography>
                  <ButtonGroup>
                    <Button
                      fullWidth={true}
                      sx={{
                        padding: "0px",
                        margin: "0px",
                        backgroundColor: "black",
                        maxWidth: "25px",
                        height: "25px",
                      }}
                      onClick={decrement}
                    >
                      <IconButton
                        sx={{
                          padding: "0px 0px",
                          // marginLeft: "50%",
                        }}
                      >
                        <RemoveIcon color="secondary" />
                      </IconButton>
                    </Button>
                    <Button
                      fullWidth={true}
                      sx={{
                        padding: "0px",
                        margin: "0px",
                        backgroundColor: "black",
                        maxWidth: "25px",
                        height: "25px",
                      }}
                      onClick={decrement}
                    >
                      <IconButton
                        sx={{
                          padding: "0px 0px",
                          // marginLeft: "50%",
                        }}
                      >
                        <AddIcon color="secondary" />
                      </IconButton>
                    </Button>
                  </ButtonGroup>
                </CardContent>
              </Box>
            </Card>
          </div>
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
            <Typography
              color="secondary"
              sx={{ paddingLeft: "30px", color: "#5B5A5E", fontSize: "16px" }}
            >
              SUBTOTAL
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h5"
              color="warning.main"
              sx={{ float: "right", paddingRight: "30px", fontSize: "22px" }}
            >
              $116.65
            </Typography>
            <Typography
              sx={{
                display: "block",
                float: "right",
                paddingRight: "30px",
                color: "#5B5A5E",
                fontSize: "16px",
              }}
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
