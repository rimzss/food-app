"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { json } from "stream/consumers";

interface IUserCreateContext {
  handleLoginInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSignupInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  login: () => void;
  logout: () => void;
  token: string;
  user: any;
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
  authLogged: () => void;
}

export const authContext = createContext<IUserCreateContext>({
  handleLoginInfo: () => {},
  handleSignupInfo: () => {},
  authLogged: () => {},
  login: () => {},
  logout: () => {},
  signup: () => {},
  token: "",
  user: "",
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
  const router = useRouter();
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
      localStorage.setItem("user", JSON.stringify(data.userInfo));
      localStorage.setItem("token", data.token);
      console.log("LOGIN SUCCESS!!!", data.userInfo);
      router.push("/");
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
      router.push("/");
    } catch (error) {
      console.log("ERROR IN SIGNUP FUNCTION", error);
    }
  };
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const authLogged = () => {
    if (localStorage.getItem("token")) {
      setUser(JSON.parse(localStorage.getItem("user")!));
      setToken(localStorage.getItem("token")!);
      console.log("USER ALREADY LOGGED IN");
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    setToken("");
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
        authLogged,
        logout,
        user,
        token,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;