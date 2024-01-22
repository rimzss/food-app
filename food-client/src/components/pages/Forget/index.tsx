import { DefualtButton, DefaultInput } from "@/components";
import { Box, Container, Typography } from "@mui/material";

import Link from "next/link";
import React from "react";
type Props = {};

const ForgetPage = (props: Props) => {
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
          Нууц үг сэргээх
        </Typography>

        <DefaultInput label="Имэйл" placeholder="Имэйл хаягаа оруулна уу" />
        <Box display="flex" flexDirection="column" gap="28px" marginTop="50px">
          <DefualtButton text="Үргэлжлүүлэх" />
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPage;
