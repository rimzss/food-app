import React, { createContext } from "react";

export const userContext = createContext(null);

const userProvider = ({ children }:React.ReactNode) => {
    return (
        <userContext.Provider>
    )
};
