import { Grid } from "@mui/material";
import React from "react";
import MediaCard from "./Card";

export default function Cards() {
  let cardList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Grid container spacing={3}>
      {cardList.map((card: number) => (
        <MediaCard key={card} />
      ))}
    </Grid>
  );
}
