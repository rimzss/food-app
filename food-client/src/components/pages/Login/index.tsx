"use client";
import { DefualtButton, DefaultInput } from "@/components";
import { authContext } from "@/context/authProvider";
import { Box, Container, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

import Link from "next/link";
import React, { useContext } from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const { handleLoginInfo, login } = useContext(authContext);
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
    onSubmit: ({ email, password }) => {
      console.log("EMAIL", email);
      console.log("PASS", password);
      login(email, password);
    },
    initialValues: { email: "", password: "" },
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
        height: "80vh",
      }}
    >
      <Box
        minWidth="380px"
        maxWidth="480px"
        sx={{ padding: { sx: "5px", md: "30px" } }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          marginBottom="35px"
        >
          Нэвтрэх
        </Typography>

        <DefaultInput
          label="Имэйл"
          placeholder="Имэйл хаягаа оруулна уу"
          onChange={formik.handleChange}
          errorText={formik.errors.email}
          name="email"
        />
        <DefaultInput
          label="Нууц үг"
          placeholder="Нууц үг"
          showPassword={true}
          onChange={formik.handleChange}
          errorText={formik.errors.password}
          name="password"
        />
        <Link href="/forget">
          <Typography marginTop="-15px" textAlign="right" variant="body2">
            Нууц үг сэргээх
          </Typography>
        </Link>

        <Box display="flex" flexDirection="column" gap="28px" marginTop="50px">
          <DefualtButton text="Нэвтрэх" buttonFunction={formik.handleSubmit} />

          <Typography textAlign="center">Эсвэл</Typography>
          <Link href="/signup">
            <DefualtButton text="Бүртгүүлэх" btnType="outlined" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
