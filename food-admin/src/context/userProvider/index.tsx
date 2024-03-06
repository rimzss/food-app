"use client";
import axios from "axios";
import React, { PropsWithChildren, createContext, useState } from "react";

interface ICreateUserContext {
  getCustomers: () => void;
  customers: any;
  orders: any;
}
export const userContext = createContext<ICreateUserContext>(
  {} as ICreateUserContext
);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const getCustomers = async () => {
    try {
      const data = await axios
        .get("http://localhost:8080/users")
        .then((res) => res.data);
      setCustomers(data.users);
      setOrders(
        data.users
          .map((el: any) =>
            el.orders.map((o: any) => ({
              ...o,
              user: { name: el.name, phone: el.phone, avatarUrl: el.avatarUrl },
            }))
          )
          .flat()
      );
    } catch (error) {
      console.log("Error in getUsers FUNCTION!", error);
    }
  };
  return (
    <userContext.Provider value={{ getCustomers, customers, orders }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
