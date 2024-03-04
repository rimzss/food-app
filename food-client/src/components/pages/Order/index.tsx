"use client";
import { Container } from "@mui/material";
import React, { useState } from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import { useFormik } from "formik";
import * as yup from "yup";

type Props = {};

const OrderPageComponent = (props: Props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const validationSchema = yup.object({
    duureg: yup.string().required("Дүүрэгээ заавал оруулах ёстой."),
    horoo: yup.string().required("Хороогоо заавал оруулах ёстой."),
    buildingNo: yup.string().required("Байраа заавал оруулах ёстой."),
    phoneNumber: yup.string().required("Утасны дугаарыг заавал оруулах ёстой"),
    info: yup
      .string()
      .required("Нэмэлт хаягны мэдээлэлийг заавал оруулах ёстой."),
    method: yup.string().required("Төлбөрийн төрлөө заавал сонгоно уу"),
  });
  const formik = useFormik({
    onSubmit: ({ duureg, horoo, buildingNo, info, phoneNumber, method }) => {
      console.log("ON SUBMIT WORKING");
    },
    initialValues: {
      duureg: "",
      horoo: "",
      buildingNo: "",
      phoneNumber: "",
      info: "",
      method: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema,
  });
  return (
    <Container
      maxWidth="xl"
      sx={{ minHeight: "700px", display: { md: "flex" }, gap: "100px" }}
    >
      <StepOne formik={formik} />
      <StepTwo
        formik={formik}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </Container>
  );
};

export default OrderPageComponent;
