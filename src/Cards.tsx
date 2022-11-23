import { Grid, Typography } from "@mui/material";
import React from "react";
import MediaCard from "./MediaCard";

export default function Cards() {
  let cardList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <Typography variant="h6" sx={{ display: "inline" }}>
        16 Product(s) found
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: "0px" }}>
        {cardList.map((card: number) => (
          <MediaCard key={card} />
        ))}
      </Grid>
    </>
  );
}
