import React from "react";
import Box from "@mui/material/Box";
import Trace from "./trace";
import Typography from "@mui/material/Typography";
import Logo from "../core/Logo";
import GridRoutes from "./gridRoutes";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box
      sx={{
        position:"relative",
        overflow:"hidden",
        bgcolor: "#18BA51",
        height: "50vh",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Trace />
          <Typography
            sx={{
              display: "flex",
              color: "white",
              gap: "15px",
              fontWeight: "bold",
              alignItems: "center",
              margin: { xs: "10px", md: "100px" },
            }}
            variant="h6"
          >
            <Logo color="white" />
            Food Delivery
          </Typography>
        </Box>
        <Box>
          <GridRoutes />
          <Box sx={{ marginTop: { md: "30px", xs: "10px" } }}>
            <Typography margin="auto" width="210px" color="white">
              © 2024 Pinecone Foods LLC
            </Typography>
            <Typography margin="auto" width="309px" color="white">
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
