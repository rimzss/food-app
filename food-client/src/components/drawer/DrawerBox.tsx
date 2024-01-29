import { Box, Typography } from "@mui/material";
import React from "react";
import BasketItem from "../checkout/BasketItem";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { DefualtButton } from "..";

type Props = {
  setOpenDrawer: (arg0: boolean) => void;
};

const DrawerBox = ({ setOpenDrawer }: Props) => {
  return (
    <div className="min-w-52 p-5 flex flex-col h-screen justify-between">
      <Box>
        <Box display="flex" justifyContent="space-between">
          <MdOutlineKeyboardArrowLeft
            size={25}
            onClick={() => {
              setOpenDrawer(false);
            }}
            className="cursor-pointer"
          />
          <Typography width="50%" fontSize="20px" fontWeight={900}>
            Таны сагс
          </Typography>
        </Box>

        <BasketItem />
        <BasketItem />
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        boxShadow="0px -4px 8px 0px rgba(187, 190, 205, 0.20)"
        padding="10px 32px 30px 32px"
      >
        <Box>
          <Typography color="#5E6166">Нийт төлөх дүн</Typography>
          <Typography fontWeight={700}>34,800₮</Typography>
        </Box>
        <Box width="250px">
          <DefualtButton text="Захиалах" />
        </Box>
      </Box>
    </div>
  );
};

export default DrawerBox;