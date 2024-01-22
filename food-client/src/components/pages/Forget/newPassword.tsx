"use client";
import { DefualtButton, DefaultInput } from "@/components";
import { Box, Container, Typography, Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

import Link from "next/link";
import React, { useState } from "react";
type Props = {};

const NewPassword = (props: Props) => {
  const vertical = "top";
  const horizontal = "center";
  const [open, setOpen] = useState<boolean>(false);
  const success = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        message="Нууц үг амжилттай солигдлоо"
        key={"top" + "center"}
        sx={{ marginTop: 20 }}
      >
        <Alert
          variant="filled"
          color="success"
          severity="success"
          sx={{
            borderRadius: "20px",
            color: "#18BA51",
            border: "1px solid #18BA51",
          }}
        >
          Нууц үг амжилттай солигдлоо
        </Alert>
      </Snackbar>

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
            Шинэ нууц үг зохиох
          </Typography>

          <DefaultInput label="Нууц үг" placeholder="********" />
          <DefaultInput label="Нууц үг давтах " placeholder="********" />
          <Box
            display="flex"
            flexDirection="column"
            gap="28px"
            marginTop="50px"
          >
            <DefualtButton text="Үргэлжлүүлэх" buttonFunction={success} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NewPassword;
