"use client";
import { DefualtButton, DefaultInput } from "@/components";
import { Box, Container, Typography, Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React, { ChangeEvent, use, useState } from "react";
type Props = {
  handleNext: () => void;
  handleChange: () => void;
  inputedPassword: string;
};

const NewPassword = ({ handleNext, handleChange, inputedPassword }: Props) => {
  const router = useRouter();
  const vertical = "top";
  const horizontal = "center";
  const [open, setOpen] = useState<boolean>(false);
  const success = () => {
    handleNext();
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      router.replace("/login");
    }, 4000);
  };
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const checkPasswordMatch = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputedPassword === e.target.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
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

        <DefaultInput
          name="password"
          label="Нууц үг"
          placeholder="********"
          onChange={handleChange}
          showPassword={true}
        />
        <DefaultInput
          label="Нууц үг давтах "
          placeholder="********"
          showPassword={true}
          onChange={checkPasswordMatch}
        />
        <Box display="flex" flexDirection="column" gap="28px" marginTop="50px">
          <DefualtButton
            text="Үргэлжлүүлэх"
            buttonFunction={success}
            disabled={isDisabled}
          />
        </Box>
      </Box>
    </>
  );
};

export default NewPassword;
