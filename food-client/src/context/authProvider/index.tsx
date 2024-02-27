"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { json } from "stream/consumers";
import { alertContext } from "../alertProvider";

interface IUserCreateContext {
  handleLoginInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSignupInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  token: string;
  user: any;
  loginInfo: {
    email: string;
    password: string;
  };
  signup: (name: string, email: string, password: string) => void;
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
  isLoggingOut: boolean;
}

export const authContext = createContext<IUserCreateContext>(
  {} as IUserCreateContext
);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const { alert } = useContext(alertContext);
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
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

  const login = async (email: string, password: string) => {
    try {
      const data = await axios
        .post("http://localhost:8080/auth/signin", {
          email: email,
          upassword: password,
        })
        .then((res) => res.data);
      localStorage.setItem("user", JSON.stringify(data.userInfo));
      localStorage.setItem("token", data.token);
      authLogged();
      alert("Амжилттай нэвтэрлээ", "success");
      router.push("/");
    } catch (error: any) {
      console.log("ERROR IN LOGIN FUNCTION", error.response.data.message);
      alert(error.response.data.message, "warning");
    }
  };
  const createUserBasket = async (id) => {
    try {
      await axios.post("http://localhost:8080/basket", { userId: id });
    } catch (error) {}
  };
  const signup = async (name: string, email: string, password: string) => {
    try {
      const data = await axios
        .post("http://localhost:8080/auth/signup", {
          name: name,
          email: email,
          password: password,
          address: signupInfo.address,
        })
        .then((res) => res.data);
      localStorage.setItem("user", JSON.stringify(data.userInfo));
      localStorage.setItem("token", data.token);
      console.log("SIGNUP SUCCESS!!!", data);
      createUserBasket(data.userInfo._id);
      authLogged();
      alert("Амжилттай бүртгэгдлээ", "success");
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
    }
  };
  useEffect(() => {
    authLogged();
  }, []);
  const logout = () => {
    setIsLoggingOut(true);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    setToken("");
    setTimeout(() => {
      setIsLoggingOut(false);
    }, 1000);
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
        isLoggingOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
