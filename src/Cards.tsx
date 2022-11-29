import { Grid, Typography } from "@mui/material";
import React from "react";
import { Data } from "./interfaces";

import MediaCard from "./MediaCard";

interface Props {
  data: Data[];
  onAddCart: any;
}

export default function Cards({ data, onAddCart }: Props) {
  console.log(onAddCart, "data123");
  return (
    <>
      <Typography variant="h6" sx={{ display: "inline" }}>
        {data.length} Product{data.length === 1 ? "" : "s"} found
      </Typography>
      <Grid container spacing={3}>
        {data.map((dataItem: any) => (
          <MediaCard
            key={dataItem.id}
            dataItem={dataItem}
            onAddCart={onAddCart}
          />
        ))}
      </Grid>
    </>
  );
}
