import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import TempDrawer from "./TempDrawer";
import { Data } from "./interfaces";

interface Props {
  handleTempDrawer: any;
  tempDrawer: boolean;
  data: Data[];
  changeQuant: any;
  importVals: any;
}

export default function PrimarySearchAppBar({
  handleTempDrawer,
  tempDrawer,
  data,
  changeQuant,
  importVals,
}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "black" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
          >
            ARC Platforms
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { md: "flex" },
            }}
          >
            <TempDrawer
              handleTempDrawer={handleTempDrawer}
              tempDrawer={tempDrawer}
              data={data}
              changeQuant={changeQuant}
              importVals={importVals}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
