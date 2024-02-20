"use client";
import { DefualtButton, DefaultInput } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import React, { useContext } from "react";
import Link from "next/link";
import { authContext } from "@/context/authProvider";
import { useFormik } from "formik";
import * as yup from "yup";
type Props = {};

const SignUpPage = (props: Props) => {
  const { handleSignupInfo, signup } = useContext(authContext);
  const validationSchema = yup.object({
    name: yup
      .string()
      .max(20, "Арай урт нэр байна богиного нуу")
      .required("Нэрээ заавал оруулна уу"),
    email: yup
      .string()
      .max(100, "Имэйл хаяг 100 тэмдэгтээс доош байх ёстой")
      .required("Имэйл хаягыг заавал оруулна уу.")
      .email("Имэйл хаяг байх ёстой")
      .matches(
        /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@gmail[A-Za-z0-9.-]+$/,
        "Та зөвхөн gmail хаяг оруулна"
      ),
    password: yup
      .string()
      .required("Нууц үгээ заавал бөглөнө үү.")
      .min(6, "Хамгийн багадаа 6 тэмдэгтээс тогтоно"),
    rePassword: yup
      .string()
      .required("Нууц үг ээ давтан оруулна уу")
      .oneOf([yup.ref("password")], "Нууц үг хоорондоо таарахгүй байна"),
  });
  const formik = useFormik({
    onSubmit: ({ name, email, password }) => {
      signup(name, email, password);
    },
    initialValues: { name: "", email: "", password: "", rePassword: "" },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "40px",
      }}
    >
      <Box
        minWidth="380px"
        maxWidth="480px"
        sx={{ padding: { md: "30px", sx: "5px" } }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          marginBottom="35px"
        >
          Бүртгүүлэх
        </Typography>
        <Stack spacing={2}>
          <DefaultInput
            label="Нэр"
            placeholder="Нэр ээ оруулна уу"
            name="name"
            onChange={formik.handleChange}
            errorText={formik.errors.name}
          />
          <DefaultInput
            label="Имэйл"
            placeholder="Имэйл хаягаа оруулна уу"
            name="email"
            onChange={formik.handleChange}
            errorText={formik.errors.email}
          />
          <DefaultInput label="Хаяг" placeholder="Хаягаа оруулна уу" />
          <DefaultInput
            label="Нууц үг"
            placeholder="Нууц үгээ оруулна уу"
            showPassword={true}
            name="password"
            onChange={formik.handleChange}
            errorText={formik.errors.password}
          />
          <DefaultInput
            name="rePassword"
            label="Нууц үг давтах"
            placeholder="Нууц үгээ оруулна уу"
            showPassword={true}
            onChange={formik.handleChange}
            errorText={formik.errors.rePassword}
          />
        </Stack>
        <Typography display="flex" gap={4} marginTop={20}>
          <CloudQueueIcon />
          Үйлчилгээний нөхцөл зөвшөөрөх
        </Typography>

        <Box display="flex" flexDirection="column" gap="28px" marginTop="50px">
          <DefualtButton
            text="Бүртгүүлэх"
            buttonFunction={formik.handleSubmit}
          />
          <Typography textAlign="center">Эсвэл</Typography>
          <Link href="/login">
            <DefualtButton text="Нэвтрэх" btnType="outlined" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
