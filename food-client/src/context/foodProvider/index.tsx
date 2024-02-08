"use client";
import axios from "axios";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

interface ICreateFoodContext {
  foods: string[];
  getFoods: () => void;
}

export const foodContext = createContext<ICreateFoodContext>({
  foods: [],
  getFoods: () => {},
});

const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState([]);
  const getFoods = async () => {
    try {
      const foodData = await axios
        .get("http://localhost:8080/food")
        .then((res) => res.data);
      console.log("FOODS!!!", foodData.foods);
      setFoods(foodData.foods);
    } catch (error) {
      console.log("ERROR IN GET FOODS", error);
    }
  };

  return (
    <foodContext.Provider value={{ foods, getFoods }}>
      {children}
    </foodContext.Provider>
  );
};
export default FoodProvider;
