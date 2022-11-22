import { Grid } from "@mui/material";
import React from "react";
import MediaCard from "./Card";

export default function Cards() {
  let cardList: number[] = [1, 2, 3, 4, 5];
  return (
    <Grid container spacing={3}>
      {cardList.map((card: number) => (
        <MediaCard key={card} />
      ))}
    </Grid>
  );
}
