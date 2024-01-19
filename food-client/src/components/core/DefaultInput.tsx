import { Stack, TextField, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";

interface IInputProps {
  label: string;
  placeholder: string;
  showPassword?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput = ({
  label,
  onChange,
  placeholder,
  showPassword,
}: IInputProps) => {
  return (
    <Stack>
      <Typography variant="caption">{label}</Typography>
      <TextField
        placeholder={placeholder}
        sx={{ backgroundColor: "#F7F7F8" }}
      />
    </Stack>
  );
};

export default DefaultInput;
