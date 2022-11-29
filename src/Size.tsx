import React from "react";
import { Grid, Typography, Checkbox } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

interface Props {
  filterSize: any;
}

export default function Size({ filterSize }: Props) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
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
        {sizes.map((size) => (
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            onClick={() => filterSize(size)}
          />
        ))}
      </Grid>
      <Typography variant="body1" sx={{ padding: "20px 0" }}>
        Please select your size
      </Typography>
    </div>
  );
}
