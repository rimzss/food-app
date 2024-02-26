"use client";
import { SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { array } from "prop-types";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { authContext } from "../authProvider";

interface ICreateFoodContext {
  foods: any;
  openFilter: boolean;
  isUpdateing: boolean;
  getFoods: () => void;
  uploadFoodImage: () => void;
  handleOpenFilter: () => void;
  handleCloseFilter: () => void;
  handleLoading: () => void;
  updateFood: (foodId: string) => void;
  deleteFood: (foodId: string) => void;
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFoodForm: (e: any) => void;
  setUpdateForm: (value: any) => void;
  foodForm: {
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    _id?: string;
  };
  loading: boolean;
}
export const foodContext = createContext({} as ICreateFoodContext);
const FoodProvider = ({ children }: PropsWithChildren) => {
  const { token } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [foods, setFoods] = useState<any>();
  let [foodForm, setFoodForm] = useState<any>({
    name: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
    setIsUpdateing(false);
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };
  const handleFoodForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFoodForm({ ...foodForm, [e.target.name]: e.target.value });
  };
  const getFoods = async () => {
    try {
      const { foods } = await axios
        .get("http://localhost:8080/food")
        .then((res) => res.data);
      setFoods(foods);
    } catch (error) {}
  };
  const handleLoading = () => {
    setLoading(true);
  };
  const createFood = async () => {
    try {
      console.log("FOOD FORM", foodForm);
      const { food } = await axios
        .post("http://localhost:8080/food", foodForm)
        .then((res) => res.data);
      setLoading(false);
      setFoods([...foods, food]);
    } catch (error) {}
  };
  const uploadFoodImage = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      const image = await axios.post("http://localhost:8080/upload", formData);
      foodForm.image = image.data.url;

      createFood();
    } catch (error) {}
  };
  const deleteFoodFromArray = (id: string) => {
    setFoods((oldFoods: any) => {
      return oldFoods.filter((obj: any) => obj._id !== id);
    });
  };
  const deleteFood = async (foodId: string) => {
    try {
      const data = await axios.delete(`http://localhost:8080/food/${foodId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      deleteFoodFromArray(foodId);
    } catch (error) {}
  };

  // -----------UPDATE FOOD SECTION----------
  const [isUpdateing, setIsUpdateing] = useState(false);
  const setUpdateForm = (value: any) => {
    setIsUpdateing(true);
    setFoodForm(value);
    setOpenFilter(true);
  };
  const updateFood = async (foodId: string) => {
    try {
      const data = await axios.put(`http://localhost:8080/food/${foodId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          updateData: foodForm,
        },
      });
      setIsUpdateing(false);
    } catch (error) {}
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
        deleteFood,
        loading,
        handleLoading,
        openFilter,
        handleCloseFilter,
        handleOpenFilter,
        setUpdateForm,
        updateFood,
        isUpdateing,
      }}
    >
      {children}
    </foodContext.Provider>
  );
};

export default FoodProvider;
