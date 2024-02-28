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
  getUserBasketFoods: () => void;
  clearBasket: () => void;
  addBasketItem: (foodId: string, count: number) => void;
  deleteBasketItem: (foodId: string) => void;

  basketFoods: any;
}

export const basketContext = createContext<ICreateBasketContext>(
  {} as ICreateBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const [basketFoods, setBasketFoods] = useState();
  const { user } = useContext(authContext);

  const getUserBasketFoods = async () => {
    if (user) {
      try {
        const data = await axios
          .get(`http://localhost:8080/basket/${user._id}`)
          .then((res) => res.data);
        setBasketFoods(data.basket.foods);
      } catch (error) {}
    }
  };
  useEffect(() => {
    getUserBasketFoods();
  }, [user]);
  const addBasketItem = async (foodId: string, count: number) => {
    try {
      const data = await axios
        .put("http://localhost:8080/basket", {
          userId: user._id,
          foodId: foodId,
          count: count,
        })
        .then((res) => res.data);
      setBasketFoods(data.userBasketFoods.foods);
    } catch (error) {}
  };
  const deleteFoodFromArray = (id: string) => {
    setBasketFoods((oldFoods: any) => {
      return oldFoods.filter((obj: any) => obj.food._id !== id);
    });
  };
  const deleteBasketItem = async (foodId: string) => {
    try {
      const data = await axios.delete("http://localhost:8080/basket", {
        data: {
          userId: user._id,
          foodId: foodId,
        },
      });
      deleteFoodFromArray(foodId);
    } catch (error) {}
  };
  const clearBasket = () => {
    setBasketFoods(undefined);
  };
  return (
    <basketContext.Provider
      value={{
        getUserBasketFoods,
        basketFoods,
        addBasketItem,
        deleteBasketItem,
        clearBasket,
      }}
    >
      {children}
    </basketContext.Provider>
  );
};
export default BasketProvider;
