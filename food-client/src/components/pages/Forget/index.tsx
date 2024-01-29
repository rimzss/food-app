"use client";
import { DefualtButton, DefaultInput } from "@/components";
import { Box, Container, Typography } from "@mui/material";
import { redirect } from "next/navigation";

import axios from "axios";

import React, { ChangeEvent, useState } from "react";
import AfterForget from "./afterCode";
import NewPassword from "./newPassword";
type Props = {};

const ForgetPage = (props: Props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    otp: "",
  });
  const [activeStep, setActive] = useState<number>(1);
  const handleNext = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/sendmail", {
        email: user.email,
      });
      setActive((prev) => prev + 1);
    } catch (error) {
      console.log("error handleNext function", error);
    }
  };
  const sendOtp = async () => {
    try {
      const data = await axios.post("http://localhost:8080/verify/otp", {
        email: user.email,
        otp: user.otp,
      });
      setActive((prev) => prev + 1);
    } catch (error) {
      console.log("error sendOtp function", error);
    }
  };
  const changePassword = async () => {
    try {
      const data = await axios.put("http://localhost:8080/verify/reset", {
        email: user.email,
        password: user.password,
      });
      redirect("/login");
    } catch (error) {
      console.log("CHANGEPASSWORD FUNCTION ERROR", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log("INPUTING", e.target.name, e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      {activeStep == 1 && (
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
            Нууц үг сэргээх
          </Typography>

          <DefaultInput
            label="Имэйл"
            placeholder="Имэйл хаягаа оруулна уу"
            onChange={handleChange}
            name="email"
          />
          <Box
            display="flex"
            flexDirection="column"
            gap="28px"
            marginTop="50px"
          >
            <DefualtButton text="Үргэлжлүүлэх" buttonFunction={handleNext} />
          </Box>
        </Box>
      )}
      {activeStep == 2 && (
        <AfterForget handleNext={sendOtp} handleChange={handleChange} />
      )}
      {activeStep >= 3 && (
        <NewPassword
          handleNext={changePassword}
          handleChange={handleChange}
          inputedPassword={user.password}
        />
      )}
    </Box>
  );
};

export default ForgetPage;
