"use client";
import React, {
  ChangeEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { foodContext } from "../foodProvider";

interface ICreateSearchContext {
  openSeachModal: boolean;
  resultFoods: any;
  handleSearchOpen: () => void;
  handleSearchClose: () => void;
  searching: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const searchContext = createContext({} as ICreateSearchContext);
const SearchProvider = ({ children }: PropsWithChildren) => {
  const { foods } = useContext(foodContext);
  const [openSeachModal, setOpenSeachModal] = useState(false);
  const [resultFoods, setResultFoods] = useState<any>();
  const handleSearchOpen = () => {
    setResultFoods(foods);
    setOpenSeachModal(true);
  };
  const handleSearchClose = () => setOpenSeachModal(false);
  const searching = (e: ChangeEvent<HTMLInputElement>) => {
    setResultFoods(
      foods.filter((food: any) => food.name.includes(e.target.value))
    );
    console.log(e.target.value);
  };
  return (
    <searchContext.Provider
      value={{
        openSeachModal,
        handleSearchOpen,
        handleSearchClose,
        searching,
        resultFoods,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
