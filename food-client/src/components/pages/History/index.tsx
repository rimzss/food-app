"use client";
import { authContext } from "@/context/authProvider";
import { Container } from "@mui/material";
import React, { useContext, useState } from "react";
import Orders from "./orders";
import OrderDetail from "./OrderDetail";

type Props = {};

const HistoryPage = (props: Props) => {
  const { user } = useContext(authContext);
  const [orderDetailFood, setOrderDetailFoods] = useState();
  const displayOrderDetail = (orderId: string) => {
    const index = user?.orders.findIndex((order: any) => order._id == orderId);
    setOrderDetailFoods(user.orders[index].foods);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "700px", display: { md: "flex" }, gap: "100px" }}
    >
      <div className="mx-auto md:flex gap-14">
        <Orders orders={user?.orders} displayOrderDetail={displayOrderDetail} />
        <OrderDetail orderDetailFood={orderDetailFood} />
      </div>
    </Container>
  );
};

export default HistoryPage;
