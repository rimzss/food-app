"use client";

import { useContext, useState, useEffect } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import FoodCard from "./food-card";
import FoodSort from "./food-sort";
// import ProductFilters from "./product-filters";
// import ProductCartWidget from "./product-cart-widget";

// ----------------------------------------------------------------------
import { sample } from "lodash";
import { faker } from "@faker-js/faker";
import { Button } from "@mui/material";
import Iconify from "@/components/iconify";
import FoodModal from "@/components/foodModal";
import { authContext } from "@/context/authProvider";
import { redirect } from "next/navigation";
import { foodContext } from "@/context/foodProvider";
import Skeletons from "@/components/Skeletons";

// ----------------------------------------------------------------------

export default function FoodView() {
  const { checkIsLogged } = useContext(authContext);
  const {
    getFoods,
    foods,
    loading,
    openFilter,
    handleCloseFilter,
    handleOpenFilter,
  } = useContext(foodContext);
  useEffect(() => {
    checkIsLogged();
    getFoods();
    if (!localStorage.getItem("token")) {
      console.log("USER NOT FOUND");
      redirect("/login");
    }
  }, []);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Хоолны жагсаалт
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            handleOpenFilter();
          }}
        >
          Шинэ хоол
        </Button>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}

          <FoodSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {foods?.map((product: any) => (
          <Grid key={product._id} xs={12} sm={6} md={3}>
            <FoodCard product={product} />
          </Grid>
        ))}
        {loading && (
          <Grid xs={12} sm={6} md={3}>
            <Skeletons />
          </Grid>
        )}
      </Grid>
      <FoodModal
        openFilter={openFilter}
        handleCloseFilter={handleCloseFilter}
      />
      {/* <ProductCartWidget /> */}
    </Container>
  );
}
