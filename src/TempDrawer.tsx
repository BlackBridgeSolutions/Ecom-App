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
          sx={{ backdropFilter: "transparent", pointerEvents: "none" }}
          hideBackdrop={true}
        >
          <Button
            color="secondary"
            sx={{
              position: "absolute",
              left: "-10px",
              backgroundColor: "orange",
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
        </Drawer>
      </>
    </div>
  );
}
