import { Grid, Typography } from "@mui/material";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import MediaCard from "./MediaCard";

export default function Cards() {
  let cardList: number[] = [1, 2, 3, 4];
  return (
    <>
      <Typography variant="h6" sx={{ display: "inline" }}>
        16 Product(s) found
      </Typography>
      <Grid2 container spacing={3} sx={{ marginTop: "0px" }}>
        {cardList.map((card: number) => (
          <MediaCard key={card} />
        ))}
      </Grid2>
    </>
  );
}
