"use client";
import { DefualtButton } from "@/components";
import FoodCard from "@/components/card/foodCard";
import { catContext } from "@/context/catProvider";
import { foodContext } from "@/context/foodProvider";
import { Container } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

type Props = {};

const FoodMenu = (props: Props) => {
  const { categories, getCategories } = useContext(catContext);
  const { foods, getFoods } = useContext(foodContext);
  const [selectedCat, setSelectedCat] = useState("");
  const handleClick = (cat: string) => {
    setSelectedCat(cat);
    setCatFoods(foods?.filter((food: any) => food.category._id == cat));
  };
  useEffect(() => {
    getCategories();
    getFoods();
  }, []);
  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCat(categories[0]._id);
      setCatFoods(
        foods?.filter((food: any) => food.category._id == categories[0]._id)
      );
    }
  }, [foods]);

  const [catFoods, setCatFoods] = useState<any>();
  return (
    <Container maxWidth="xl" sx={{ marginY: "30px", minHeight: "900px" }}>
      <div className="grid grid-cols-4 gap-5">
        {categories?.map((category: any, index) => {
          return (
            <DefualtButton
              key={category._id}
              buttonFunction={() => {
                handleClick(category._id);
              }}
              text={category.name}
              btnType={category._id === selectedCat ? "contained" : "outlined"}
            />
          );
        })}
      </div>
      <div className="mt-20 flex flex-wrap gap-5">
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
    </Container>
  );
};

export default FoodMenu;
