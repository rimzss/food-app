"use client";
import axios from "axios";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useState,
} from "react";

interface ICreateCatContext {
  categories: any;
  getCategories: () => void;
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCategoryForm: (e: ChangeEvent<HTMLInputElement>) => void;
  uploadImage: () => void;
}
export const catContext = createContext<ICreateCatContext>({
  getCategories: () => {},
  handleFile: () => {},
  handleCategoryForm: () => {},
  uploadImage: () => {},
  categories: [],
});

const CatProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState([]);
  let [categoryForm, setCategoryForm] = useState({
    name: "",
    description: "",
    image: "",
  });
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

  const createCategory = async () => {
    try {
      const data = await axios
        .post("http://localhost:8080/category", {
          name: categoryForm.name,
          description: categoryForm.description,
          image: categoryForm.image,
        })
        .then((res) => res.data);
      console.log("SUCCESFFULLY CREATE CATEGORY", data);
    } catch (error) {
      console.log("ERROR IN CREATECATEGORY FUNCTION");
    }
  };

  const [file, setFile] = useState<File | null>(null);
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("FILE", e);
    setFile(e.currentTarget.files![0]);
  };
  const handleCategoryForm = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
  };
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      const image = await axios.post("http://localhost:8080/upload", formData);
      console.log("IMAGE SUCCESFULLY UPLOADED", image.data.url);
      categoryForm.image = image.data.url;
      createCategory();
    } catch (error) {
      console.log("ERROR IN UPLOAD IMAGE FUNCTION", error);
    }
  };
  return (
    <catContext.Provider
      value={{
        categories,
        getCategories,
        handleFile,
        uploadImage,
        handleCategoryForm,
      }}
    >
      {children}
    </catContext.Provider>
  );
};
export default CatProvider;
