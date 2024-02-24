"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { foodContext } from "@/context/foodProvider";
interface IResult {
  image: string;
  name: string;
  price: number;
  food: any;
  handleSearchClose: () => void;
}

export default function ResultFoodCard({
  image,
  name,
  price,
  food,
  handleSearchClose,
}: IResult) {
  const theme = useTheme();
  const { openOrderModal } = React.useContext(foodContext);

  return (
    <Card
      sx={{ display: "flex" }}
      onClick={() => {
        openOrderModal(food);
        handleSearchClose();
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {price}₮
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
