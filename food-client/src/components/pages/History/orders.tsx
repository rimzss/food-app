import { Box, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import React from "react";

type Props = {
  orders: any;
  displayOrderDetail: (orderId: string) => void;
};

const Orders = ({ orders, displayOrderDetail }: Props) => {
  return (
    <Box my={10} boxShadow={3} gap={10} p={5} borderRadius={2} minWidth="380px">
      {orders?.map((order: any) => (
        <div
          key={order?._id}
          onClick={() => {
            displayOrderDetail(order._id);
          }}
          className="flex gap-5 items-center border-b-[0.5px] border-blue-600 mb-3 hover:bg-slate-100 cursor-pointer"
        >
          <Radio checked={true} color="secondary" />
          <div>
            <Typography>Захиалга {order?.orderNo}</Typography>
            <Typography className="text-blue-600">
              {order?.delivery.status}
            </Typography>
          </div>
          <div>{order?.payment.createdAt}</div>
        </div>
      ))}
    </Box>
  );
};

export default Orders;
