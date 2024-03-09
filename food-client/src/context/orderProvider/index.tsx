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
import { alertContext } from "../alertProvider";

interface ICreateOrderContext {
  createOrder: (
    duureg: string,
    horoo: string,
    buildingNo: string,
    info: string,
    phoneNumber: string,
    method: string
  ) => void;
}
export const orderContext = createContext({} as ICreateOrderContext);

const OrderProvider = ({ children }: PropsWithChildren) => {
  const { basketFoods, totalPrice } = useContext(basketContext);
  const { alert } = useContext(alertContext);
  let orderInfo = {
    orderNo: "#" + Math.floor(Math.random() * 10000),
    foods: basketFoods,
    payment: {
      paymentAmount: totalPrice,
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
  const createOrder = async (
    duureg: string,
    horoo: string,
    buildingNo: string,
    info: string,
    phoneNumber: string,
    method: string
  ) => {
    orderInfo.address.duureg = duureg;
    orderInfo.address.khoroo = horoo;
    orderInfo.address.buildingNo = buildingNo;
    orderInfo.address.info = info;
    orderInfo.payment.method = method;
    orderInfo.phoneNumber = phoneNumber;
    orderInfo.payment.paymentAmount = totalPrice;
    console.log("CREATE ORDER", orderInfo);
    console.log("TOKEN", token);
    try {
      const data = await axios.post(
        "http://localhost:8080/order/new",
        {
          userId: user._id,
          orderInfo: orderInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Таны захиалга амжилттай боллоо", "success");
    } catch (error) {
      alert("Таны захиалга амжилтгүй боллоо", "error");
    }
  };
  return (
    <orderContext.Provider value={{ createOrder }}>
      {children}
    </orderContext.Provider>
  );
};
export default OrderProvider;
