"use client";
import React, { PropsWithChildren, createContext } from "react";

interface ICreateSearchContext {
  openSeachModal: boolean;
  handleSearchOpen: () => void;
  handleSearchClose: () => void;
}
export const searchContext = createContext({} as ICreateSearchContext);

const SearchProvider = ({ children }: PropsWithChildren) => {
  const [openSeachModal, setOpenSeachModal] = React.useState(false);
  const handleSearchOpen = () => setOpenSeachModal(true);
  const handleSearchClose = () => setOpenSeachModal(false);
  return (
    <searchContext.Provider
      value={{ openSeachModal, handleSearchOpen, handleSearchClose }}
    >
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider;
