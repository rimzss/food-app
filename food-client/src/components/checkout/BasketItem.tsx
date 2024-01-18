"use client";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";
import DefualtButton from "../core/DefaultButton";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

type Props = {};

const BasketItem = (props: Props) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 600,
        padding: "20px",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 150, width: 280 }}
        image="https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5YiWu-Hyn9fm6jll9tgDfX~1chrSZfNpm~7pKmvdO6RYXNFiujuThY8jmWR5hSd~sj0BYKXsBJToD8XscOhvXj088yPKR-eM87I9JBFIwB34FLYPbpbtqgISUm60KKDvf~x5jAbjtbR-77mUWtYuOMmRGI5p5A3ejWnvlREAxJ1u~wVssyQKW75KDcmEjc-cRJr6VN27CnzEqO5zcJuqtiUydnEN40Se0Dj0ZdPrGdvMc~vivaeupELMsxB5Z8kaHjrIXAVrU2yyh3B8S7cUprcmRsSM~nwPfxv~9g3wHs5bC-aBzdz1Bq0MIb0p3ajAiVdBV-5dm-QTdnPozvT5Q__"
        alt="Main pizza"
      />
      <Box sx={{}}>
        <CardContent sx={{ maxWidth: "300px", maxHeight: 150 }}>
          <Box display="flex">
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Main Pizza
              </Typography>
              <Typography variant="h5" fontWeight="bold" color="#18BA51">
                34,800₮
              </Typography>
              <Typography variant="subtitle1" color="#767676" fontWeight="">
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Typography>
            </Box>
            <RxCross2 size="50px" />
          </Box>

          <Stack spacing={4} direction="row">
            <Button variant="contained" size="small">
              <FaMinus color="white" size="18px" />
            </Button>
            <Typography marginX="20px">1</Typography>
            <Button variant="contained" size="small">
              <FaPlus color="white" size="18px" />
            </Button>
          </Stack>
          <Box display="flex"></Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BasketItem;
