import React, { useContext } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { authContext } from "@/context/authProvider";
import { Box } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";

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
        <MenuItem onClick={handleClose}>Хоолны цэс</MenuItem>
        <MenuItem onClick={handleClose}>Хүргэлтийн бүс</MenuItem>
      </div>
      <div className="border-y-2">
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            setOpenDrawer(true);
          }}
        >
          <MdOutlineShoppingBasket className="mr-2" />
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
      <MenuItem>
        <IoIosSearch size="25px" className="-mr-6 relative z-10" />
        <input
          type="text"
          placeholder="Хайх"
          className="w-full py-2 relative z-0 px-6"
        />
      </MenuItem>
    </Menu>
  );
};

export default PhoneMenu;
