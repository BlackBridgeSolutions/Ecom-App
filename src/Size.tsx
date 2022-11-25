import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Size() {
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
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        ))}
      </Grid>
      <Typography variant="body1" sx={{ padding: "20px 0" }}>
        Please select your size
      </Typography>
    </div>
  );
}
