"use client";
import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Radio from "@mui/material/Radio";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import TextField from "@mui/material/TextField";
import { DefaultInput, DefualtButton } from "@/components";
import { basketContext } from "@/context/basketProvider";
import BasketItem from "@/components/checkout/BasketItem";

type Props = {
  formik: any;
};

const StepTwo = ({ formik }: Props) => {
  const { basketFoods, totalPrice } = useContext(basketContext);
  return (
    <Box sx={{ minWidth: 370, width: { md: "50%" } }}>
      <Box sx={{ display: "flex" }}>
        <Radio color="secondary" checked={true} />
        <Box>
          <Typography variant="caption" color="GrayText">
            Алхам 2
          </Typography>
          <Typography variant="h6">Захиалга баталгаажуулах</Typography>
          <Typography variant="body2" color="Highlight">
            Хүлээгдэж байна
          </Typography>
        </Box>
      </Box>
      <Box
        my={10}
        boxShadow={3}
        gap={10}
        p={5}
        borderRadius={2}
        sx={{ minHeight: 618, position: "relative", zIndex: 10 }}
      >
        <div className="overflow-scroll max-h-[500px]">
          {basketFoods?.map((food: any) => {
            return (
              <BasketItem
                key={food._id}
                food={food.food}
                count={food.count}
                isOrder={false}
              />
            );
          })}
        </div>
        <Box
          display="flex"
          justifyContent="space-between"
          boxShadow="0px -4px 8px 0px rgba(187, 190, 205, 0.20)"
          padding="10px 32px 30px 32px"
          position="sticky"
          bottom={0}
          zIndex={20}
        >
          <Box>
            <Typography color="#5E6166">Нийт төлөх дүн</Typography>
            <Typography fontWeight={700}>{totalPrice}₮</Typography>
          </Box>
          <Box width="250px">
            <DefualtButton
              text="Захиалах"
              buttonFunction={formik.handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StepTwo;
