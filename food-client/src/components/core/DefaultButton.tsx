import React, { ReactNode } from "react";
import Button from "@mui/material/Button";

interface IButtonProps {
  text: string;
  disabled?: boolean;
  btnType?: "contained" | "outlined";
  buttonFunction?: () => void;
}

export const DefualtButton = ({
  text,
  disabled = false,
  btnType = "contained",
  buttonFunction,
}: IButtonProps) => {
  return (
    <Button
      fullWidth={true}
      onClick={buttonFunction}
      sx={{
        color: btnType === "outlined" ? "#18BA51" : "white",
        padding: "10px",
        borderRadius: "15px",
      }}
      variant={btnType}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
