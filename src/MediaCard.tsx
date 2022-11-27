import * as React from "react";
import { useState, MouseEvent } from "react";
import "./MediaCard.css";
import {
  Card,
  Grid,
  Button,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import image from "./images/purplejacket.jpg";

export default function MediaCard() {
  const dollarCost = (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: "center" }}
    >
      <Typography sx={{ fontSize: "12.8px", display: "inline" }}>$</Typography>
      <Typography
        sx={{ fontSize: "24px", display: "inline", fontWeight: "bold" }}
      >
        10
      </Typography>
      <Typography sx={{ fontSize: "16px", display: "inline" }}>.90</Typography>
      <Typography sx={{ fontSize: "16px" }}>or 9 x$1.21</Typography>
    </Typography>
  );
  return (
    <Grid item sx={{ position: "relative" }} className="media--card">
      <Box
        height="20px"
        color="secondary"
        sx={{
          position: "absolute",
          right: "0px",
          backgroundColor: "black",
          padding: "3px 10px",
        }}
      >
        <Typography variant="body2" color="secondary" sx={{ fontSize: "10px" }}>
          Free Shipping
        </Typography>
      </Box>
      <Card sx={{ maxWidth: 200, padding: "0px", borderRadius: "0px" }}>
        <CardMedia component="img" height="300" src={image} alt="clothes" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            component="div"
            sx={{ fontSize: "16px" }}
          >
            Cropped Stay Groovy off white
          </Typography>
          {dollarCost}
        </CardContent>
        <CardActions sx={{ padding: "0px", backgroundColor: "primary.main" }}>
          <Button
            size="large"
            fullWidth={true}
            color="secondary"
            sx={{
              borderRadius: "0px",
              cursor: "pointer",
              textTransform: "none",
            }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
