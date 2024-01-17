import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

type Props = {
  isDiscounted: undefined | boolean;
};

const FoodCard = ({ isDiscounted = false }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        padding: "20px",
        boxShadow: "none",
        position: "relative",
      }}
    >
      {isDiscounted && (
        <Box
          position="absolute"
          bgcolor="#18BA51"
          color="white"
          paddingX="15px"
          fontSize="25px"
          borderRadius="40px"
          border="1px solid white"
          top="35px"
          right="35px"
        >
          20%
        </Box>
      )}

      <CardMedia
        sx={{ height: 200, borderRadius: "20px" }}
        image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vm06gpe3~ufuVSyoZ-mbJ9OVjXs4lOdDLMVPW0NrHH3cyQu8m7kMOcJqHBj3aVpv4DdOxV5bpam8Py0K5eLSphhSl6VsfEPveXxfdC~X4R0WD68-cgnJUJS6xUhwlQ24KkjCfZH3f1a273tVL~5o6WM4X4XxWazKJlnFoYN464EHCQtp2QQQSdXsB9wOmsJi5J4YBOfY9N1q1aSluU4IIHSPSuF1rXc9XOFgVvD99b4brsbupJK~65Oyq33znApNPtd-m1cWdFjgBUEdfoe39wKyCtbrXPWojVS6i3esJT~8atwkHx4L0eTGoLbv9U2zpakTFP~5rvX9EpabYjruZw__"
        title="Өглөөний хоол"
      />
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          Өглөөний хоол
        </Typography>
        {isDiscounted ? (
          <div className="flex gap-5">
            <Typography variant="h6" color="#18BA51" fontWeight="bold">
              4,800₮
            </Typography>
            <Typography
              variant="h6"
              color="black"
              sx={{ textDecoration: "line-through" }}
            >
              4,800₮
            </Typography>
          </div>
        ) : (
          <Typography variant="h6" color="#18BA51" fontWeight="bold">
            4,800₮
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default FoodCard;
