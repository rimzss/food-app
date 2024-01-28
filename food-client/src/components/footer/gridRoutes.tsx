"use client";
import { Grid, Link } from "@mui/material";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

type Props = {};

const GridRoutes = (props: Props) => {
  const routes = [
    { name: "Нүүр", link: "/" },
    { name: "Холбоо барих", link: "/" },
    { name: "Хоолны цэс", link: "/" },
    { name: "Үйлчилгээний нөхцөл", link: "/policy" },
    { name: "Хүргэлтийн бүс", link: "/" },
    { name: "Нууцлагын бодлого", link: "/secrecy" },
  ];
  return (
    <Grid
      container
      width="80%"
      marginX="auto"
      sx={{
        marginTop: { md: "-50px" },
        borderBottom: "1px solid white",
        paddingBottom: { xs: "0px" },
        position: "relative",
      }}
    >
      <Grid container md={12} xs={6}>
        {routes.map((route) => {
          return (
            <Grid item md={2} xs={12}>
              <Link color="inherit" sx={{ color: "white" }} href={route.link}>
                {route.name}
              </Link>
            </Grid>
          );
        })}
      </Grid>

      <Grid container width="15%" margin="auto" marginY="50px">
        <Grid item md={4} xs={12}>
          <FaFacebook size="40px" color="white" />
        </Grid>
        <Grid item md={4} xs={12}>
          <FaInstagram size="40px" color="white" />
        </Grid>
        <Grid item md={4} xs={12}>
          <FaTwitter size="40px" color="white" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridRoutes;
