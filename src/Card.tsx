import * as React from "react";
import { Card, Grid, Button, makeStyles, Theme } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import image from "./images/purplejacket.jpg";

export default function MediaCard() {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 200, padding: "0px" }}>
        <CardMedia component="img" height="300" src={image} alt="clothes" />
        <CardContent>
          <Typography gutterBottom variant="h6" align="center" component="div">
            Cropped Stay Groovy off white
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $10.90 <Typography>or 9 x$1.21</Typography>
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "0px", backgroundColor: "primary.main" }}>
          <Button size="large" fullWidth={true} color="secondary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
