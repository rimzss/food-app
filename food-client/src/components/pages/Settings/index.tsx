"use client";
import { DefaultUserEdit, SecondaryButton } from "@/components";
import { authContext } from "@/context/authProvider";
import { Avatar, Container, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { EditInput } from "./editInput";

type Props = {};

const Settings = (props: Props) => {
  const { user } = useContext(authContext);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const toggleEdit = (label: string) => {
    switch (label) {
      case "name":
        setIsEditingName(true);
        break;
      case "email":
        setIsEditingEmail(true);
        break;
      default:
        setIsEditingName(false);
        setIsEditingEmail(false);
        break;
    }
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={10} sx={{ marginBottom: 10 }}>
        <Avatar sx={{ width: "120px", height: "120px" }} />
        <h1 className="text-3xl font-bold">{user ? user.name : "Your Name"}</h1>
      </Stack>
      <Stack spacing={5}>
        {isEditingName ? (
          <EditInput
            label="Таны нэр"
            icon="name"
            value={user.name}
            buttonFunction={() => {
              toggleEdit("");
            }}
          />
        ) : (
          <DefaultUserEdit
            label="Таны нэр"
            icon="name"
            value={user.name}
            buttonFunction={() => {
              toggleEdit("name");
            }}
          />
        )}
        {isEditingEmail ? (
          <EditInput
            label="Имэйл хаяг"
            icon="name"
            value={user.email}
            buttonFunction={() => {
              toggleEdit("");
            }}
          />
        ) : (
          <DefaultUserEdit
            label="Имэйл хаяг"
            icon="name"
            value={user.email}
            buttonFunction={() => {
              toggleEdit("email");
            }}
          />
        )}

        <SecondaryButton icon="history" value="Захиалгын түүх" />
        <SecondaryButton icon="logout" value="Гарах" />
      </Stack>
    </Container>
  );
};

export default Settings;
