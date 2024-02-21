"use client";
import React, { useEffect, useState } from "react";
import FoodCard from "../card/foodCard";
import Star from "../core/Star";
import { Box, Modal, Stack, Typography } from "@mui/material";

type Props = {
  id: string;
  catName: string;
  foods: any;
};

const Menu = ({ id, catName, foods }: Props) => {
  const [catFoods, setCatFoods] = useState([]);

  useEffect(() => {
    console.log("USE EFFECT WORKING");
    setCatFoods(foods?.filter((food: any) => food.category._id == id));
  }, [foods]);

  return (
    <div className="">
      <div className="flex gap-2 items-center font-semibold text-2xl mb-10">
        <Star />
        {catName}
      </div>
      <div className="flex gap-8 flex-wrap">
        {catFoods?.map((food: any) => {
          return (
            <FoodCard
              food={food}
              key={food._id}
              name={food.name}
              price={food.price}
              image={food.image}
              isDiscounted={food.isSale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
