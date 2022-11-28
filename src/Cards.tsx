import { Grid, Typography } from "@mui/material";
import React from "react";
import { Data } from "./interfaces";

import MediaCard from "./MediaCard";

interface Props {
  data: Data[];
}

export default function Cards({ data }: Props) {
  console.log(data, "data123");
  return (
    <>
      <Typography variant="h6" sx={{ display: "inline" }}>
        16 Product(s) found
      </Typography>
      <Grid container spacing={3}>
        {data.map((dataItem: any) => (
          <MediaCard key={dataItem.id} dataItem={dataItem} />
        ))}
      </Grid>
    </>
  );
}
