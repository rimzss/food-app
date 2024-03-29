import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const MainBannerText = (props: Props) => {
  return (
    <Box width="380px" padding={5}>
      <Typography
        sx={{
          fontSize: "55px",
          color: "white",
          fontWeight: "600",
          lineHeight: "90%",
          letterSpacing: "0.55px",
        }}
      >
        Pinecone Food delivery
      </Typography>
      <Box
        className="hidden lg:block"
        sx={{
          borderBottom: "2px solid white",
          opacity: "50%",
          marginTop: "40px",
        }}
      ></Box>
      <Typography
        color="white"
        variant="h5"
        marginTop="30px"
        className="hidden lg:block"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </Box>
  );
};

export default MainBannerText;
