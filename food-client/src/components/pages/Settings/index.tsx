"use client";
import { DefaultUserEdit, SecondaryButton } from "@/components";
import { authContext } from "@/context/authProvider";
import { Avatar, Container, Stack } from "@mui/material";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { EditInput } from "./editInput";
import Link from "next/link";

type Props = {};

const Settings = (props: Props) => {
  const { user, updateUser, logout } = useContext(authContext);
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);
  const handleEdit = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
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
            name="name"
            onChange={handleEdit}
            label="Таны нэр"
            icon="name"
            value={name!}
            buttonFunction={() => {
              toggleEdit("");
              updateUser({ name: name });
            }}
          />
        ) : (
          <DefaultUserEdit
            label="Таны нэр"
            icon="name"
            value={name!}
            buttonFunction={() => {
              toggleEdit("name");
            }}
          />
        )}
        {isEditingEmail ? (
          <EditInput
            name="email"
            onChange={handleEdit}
            label="Имэйл хаяг"
            icon="name"
            value={email!}
            buttonFunction={() => {
              toggleEdit("");
              updateUser({ email: email });
            }}
          />
        ) : (
          <DefaultUserEdit
            label="Имэйл хаяг"
            icon="name"
            value={email!}
            buttonFunction={() => {
              toggleEdit("email");
            }}
          />
        )}
        <Link href="/history">
          <SecondaryButton icon="history" value="Захиалгын түүх" />
        </Link>

        <SecondaryButton buttonFunction={logout} icon="logout" value="Гарах" />
      </Stack>
    </Container>
  );
};

export default Settings;
