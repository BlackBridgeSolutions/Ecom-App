import React from "react";
import Box from "@mui/material/Box";
import {
  Drawer,
  Badge,
  IconButton,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";
import { Data } from "./interfaces";

interface Props {
  handleTempDrawer: any;
  tempDrawer: boolean;
  data: Data[];
  changeQuant: any;
  importVals: any;
}

type Anchor = "right";

export default function TempDrawer({
  handleTempDrawer,
  tempDrawer,
  data,
  changeQuant,
  importVals,
}: Props) {
  const icon = (
    <Badge
      badgeContent={importVals()[0] === 0 ? "0" : importVals()[0]}
      color="warning"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <ShoppingCartIcon color="secondary" />
    </Badge>
  );

  return (
    <div>
      <IconButton
        size="large"
        aria-label="show new notifications"
        color="inherit"
        onClick={() => handleTempDrawer(true)}
      >
        {icon}
      </IconButton>

      <Drawer
        anchor={"right"}
        open={tempDrawer}
        onClose={() => handleTempDrawer(false)}
        PaperProps={{ sx: { overflow: "visible" } }}
        sx={{
          backdropFilter: "transparent",
          position: "relative",
        }}
        hideBackdrop={true}
      >
        <Grid container sx={{ overflow: "auto" }}>
          <Grid item>
            <Button
              color="secondary"
              sx={{
                position: "absolute",
                backgroundColor: "1B1A20",
                borderRadius: "0",
                minWidth: "50px",
                height: "50px",
                left: "-50px",
              }}
              onClick={() => handleTempDrawer(false)}
            >
              X
            </Button>
          </Grid>
          <Grid item>
            <Box
              p={2}
              width="450px"
              alignItems="center"
              textAlign="center"
              role="presentation"
            >
              <Grid
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "55px",
                }}
              >
                {icon}
                <Typography
                  variant="h6"
                  color="secondary"
                  sx={{ marginLeft: "20px" }}
                >
                  Cart
                </Typography>
              </Grid>
            </Box>
            {importVals()[0] === 0 && (
              <div>
                <Typography
                  color="secondary"
                  sx={{
                    textAlign: "center",
                    paddingTop: "40px",
                    fontSize: "16px",
                  }}
                >
                  {`Add some products in the cart`}
                </Typography>
                <Typography
                  color="secondary"
                  sx={{ textAlign: "center", paddingTop: "20px" }}
                >
                  {`:)`}
                </Typography>
              </div>
            )}
            <Cart
              data={data}
              changeQuant={changeQuant}
              importVals={importVals}
            />
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
