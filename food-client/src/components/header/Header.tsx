"use client";
import React, { useState } from "react";
import Logo from "../core/Logo";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import PhoneMenu from "./PhoneMenu";
import WebMenu from "./WebMenu";
import { Container } from "@mui/material";
import DrawerComp from "../drawer/DrawerComp";

type Props = {};

const Header = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <Container maxWidth="xl">
      <nav className="flex justify-between md:justify-normal my-5 static">
        <Logo color="black" />
        <div className="md:hidden">
          <Button
            variant="contained"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <IoMdMenu size="20px" color="white" />
          </Button>
        </div>
        <WebMenu setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
        <PhoneMenu
          setOpenDrawer={setOpenDrawer}
          openDrawer={openDrawer}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          open={open}
          handleClose={handleClose}
        />
      </nav>
      <DrawerComp setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
    </Container>
  );
};

export default Header;
