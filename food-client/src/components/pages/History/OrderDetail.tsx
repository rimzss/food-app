import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  orderDetailFood: any;
};

const OrderDetail = ({ orderDetailFood }: Props) => {
  return (
    <Box my={10} boxShadow={3} gap={10} p={5} borderRadius={2} minWidth="380px">
      {orderDetailFood?.map((food: any) => (
        <div className="flex justify-between">
          <Typography>{food?.food.name}</Typography>
          <Typography>{food?.count}</Typography>
        </div>
      ))}
    </Box>
  );
};

export default OrderDetail;
