"use client";
import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";

interface ICreateFoodContext {
  foods: any;
  getFoods: () => void;
  uploadFoodImage: () => void;
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFoodForm: (e: any) => void;
  foodForm: {
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  };
}
export const foodContext = createContext({
  foods: [],
  getFoods: () => {},
  uploadFoodImage: () => {},
  handleFoodForm: (e: any) => {},
  handleFile: (e: ChangeEvent<HTMLInputElement>) => {},
  foodForm: {
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  },
});
const FoodProvider = ({ children }: PropsWithChildren) => {
  const [file, setFile] = useState<File | null>(null);
  const [foods, setFoods] = useState<any>();
  let [foodForm, setFoodForm] = useState<any>({
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };
  const handleFoodForm = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("FOOD FORM", e.target.value);
    setFoodForm({ ...foodForm, [e.target.name]: e.target.value });
  };
  const getFoods = async () => {
    try {
      const { foods } = await axios
        .get("http://localhost:8080/food")
        .then((res) => res.data);
      setFoods(foods);
    } catch (error) {
      console.log("ERROR IN GET FOODS FUNCTION", error);
    }
  };
  const createFood = async () => {
    try {
      console.log("FOOD FORM", foodForm);
      const { food } = await axios
        .post("http://localhost:8080/food", foodForm)
        .then((res) => res.data);
      setFoods([...foods, food]);
      console.log("CREATE FOOD WORKING");
    } catch (error) {
      console.log("ERROR IN CREATE FOOD FUNCTION", error);
    }
  };
  const uploadFoodImage = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      const image = await axios.post("http://localhost:8080/upload", formData);
      foodForm.image = image.data.url;
      console.log("IMAGE UPLOADING", image.data.url);
      createFood();
    } catch (error) {
      console.log("ERROR IN UPLOAD IMAGE FUNCTION", error);
    }
  };
  return (
    <foodContext.Provider
      value={{
        foods,
        getFoods,
        uploadFoodImage,
        handleFoodForm,
        handleFile,
        foodForm,
      }}
    >
      {children}
    </foodContext.Provider>
  );
};

export default FoodProvider;
