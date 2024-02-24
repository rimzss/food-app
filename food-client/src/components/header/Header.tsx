"use client";
import React, { useContext, useState } from "react";
import Logo from "../core/Logo";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import PhoneMenu from "./PhoneMenu";
import WebMenu from "./WebMenu";
import { Container } from "@mui/material";
import DrawerComp from "../drawer/DrawerComp";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { authContext } from "@/context/authProvider";
import SearchIcon from "@mui/icons-material/Search";
import { searchContext } from "@/context/searchProvider";
import SearchModal from "./searchModal";

type Props = {};

const Header = (props: Props) => {
  const { handleSearchOpen } = useContext(searchContext);
  const { isLoggingOut } = useContext(authContext);
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
        <div className="flex gap-5 md:hidden">
          <div
            className="text-white bg-[#18BA51] p-1 rounded-md"
            onClick={handleSearchOpen}
          >
            <SearchIcon />
          </div>
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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoggingOut}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <SearchModal />
    </Container>
  );
};

export default Header;
