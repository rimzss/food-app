import React from "react";
import CardSkeleton from "./CardSkeleton";
import { Stack } from "@mui/material";

type Props = {};

const CardSkeletonRow = (props: Props) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {Array.from(new Array(3)).map(() => {
        return <CardSkeleton />;
      })}
    </div>
  );
};

export default CardSkeletonRow;
