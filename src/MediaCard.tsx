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
  Divider,
} from "@mui/material";
import image from "./images/purplejacket.jpg";
import { Data } from "./interfaces";

interface Props {
  key: number;
  dataItem: Data;
  onAddCart: any;
}

export default function MediaCard({ key, dataItem, onAddCart }: Props) {
  console.log(dataItem, "dataItem");
  const dollarCost = (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: "center" }}
    >
      <Typography sx={{ fontSize: "12.8px", display: "inline" }}>$</Typography>
      <Typography
        sx={{
          fontSize: "24px",
          display: "inline",
          fontWeight: "bold",
          color: "black",
        }}
      >
        {dataItem.priceDollars}
      </Typography>
      <Typography sx={{ fontSize: "16px", display: "inline" }}>
        .{dataItem.priceCents === 0 ? "00" : dataItem.priceCents}
      </Typography>
      <Typography sx={{ fontSize: "16px" }}>or {dataItem.deal}</Typography>
    </Typography>
  );
  return (
    <Grid item sx={{ position: "relative" }} className="media--card">
      {dataItem.shipping && (
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
          <Typography
            variant="body2"
            color="secondary"
            sx={{ fontSize: "10px" }}
          >
            Free Shipping
          </Typography>
        </Box>
      )}
      <Card sx={{ maxWidth: 200, padding: "0px", borderRadius: "0px" }}>
        <CardMedia component="img" height="300" src={image} alt="clothes" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            component="div"
            sx={{ fontSize: "16px", lineHeight: 1.3 }}
          >
            {dataItem.name}
          </Typography>
          <Divider
            textAlign="center"
            sx={{
              backgroundColor: "#EABF00",
              borderBottomWidth: "2px",
              marginBottom: "13px",
              marginLeft: "45%",
              marginRight: "45%",
            }}
          />
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
            onClick={() => onAddCart(dataItem.id)}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
