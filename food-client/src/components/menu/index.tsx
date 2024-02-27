"use client";
import React, { useEffect, useState } from "react";
import FoodCard from "../card/foodCard";
import Star from "../core/Star";

type Props = {
  id: string;
  catName: string;
  foods: any;
};

const Menu = ({ id, catName, foods }: Props) => {
  const [catFoods, setCatFoods] = useState([]);

  useEffect(() => {
    setCatFoods(foods?.filter((food: any) => food.category._id == id));
  }, [foods]);
  return (
    <div className="">
      <div className="flex gap-2 items-center font-semibold text-2xl mb-10">
        <Star />
        {catName}
      </div>
      <div className="flex gap-8 overflow-scroll no-scrollbar">
        {catFoods?.map((food: any) => {
          return (
            <div>
              <FoodCard
                food={food}
                key={food._id}
                name={food.name}
                price={food.price}
                image={food.image}
                isDiscounted={food.isSale}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
