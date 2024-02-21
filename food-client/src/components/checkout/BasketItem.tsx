"use client";
import React from "react";
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

type Props = {
  name: string;
  price: number;
  description: string;
  image: string;
};

const BasketItem = ({ food }: any) => {
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
            <RxCross2 size="50px" />
          </Box>

          <Stack spacing={4} direction="row">
            <Button variant="contained" size="small">
              <FaMinus color="white" size="18px" />
            </Button>
            <Typography marginX="20px">1</Typography>
            <Button variant="contained" size="small">
              <FaPlus color="white" size="18px" />
            </Button>
          </Stack>
          <Box display="flex"></Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BasketItem;
