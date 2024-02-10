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
  login: () => void;
  checkIsLogged: () => void;
  handleLoginInfo: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const authContext = createContext<ICreateAuthContext>({
  user: "",
  login: () => {},
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
      console.log("LOGIN SUCCESS!!!", data);
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
      console.log("ADMIN ALREADY LOGGED IN", user);
    }
  };
  return (
    <authContext.Provider
      value={{ user, login, handleLoginInfo, checkIsLogged }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;