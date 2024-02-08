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
  handleLoginInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSignupInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  login: () => void;
  loginInfo: {
    email: string;
    password: string;
  };
  signup: () => void;
  signupInfo: {
    name: string;
    email: string;
    password: string;
    address: {
      duureg: string;
      horoo: string;
    };
  };
}

export const authContext = createContext<IUserCreateContext>({
  handleLoginInfo: () => {},
  handleSignupInfo: () => {},
  login: () => {},
  signup: () => {},
  loginInfo: {
    email: "",
    password: "",
  },
  signupInfo: {
    name: "",
    email: "",
    password: "",
    address: {
      duureg: "",
      horoo: "",
    },
  },
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    address: {
      duureg: "",
      horoo: "",
    },
  });

  const handleLoginInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const handleSignupInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      const data = await axios
        .post("http://localhost:8080/auth/signin", {
          email: loginInfo.email,
          upassword: loginInfo.password,
        })
        .then((res) => res.data);
      console.log("LOGIN SUCCESS!!!", data);
      redirect("/");
    } catch (error) {
      console.log("ERROR IN LOGIN FUNCTION");
    }
  };

  const signup = async () => {
    try {
      const data = axios
        .post("http://localhost:8080/auth/signup", {
          name: signupInfo.name,
          email: signupInfo.email,
          password: signupInfo.password,
          address: signupInfo.address,
        })
        .then((res) => res.data);
      console.log("SIGNUP SUCCESS!!!", data);
    } catch (error) {
      console.log("ERROR IN SIGNUP FUNCTION", error);
    }
  };
  return (
    <authContext.Provider
      value={{
        handleLoginInfo,
        handleSignupInfo,
        login,
        signup,
        loginInfo,
        signupInfo,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
