import React, { useContext } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { authContext } from "@/context/authProvider";
import { Badge, Box } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import { basketContext } from "@/context/basketProvider";

type Props = {
  handleClose: () => void;
  open: boolean;
  anchorEl: null | HTMLElement;
  setAnchorEl: (arg0: null) => void;
  setOpenDrawer: (arg0: boolean) => void;
  openDrawer: boolean;
};

const PhoneMenu = ({
  handleClose,
  open,
  anchorEl,
  setOpenDrawer,
  openDrawer,
  setAnchorEl,
}: Props) => {
  const { logout, user, token } = useContext(authContext);

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <div className="w-screen">
        <Link href="/">
          <MenuItem onClick={handleClose}>Нүүр</MenuItem>
        </Link>
        <Link href="/foodmenu">
          <MenuItem onClick={handleClose}>Хоолны цэс</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>Хүргэлтийн бүс</MenuItem>
      </div>
      <div className="border-y-2">
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            setOpenDrawer(true);
          }}
        >
          <Badge badgeContent={0} color="primary">
            <MdOutlineShoppingBasket className="mr-2" />
          </Badge>
          Сагс
        </MenuItem>
        {token ? (
          <Box>
            <Link href="/settings">
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                <FaRegUser className="mr-2" />
                {user.name}
              </MenuItem>
            </Link>

            <MenuItem
              onClick={() => {
                handleClose(), logout();
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Box>
        ) : (
          <MenuItem
            onClick={() => {
              handleClose(), logout();
            }}
          >
            <Link href="/login" className="flex">
              <FaRegUser className="mr-2" />
              Нэвтрэх
            </Link>
          </MenuItem>
        )}
      </div>
    </Menu>
  );
};

export default PhoneMenu;
