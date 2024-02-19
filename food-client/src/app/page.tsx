"use client";
import OrderModal from "@/components/OrderModal";
import AdCards from "@/components/adCards/AdCards";
import CategorySkeleton from "@/components/categorySkeleton";
import Trace from "@/components/footer/trace";
import MainBannerText from "@/components/mainBanner";
import FoodImages from "@/components/mainBanner/foodImages";
import Menu from "@/components/menu";
import { catContext } from "@/context/catProvider";
import { foodContext } from "@/context/foodProvider";
import { Box, Container, Grid } from "@mui/material";
import { useContext, useEffect } from "react";

export default function Home() {
  const { foods, getFoods, isLoading } = useContext(foodContext);
  const { getCategories, categories } = useContext(catContext);
  useEffect(() => {
    getFoods();
    getCategories();
  }, []);
  return (
    <main className="flex flex-wrap">
      <Grid
        container
        sx={{
          backgroundColor: "#18BA51",
          width: "100vw",
          height: "48vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Trace />
        <Grid
          item
          md={6}
          sm={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <MainBannerText />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FoodImages />
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Box>
          <AdCards />
          {isLoading ? (
            <CategorySkeleton />
          ) : (
            categories?.map((category: any) => {
              return (
                <Menu
                  key={category._id}
                  id={category._id}
                  catName={category.name}
                  foods={foods}
                />
              );
            })
          )}
          {/* {categories?.map((category: any) => {
            return (
              <Menu
                key={category._id}
                id={category._id}
                catName={category.name}
                foods={foods}
              />
            );
          })} */}

          {/* {foods?.map((food: any) => {
            return (
              <FoodCard
                key={food._id}
                name={food.name}
                price={food.price}
                image={food.image}
                isDiscounted={food.isSale}
              />
            );
          })} */}
        </Box>
      </Container>
      <OrderModal />
    </main>
  );
}
