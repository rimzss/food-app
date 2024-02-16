import React from "react";
import Skeleton from "@mui/material/Skeleton";
import CardSkeletonRow from "./CardSkeletonRow";

type Props = {};

const CategorySkeleton = (props: Props) => {
  const array = [1, 2, 3];
  return (
    <div>
      {array.map(() => {
        return (
          <>
            <Skeleton variant="text" sx={{ fontSize: "3rem" }} width={240} />
            <CardSkeletonRow />
          </>
        );
      })}
    </div>
  );
};

export default CategorySkeleton;
