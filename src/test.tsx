import { Typography, Button, Grid } from "@mui/material";
import { MouseEvent, useState } from "react";
import React from "react";

export default function Test() {
  const [state, setState] = useState(false);
  function handleMouseOver(event: MouseEvent<HTMLButtonElement>) {
    console.log("MouseOver");
  }
  function handleMouseOut(event: MouseEvent<HTMLButtonElement>) {
    console.log("MouseOut");
  }
  return (
    <div>
      {/* <Button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        test
      </Button> */}
      <button
        onMouseOver={(event) => handleMouseOver}
        onMouseOut={(event) => handleMouseOut}
        style={{ backgroundColor: state ? "green" : "red" }}
      >
        Vanilla
      </button>
    </div>
  );
}
