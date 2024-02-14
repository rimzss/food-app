"use client";
import { DefaultUserEdit, SecondaryButton } from "@/components";
import { authContext } from "@/context/authProvider";
import { Avatar, Container, Stack } from "@mui/material";
import React, { useContext } from "react";

type Props = {};

const Settings = (props: Props) => {
  const { user } = useContext(authContext);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "500px",
      }}
    >
      <Stack spacing={10} sx={{ marginBottom: 10 }}>
        <Avatar sx={{ width: "120px", height: "120px" }} />
        <h1 className="text-3xl font-bold">{user?.name}</h1>
      </Stack>
      <Stack spacing={5}>
        <DefaultUserEdit label="Таны нэр" icon="name" value={user.name} />
        <DefaultUserEdit label="Имэйл хаяг" icon="name" value={user.email} />
        <SecondaryButton icon="history" value="Захиалгын түүх" />
        <SecondaryButton icon="logout" value="Гарах" />
      </Stack>
    </Container>
  );
};

export default Settings;
