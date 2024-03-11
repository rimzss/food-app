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
  updateFoodCount: (count: number, foodId: string) => void;
  deleteBasketItem: (foodId: string) => void;
  totalPrice: number;
  basketFoods: any;
}

export const basketContext = createContext<ICreateBasketContext>(
  {} as ICreateBasketContext
);

const BasketProvider = ({ children }: PropsWithChildren) => {
  const [basketFoods, setBasketFoods] = useState([]);
  const { user } = useContext(authContext);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    if (basketFoods) {
      setTotalPrice(
        basketFoods
          ?.map((food: any) => {
            return food.food.price * food.count;
          })
          .reduce((sum: number, cur: number) => {
            return sum + cur;
          }, 0)
      );
    }
  }, [basketFoods]);
  const getUserBasketFoods = async () => {
    if (user) {
      try {
        const data = await axios
          .get(`https://foodserver-lake.vercel.app/basket/${user._id}`)
          .then((res) => res.data);
        setBasketFoods(data.basket.foods);
        console.log(data.basket.foods);
      } catch (error) {}
    }
  };
  useEffect(() => {
    getUserBasketFoods();
  }, [user]);
  const addBasketItem = async (foodId: string, count: number) => {
    try {
      const data = await axios
        .put("https://foodserver-lake.vercel.app/basket", {
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
      const data = await axios.delete(
        "https://foodserver-lake.vercel.app/basket",
        {
          data: {
            userId: user._id,
            foodId: foodId,
          },
        }
      );
      deleteFoodFromArray(foodId);
    } catch (error) {}
  };
  const clearBasket = () => {
    setBasketFoods([]);
  };

  const updateFoodCount = async (count: number, foodId: string) => {
    try {
      const data = await axios.put(
        `https://foodserver-lake.vercel.app/basket/${user._id}`,
        {
          count: count,
          foodId: foodId,
        }
      );
      getUserBasketFoods();
    } catch (error) {}
  };
  return (
    <basketContext.Provider
      value={{
        getUserBasketFoods,
        basketFoods,
        addBasketItem,
        deleteBasketItem,
        clearBasket,
        totalPrice,
        updateFoodCount,
      }}
    >
      {children}
    </basketContext.Provider>
  );
};
export default BasketProvider;
