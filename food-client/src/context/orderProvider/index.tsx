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

interface ICreateOrderContext {}
export const orderContext = createContext({} as ICreateOrderContext);

const OrderProvider = ({ children }: PropsWithChildren) => {
  let orderInfo = {
    foods: [],
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
