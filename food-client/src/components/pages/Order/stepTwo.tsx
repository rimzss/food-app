"use client";
import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Radio from "@mui/material/Radio";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import TextField from "@mui/material/TextField";
import { DefaultInput } from "@/components";
import { basketContext } from "@/context/basketProvider";
import BasketItem from "@/components/checkout/BasketItem";

type Props = {};

const StepTwo = (props: Props) => {
  const { basketFoods } = useContext(basketContext);
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
      <Box my={10} boxShadow={3} gap={10} p={5} borderRadius={2}>
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
      </Box>
    </Box>
  );
};

export default StepTwo;
