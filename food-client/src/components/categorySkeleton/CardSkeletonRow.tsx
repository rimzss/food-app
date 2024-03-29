import React from "react";
import CardSkeleton from "./CardSkeleton";

type Props = {};

const CardSkeletonRow = (props: Props) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {Array.from(new Array(3)).map((a, index) => {
        return <CardSkeleton key={index} />;
      })}
    </div>
  );
};

export default CardSkeletonRow;
