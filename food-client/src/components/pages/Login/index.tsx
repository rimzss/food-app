"use client";
import { DefualtButton, DefaultInput } from "@/components";
import { authContext } from "@/context/authProvider";
import { Box, Container, Typography } from "@mui/material";

import Link from "next/link";
import React, { useContext } from "react";

type Props = {};

const LoginPage = (props: Props) => {
  const { handleLoginInfo, login } = useContext(authContext);

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
          onChange={handleLoginInfo}
          name="email"
        />
        <DefaultInput
          label="Нууц үг"
          placeholder="Нууц үг"
          showPassword={true}
          onChange={handleLoginInfo}
          name="password"
        />
        <Link href="/forget">
          <Typography marginTop="-15px" textAlign="right" variant="body2">
            Нууц үг сэргээх
          </Typography>
        </Link>

        <Box display="flex" flexDirection="column" gap="28px" marginTop="50px">
          <DefualtButton text="Нэвтрэх" buttonFunction={login} />

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
