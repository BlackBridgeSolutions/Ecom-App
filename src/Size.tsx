import React from "react";
import { useState } from "react";
import { Grid, Typography, Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { IndeterminateCheckBoxSharp } from "@mui/icons-material";

interface SizeClickedItem {
  value: string;
  clicked: boolean;
}

export default function Size() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div style={{ padding: "0 30px 0 130px" }}>
      <Typography
        variant="body1"
        sx={{ padding: "0 0 15px 4px", fontWeight: "bold" }}
      >
        Sizes:
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{ display: "flex", flexDirection: "columns" }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        ))}
      </Grid>
      <Typography variant="body1" sx={{ padding: "20px 0" }}>
        Please select your size
      </Typography>
    </div>
  );
}
