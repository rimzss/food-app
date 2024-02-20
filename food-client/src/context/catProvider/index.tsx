"use client";
import axios from "axios";
import React, { PropsWithChildren, createContext, useState } from "react";

interface ICreateCatContext {
  getCategories: () => void;
  categories: ICategory[];
}
interface ICategory {
  _id: string;
  name: string;
  description: string;
}
export const catContext = createContext<ICreateCatContext>(
  {} as ICreateCatContext
);
const CatProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCatogories] = useState([]);

  const getCategories = async () => {
    try {
      const categoryData = await axios
        .get("http://localhost:8080/category")
        .then((res) => res.data);
      console.log("CATEGORIES", categoryData.categorys);
      setCatogories(categoryData.categorys);
    } catch (error) {
      console.log("ERROR IN GET CATEGORIES", error);
    }
  };
  return (
    <catContext.Provider value={{ getCategories, categories }}>
      {children}
    </catContext.Provider>
  );
};
export default CatProvider;
