"use client";
import React from "react";
import Logo from "../core/Logo";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import PhoneMenu from "./PhoneMenu";
import WebMenu from "./WebMenu";

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
  return (
    <nav className="flex justify-between md:justify-normal my-5">
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
      <WebMenu />
      <PhoneMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </nav>
  );
};

export default Header;
