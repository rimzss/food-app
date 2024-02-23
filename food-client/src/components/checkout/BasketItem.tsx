"use client";
import React, { useContext } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { DefualtButton } from "../core/DefaultButton";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { basketContext } from "@/context/basketProvider";
import { alertContext } from "@/context/alertProvider";

type Props = {
  name: string;
  price: number;
  description: string;
  image: string;
};

const BasketItem = ({ food, count }: any) => {
  const { deleteBasketItem } = useContext(basketContext);
  const { alert } = useContext(alertContext);
  const deleteFunction = () => {
    deleteBasketItem(food._id);
    alert(`${food.name} таны сагснаас хасагдлаа`, "success");
  };
  return (
    <Card
      sx={{
        display: "flex",
        Width: 700,
        height: "210px",
        padding: "20px",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 150, width: 280 }}
        image={food.image}
        alt={food.name}
      />
      <Box sx={{}}>
        <CardContent sx={{ maxWidth: "300px", maxHeight: 150 }}>
          <Box display="flex">
            <Box>
              <Typography variant="h5" fontWeight="bold">
                {food.name}
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="#18BA51">
                {food.price}₮
              </Typography>
              <Typography variant="subtitle1" color="#767676" fontWeight="">
                {food.description}
              </Typography>
            </Box>
            <RxCross2
              className="cursor-pointer"
              size="50px"
              onClick={deleteFunction}
            />
          </Box>

          <Stack spacing={4} direction="row">
            <Typography marginX="20px">Тоо хэмжээ: {count}</Typography>
          </Stack>
          <Box display="flex"></Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BasketItem;
