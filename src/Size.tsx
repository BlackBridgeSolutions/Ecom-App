import React from "react";
import { Button, Grid, Typography, ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";

export default function Size() {
  const sizeArray: string[] = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
  return (
    <div>
      <Typography variant="body1" sx={{ padding: "0 50px" }}>
        Sizes:
      </Typography>
      <Grid container spacing={1}>
        {sizeArray.map((size: string) => (
          <Grid item xs={3}>
            <Button sx={{ fontSize: "12px", borderRadius: "10px" }}>
              {size}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1">Please select your size</Typography>
    </div>
  );
}
