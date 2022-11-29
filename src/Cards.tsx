import { Grid, Typography } from "@mui/material";
import React from "react";
import { Data } from "./interfaces";

import MediaCard from "./MediaCard";

interface Props { // CardsProps is another common name for this
  data: Data[];
  onAddCart: (id: number) => void;
}

export default function Cards({ data, onAddCart }: Props) {
  console.log(onAddCart, "data123");
  return (
    <>
      <Typography variant="h6" sx={{ display: "inline" }}>
        {/* Constructing this string should be done above the return statement for max readability like const productAmountLabel = ... */}
        {data.length} Product{data.length === 1 ? "" : "s"} found
      </Typography>
      <Grid container spacing={3}>
        {data.map((dataItem: any) => ( // avoid using any at almost all costs (adopt a zero tolerance mindset for it)
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
