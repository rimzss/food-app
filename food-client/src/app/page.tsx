import { Grid, Button, Typography } from "@mui/material";
import { green, teal } from "@mui/material/colors";

export default function Home() {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h1"> Framework</Typography>
        </Grid>
        <Grid item md={6}>
          <Button variant="contained" color="primary">
            CLICK ME
          </Button>
        </Grid>
      </Grid>
    </main>
  );
}
