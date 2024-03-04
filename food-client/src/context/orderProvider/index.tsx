"use client";
import axios from "axios";
import {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { authContext } from "../authProvider";
import { basketContext } from "../basketProvider";

interface ICreateOrderContext {}
export const orderContext = createContext({} as ICreateOrderContext);

const OrderProvider = ({ children }: PropsWithChildren) => {
  const { basketFoods } = useContext(basketContext);
  let orderInfo = {
    orderId: "#" + Math.random() * 10000,
    foods: basketFoods,
    payment: {
      paymentAmount: 0,
      method: "",
    },
    address: {
      khoroo: "",
      duureg: "",
      buildingNo: "",
      info: "",
    },
    phoneNumber: "",
  };

  const { token, user } = useContext(authContext);
  const creatOrder = async () => {
    const data = await axios.post("http://localhost:8080/order/new", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        userId: user._id,
        orderInfo: orderInfo,
      },
    });
  };
  return <orderContext.Provider value={{}}>{children}</orderContext.Provider>;
};
