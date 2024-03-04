"use client";
import { Container } from "@mui/material";
import React from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import { useFormik } from "formik";
import * as yup from "yup";

type Props = {};

const OrderPageComponent = (props: Props) => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .max(100, "Имэйл хаяг 100 тэмдэгтээс доош байх ёстой")
      .required("Имэйл хаягыг заавал байх ёстой.")
      .email("Имэйл хаяг байх ёстой")
      .matches(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@gmail[A-Za-z0-9.-]+$/,
        "Та зөвхөн gmail хаяг оруулна"
      ),
    password: yup.string().required("Нууц үгээ заавал бөглөнө үү."),
  });
  const formik = useFormik({
    onSubmit: ({}) => {
      console.log();
      console.log();
    },
    initialValues: { duureg: "", horoo: "", buildingNo: "", info: "" },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema,
  });
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
