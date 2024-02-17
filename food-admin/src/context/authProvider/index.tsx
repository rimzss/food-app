"use client";
import axios from "axios";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";
import { useRouter } from "next/navigation";

interface ICreateAuthContext {
  user: any;
  token: string;
  login: () => void;
  logout: () => void;
  checkIsLogged: () => void;
  handleLoginInfo: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const authContext = createContext<ICreateAuthContext>({
  user: "",
  token: "",
  login: () => {},
  logout: () => {},
  checkIsLogged: () => {},
  handleLoginInfo: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleLoginInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  const login = async () => {
    try {
      const data = await axios
        .post("http://localhost:8080/auth/signin", {
          email: loginInfo.email,
          upassword: loginInfo.password,
        })
        .then((res) => res.data);
      checkRole(data);
    } catch (error) {
      console.log("ERROR IN LOGIN FUNCTION", error);
    }
  };
  const checkRole = (data: any) => {
    if (data.userInfo.role[0] === "Admin") {
      localStorage.setItem("user", JSON.stringify(data.userInfo));
      localStorage.setItem("token", data.token);
      router.push("/");
    }
  };
  const checkIsLogged = async () => {
    if (localStorage.getItem("token")) {
      setUser(JSON.parse(localStorage.getItem("user")!));
      setToken(localStorage.getItem("token")!);
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    setToken("");
    router.push("/");
  };
  return (
    <authContext.Provider
      value={{ user, login, handleLoginInfo, checkIsLogged, logout, token }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
