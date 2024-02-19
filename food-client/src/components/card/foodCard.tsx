"use client";
import React, { useContext, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Modal,
  Stack,
  MenuItem,
} from "@mui/material";
import OrderModal from "../OrderModal";
import { foodContext } from "@/context/foodProvider";

type Props = {
  isDiscounted: undefined | boolean;
  name: string;
  price: number;
  image: string;
  discountPrice?: number;
  food: any;
};

const FoodCard = ({
  isDiscounted = false,
  name,
  price,
  image,
  discountPrice = 0,
  food,
}: Props) => {
  const { openOrderModal } = useContext(foodContext);
  return (
    <>
      <Card
        onClick={() => {
          openOrderModal(food);
        }}
        sx={{
          width: 345,
          boxShadow: "none",
          position: "relative",
        }}
      >
        {isDiscounted && (
          <Box
            position="absolute"
            bgcolor="#18BA51"
            color="white"
            paddingX="15px"
            fontSize="25px"
            borderRadius="40px"
            border="1px solid white"
            top="35px"
            right="35px"
          >
            20%
          </Box>
        )}

        <CardMedia
          sx={{ height: 200, borderRadius: "20px" }}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            {name}
          </Typography>
          {isDiscounted ? (
            <div className="flex gap-5">
              <Typography variant="h6" color="#18BA51" fontWeight="bold">
                {discountPrice}₮
              </Typography>
              <Typography
                variant="h6"
                color="black"
                sx={{ textDecoration: "line-through" }}
              >
                {price}₮
              </Typography>
            </div>
          ) : (
            <Typography variant="h6" color="#18BA51" fontWeight="bold">
              {price}₮
            </Typography>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default FoodCard;
