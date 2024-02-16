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
  isLoading: boolean;
}

export const foodContext = createContext<ICreateFoodContext>({
  foods: [],
  getFoods: () => {},
  isLoading: false,
});

const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getFoods = async () => {
    try {
      setIsLoading(true);
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
    <foodContext.Provider value={{ foods, getFoods, isLoading }}>
      {children}
    </foodContext.Provider>
  );
};
export default FoodProvider;
