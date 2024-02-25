import { Container } from "@mui/material";
import React from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";

type Props = {};

const OrderPageComponent = (props: Props) => {
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "700px", display: { md: "flex" }, gap: "100px" }}
    >
      <StepOne />
      <StepTwo />
    </Container>
  );
};

export default OrderPageComponent;
