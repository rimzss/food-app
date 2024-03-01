"use client";
import { Box, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import Radio from "@mui/material/Radio";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import TextField from "@mui/material/TextField";
import { DefaultInput, DefualtButton } from "@/components";
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
      <Box
        my={10}
        boxShadow={3}
        gap={10}
        p={5}
        borderRadius={2}
        sx={{ minHeight: 618 }}
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
          sx={{ position: "sticky", bottom: "0", backgroundColor: "white" }}
        >
          <Box>
            <Typography color="#5E6166">Нийт төлөх дүн</Typography>
            <Typography fontWeight={700}>
              {basketFoods
                ?.map((food: any) => {
                  return food.food.price * food.count;
                })
                .reduce((sum: number, cur: number) => {
                  return sum + cur;
                }, 0)}
              ₮
            </Typography>
          </Box>
          <Box width="250px">
            <DefualtButton text="Захиалах" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StepTwo;
