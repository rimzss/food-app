"use client";
import axios from "axios";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { authContext } from "../authProvider";

interface ICreateCatContext {
  categories: any;
  getCategories: () => void;
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCategoryForm: (e: ChangeEvent<HTMLInputElement>) => void;
  uploadImage: () => void;
  deleteCategory: (catId: string) => void;
}
export const catContext = createContext<ICreateCatContext>({
  getCategories: () => {},
  handleFile: () => {},
  handleCategoryForm: () => {},
  uploadImage: () => {},
  deleteCategory: (catId: string) => {},
  categories: [],
});

const CatProvider = ({ children }: PropsWithChildren) => {
  const { token } = useContext(authContext);
  const [categories, setCategories] = useState<any>([]);
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
      setCategories([...categories, data.newCategory]);
    } catch (error) {
      console.log("ERROR IN CREATECATEGORY FUNCTION");
    }
  };

  const [file, setFile] = useState<File | null>(null);
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
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
      categoryForm.image = image.data.url;
      createCategory();
    } catch (error) {
      console.log("ERROR IN UPLOAD IMAGE FUNCTION", error);
    }
  };
  const deleteCategoryFromArray = (id: string) => {
    setCategories((oldCategories: any) => {
      return oldCategories.filter((obj: any) => obj._id !== id);
    });
  };
  const deleteCategory = async (catId: string) => {
    try {
      const data = await axios.delete(
        `http://localhost:8080/category/${catId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      deleteCategoryFromArray(catId);
    } catch (error) {}
  };
  return (
    <catContext.Provider
      value={{
        categories,
        getCategories,
        handleFile,
        uploadImage,
        handleCategoryForm,
        deleteCategory,
      }}
    >
      {children}
    </catContext.Provider>
  );
};
export default CatProvider;
