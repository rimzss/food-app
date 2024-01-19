import React from "react";
import Grid from "@mui/material/Grid";
import Book from "./Book";
import TimeCard from "./TimeCard";
import HealthCard from "./HealthyCard";
import ChooseCard from "./chooseCard";

type Props = {};

const AdCards = (props: Props) => {
  return (
    <Grid container rowSpacing={{ xs: 5, md: 30 }} columnSpacing={{ xs: 5 }}>
      <Grid item md={3} xs={6}>
        <Book />
      </Grid>
      <Grid item md={3} xs={6}>
        <TimeCard />
      </Grid>
      <Grid item md={3} xs={6}>
        <HealthCard />
      </Grid>
      <Grid item md={3} xs={6}>
        <ChooseCard />
      </Grid>
    </Grid>
  );
};

export default AdCards;
