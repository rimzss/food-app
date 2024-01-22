"use client";
import AdCards from "@/components/adCards/AdCards";
import FoodCard from "@/components/card/foodCard";
import BasketItem from "@/components/checkout/BasketItem";
import Checkout from "@/components/checkout/Checkout";
import Trace from "@/components/footer/trace";
import MainBannerText from "@/components/mainBanner";
import { Box, Container, Grid } from "@mui/material";

export default function Home() {
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
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <MainBannerText />
        </Grid>
        <Grid
          item
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <MainBannerText />
        </Grid>
      </Grid>
      <Container>
        <Box>
          <AdCards />
          <FoodCard isDiscounted={false} />
          <FoodCard isDiscounted={true} />
          <Checkout />
          <BasketItem />
        </Box>
      </Container>
    </main>
  );
}
