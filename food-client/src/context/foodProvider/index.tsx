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
  food: any;
  openOrderModal: (food: any) => void;
  openOrder: boolean;
  setOpenOrder: any;
}

export const foodContext = createContext<ICreateFoodContext>(
  {} as ICreateFoodContext
);

const FoodProvider = ({ children }: PropsWithChildren) => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getFoods = async () => {
    try {
      const foodData = await axios
        .get("http://localhost:8080/food")
        .then((res) => res.data);
      console.log("FOODS!!!", foodData.foods);
      setFoods(foodData.foods);
      setIsLoading(false);
    } catch (error) {
      console.log("ERROR IN GET FOODS", error);
    }
  };
  const [food, setFood] = useState({});
  const [openOrder, setOpenOrder] = useState<boolean>(false);
  const openOrderModal = (food: any) => {
    setFood(food);
    setOpenOrder(true);
  };

  return (
    <foodContext.Provider
      value={{
        foods,
        getFoods,
        isLoading,
        openOrderModal,
        food,
        openOrder,
        setOpenOrder,
      }}
    >
      {children}
    </foodContext.Provider>
  );
};
export default FoodProvider;
