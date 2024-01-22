import { DefualtButton, DefaultInput } from "@/components";
import { Box, Container, Typography } from "@mui/material";

import Link from "next/link";
import React from "react";
type Props = {};

const AfterForgetPage = (props: Props) => {
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
        <Typography color="#695C08">
          Таны <span className="text-[#18BA51]">example@pinecone.mn</span> хаяг
          руу сэргээх код илгээх болно.
        </Typography>

        <DefaultInput
          label="Нууц үг сэргээх код"
          placeholder="********"
          showPassword={true}
        />
        <Box display="flex" flexDirection="column" gap="28px" marginTop="50px">
          <DefualtButton text="Үргэлжлүүлэх" />
        </Box>
      </Box>
    </Box>
  );
};

export default AfterForgetPage;
