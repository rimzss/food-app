import React from "react";
import Grid from "@mui/material/Grid";
import Book from "./Book";
import TimeCard from "./TimeCard";
import HealthCard from "./HealthyCard";
import ChooseCard from "./chooseCard";
import { Container } from "@mui/material";

type Props = {};

const AdCards = (props: Props) => {
  return (
    <Container>
      <Grid container spacing={10}>
        <Grid item xs={6} md={3}>
          <Book />
        </Grid>
        <Grid item xs={6} md={3}>
          <TimeCard />
        </Grid>
        <Grid item xs={6} md={3}>
          <HealthCard />
        </Grid>
        <Grid item xs={6} md={3}>
          <HealthCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdCards;
