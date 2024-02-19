"use client";
import React, { ChangeEvent, useState } from "react";
import {
  TextField,
  Stack,
  FormControl,
  FormLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface IInputProps {
  label: string;
  showPassword?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name?: string;
  errorText?: string;
}

export const DefaultInput = ({
  label,
  showPassword = false,
  onChange,
  placeholder,
  name,
  errorText,
}: IInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(showPassword);
  return (
    <>
      <FormControl sx={{ my: "1rem" }} variant="outlined" fullWidth>
        <FormLabel sx={{ my: "4px", color: "black" }}>{label}</FormLabel>
        <OutlinedInput
          name={name}
          onChange={onChange}
          sx={{ backgroundColor: "#ECEDF0" }}
          placeholder={placeholder}
          type={isShowPassword ? "password" : "text"}
          endAdornment={
            showPassword && (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                >
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
        <Typography color="red">{errorText}</Typography>
      </FormControl>
    </>
  );
};
