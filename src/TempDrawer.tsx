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
import { positions } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";

type Anchor = "right";

export default function TempDrawer() {
  const [tempDrawer, setTempDrawer] = React.useState(false);
  const icon = (
    <Badge
      badgeContent={19}
      color="warning"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <ShoppingCartIcon color="secondary" />
    </Badge>
  );

  return (
    <div>
      <>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={() => setTempDrawer(true)}
        >
          {icon}
        </IconButton>

        <Drawer
          anchor={"right"}
          open={tempDrawer}
          onClose={() => setTempDrawer(false)}
          PaperProps={{ sx: { overflow: "visible" } }}
          sx={{
            backdropFilter: "transparent",
            position: "relative",
          }}
          hideBackdrop={true}
        >
          <Button
            color="secondary"
            sx={{
              position: "absolute",
              backgroundColor: "orange",
              borderRadius: "0",
              minWidth: "50px",
              height: "50px",
              left: "-50px",
            }}
            onClick={() => setTempDrawer(false)}
          >
            X
          </Button>
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
          <Cart />
        </Drawer>
      </>
    </div>
  );
}
