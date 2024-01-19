"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { IoMdTime } from "react-icons/io";

type Props = {};

const TimeCard = (props: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.10)",
        border: "1px solid #D6D8DB",
        borderRadius: "16px",
      }}
    >
      <CardContent>
        <IoMdTime color="#18BA51" size="30px" className="my-6" />
        <Typography variant="body1" fontWeight="bold">
          Хүргэлтийн төлөв хянах
        </Typography>
        <Typography>Захиалга бэлтгэлийн явцыг хянах</Typography>
      </CardContent>
    </Card>
  );
};

export default TimeCard;
