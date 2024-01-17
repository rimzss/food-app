import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

type Props = {
  handleClose: () => void;
  open: boolean;
  anchorEl: null | HTMLElement;
};

const PhoneMenu = ({ handleClose, open, anchorEl }: Props) => {
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
        <MenuItem onClick={handleClose}>Нүүр</MenuItem>
        <MenuItem onClick={handleClose}>Хоолны цэс</MenuItem>
        <MenuItem onClick={handleClose}>Хүргэлтийн бүс</MenuItem>
      </div>
      <div className="border-y-2">
        <MenuItem onClick={handleClose}>
          <MdOutlineShoppingBasket className="mr-2" />
          Сагс
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FaRegUser className="mr-2" />
          Нэвтрэх
        </MenuItem>
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
