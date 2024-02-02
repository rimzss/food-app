"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import axios from "axios";
import { redirect } from "next/navigation";

interface IUserCreateContext {
  handleLoginInfo: () => void;
}

export const userContext = createContext(null);

const UserProvider = ({ children }: PropsWithChildren) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleLoginInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const login = async () => {
    try {
      const data = axios.post("http://localhost:8080/auth/signin", {
        email: loginInfo.email,
        upassword: loginInfo.password,
      });
      console.log("LOGIN SUCCESS!!!");
      redirect("/");
    } catch (error) {
      console.log("ERROR IN LOGIN FUNCTION");
    }
  };
  return (
    <userContext.Provider
      value={{
        handleLoginInfo,
        login,
        loginInfo,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
