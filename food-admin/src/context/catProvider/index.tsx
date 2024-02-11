"use client";
import axios from "axios";
import React, { PropsWithChildren, createContext, useState } from "react";

interface ICreateCatContext {
  categories: any;
  getCategories: () => void;
}
export const catContext = createContext<ICreateCatContext>({
  getCategories: () => {},
  categories: [],
});

const CatProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { categorys } = await axios
        .get("http://localhost:8080/category")
        .then((res) => res.data);
      setCategories(categorys);
      console.log("GET CATEGORIES SUCCESFUL", categorys);
    } catch (error) {
      console.log("ERROR IN GETCATEGORIES FUNCTION", error);
    }
  };

  return (
    <catContext.Provider value={{ categories, getCategories }}>
      {children}
    </catContext.Provider>
  );
};
export default CatProvider;
