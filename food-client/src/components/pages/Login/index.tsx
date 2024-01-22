import { DefualtButton, DefaultInput } from "@/components";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
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

        <DefaultInput label="Имэйл" placeholder="Имэйл хаягаа оруулна уу" />
        <DefaultInput
          label="Нууц үг"
          placeholder="Нууц үг"
          showPassword={true}
        />
        <Typography marginTop="-15px" textAlign="right" variant="body2">
          Нууц үг сэргээх
        </Typography>

        <Box display="flex" flexDirection="column" gap="28px" marginTop="50px">
          <DefualtButton text="Нэвтрэх" />
          <Typography textAlign="center">Эсвэл</Typography>
          <DefualtButton text="Бүртгүүлэх" btnType="outlined" />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
