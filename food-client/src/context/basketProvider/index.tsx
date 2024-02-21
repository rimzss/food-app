"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { authContext } from "../authProvider";
import axios from "axios";

interface ICreateBasketContext {
  localBasketFoods: string[];
  addFoodToLocalStorage: (foodId: string, count: number) => void;
  getUserBasketFoods: () => void;
  basketFoods: any;
}

export const basketContext = createContext<ICreateBasketContext>(
  {} as ICreateBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const [localBasketFoods, setLocalBasketFoods] = useState<any>([]);
  const { user } = useContext(authContext);
  const [basketFoods, setBasketFoods] = useState();
  const addFoodToLocalStorage = (foodId: string, count: number) => {
    const foodObj = { food: foodId, count: count };
    console.log("FOOD OBJECT", localBasketFoods);
    setLocalBasketFoods((prev: any) => {
      localStorage.setItem("basketFoods", JSON.stringify([...prev, foodObj]));
      return [...prev, foodObj];
    });
  };
  const getLocal = () => {
    if (localStorage.getItem("basketFoods")) {
      setLocalBasketFoods(JSON.parse(localStorage.getItem("basketFoods")!));
    }
  };
  useEffect(() => {
    getLocal();
  }, []);

  const getUserBasketFoods = async () => {
    try {
      const data = await axios
        .get(`http://localhost:8080/basket/${user._id}`)
        .then((res) => res.data);
      console.log("GET USER BASKET FOODS", data.basket.foods);
      setBasketFoods(data.basket.foods);
    } catch (error) {}
  };
  return (
    <basketContext.Provider
      value={{
        localBasketFoods,
        addFoodToLocalStorage,
        getUserBasketFoods,
        basketFoods,
      }}
    >
      {children}
    </basketContext.Provider>
  );
};
export default BasketProvider;
