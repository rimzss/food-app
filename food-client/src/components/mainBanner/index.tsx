import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const MainBannerText = (props: Props) => {
  return (
    <Box>
      {" "}
      <Typography
        sx={{
          fontSize: "55px",
          width: "380px",
          color: "white",
          fontWeight: "600",
          lineHeight: "90%",
          letterSpacing: "0.55px",
        }}
      >
        Pinecone Food delivery
      </Typography>
      <Box
        sx={{
          borderBottom: "2px solid white",
          opacity: "50%",
          marginTop: "40px",
        }}
      ></Box>
    </Box>
  );
};

export default MainBannerText;
