import { DefualtButton, DefaultInput } from "@/components";
import { Box, Container, Typography } from "@mui/material";

import Link from "next/link";
import React, { ChangeEvent } from "react";
type Props = {
  handleNext: () => void;
  handleChange: (argo: ChangeEvent<HTMLInputElement>) => void;
};

const AfterForget = ({ handleNext, handleChange }: Props) => {
  return (
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
      <Typography color="#695C08">
        Таны <span className="text-[#18BA51]">example@pinecone.mn</span> хаяг
        руу сэргээх код илгээх болно.
      </Typography>

      <DefaultInput
        name="otp"
        onChange={handleChange}
        label="Нууц үг сэргээх код"
        placeholder="1234"
      />
      <Box display="flex" flexDirection="column" gap="28px" marginTop="50px">
        <DefualtButton text="Үргэлжлүүлэх" buttonFunction={handleNext} />
      </Box>
    </Box>
  );
};

export default AfterForget;
