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
  // const [localBasketFoods, setLocalBasketFoods] = useState<any>([]);
  // const addFoodToLocalStorage = (foodId: string, count: number) => {
  //   const foodObj = { food: foodId, count: count };
  //   console.log("FOOD OBJECT", localBasketFoods);
  //   setLocalBasketFoods((prev: any) => {
  //     localStorage.setItem("basketFoods", JSON.stringify([...prev, foodObj]));
  //     return [...prev, foodObj];
  //   });
  // };
  // const getLocal = () => {
  //   if (localStorage.getItem("basketFoods")) {
  //     setLocalBasketFoods(JSON.parse(localStorage.getItem("basketFoods")!));
  //   }
  // };
  // useEffect(() => {
  //   getLocal();
  // }, []);

  const getUserBasketFoods = async () => {
    if (user) {
      try {
        const data = await axios
          .get(`http://localhost:8080/basket/${user._id}`)
          .then((res) => res.data);
        console.log("RES", data.basket.foods);
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
    } catch (error) {}
  };
  const deleteFoodFromArray = (id: string) => {
    setBasketFoods((oldFoods: any) => {
      console.log("OLD FOOD", oldFoods);
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
  return (
    <basketContext.Provider
      value={{
        getUserBasketFoods,
        basketFoods,
        addBasketItem,
        deleteBasketItem,
      }}
    >
      {children}
    </basketContext.Provider>
  );
};
export default BasketProvider;
