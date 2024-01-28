import React from "react";
import { Box, SwipeableDrawer, Button } from "@mui/material";
import DrawerBox from "./DrawerBox";

type Props = {
  openDrawer: boolean;
  setOpenDrawer: (arg0: boolean) => void;
};

const DrawerComp = ({ setOpenDrawer, openDrawer }: Props) => {
  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(true);
  };
  return (
    <React.Fragment key="right">
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <DrawerBox setOpenDrawer={setOpenDrawer} />
      </SwipeableDrawer>
    </React.Fragment>
  );
};

export default DrawerComp;
