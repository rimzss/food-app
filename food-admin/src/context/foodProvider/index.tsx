"use client";
import axios from "axios";
import React, { PropsWithChildren, createContext, useState } from "react";

interface ICreateFoodContext {
  foods: any;
  getFoods: () => void;
}
export const foodContext = createContext({
  foods: [],
  getFoods: () => {},
});
const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState<any>();
  const getFoods = async () => {
    try {
      const { foods } = await axios
        .get("http://localhost:8080/food")
        .then((res) => res.data);
      setFoods(foods);
    } catch (error) {
      console.log("ERROR IN GET FOODS FUNCTION", error);
    }
  };
  return (
    <foodContext.Provider value={{ foods, getFoods }}>
      {children}
    </foodContext.Provider>
  );
};

export default FoodProvider;
