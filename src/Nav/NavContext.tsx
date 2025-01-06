import React, { createContext, useState, ReactNode, useContext } from "react";

type NavContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  searchSuggestions: ReactNode | null;
  setSearchSuggestions: React.Dispatch<React.SetStateAction<ReactNode | null>>;
};

export const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState<string>("");
  const [searchSuggestions, setSearchSuggestions] = useState<ReactNode>(null);

  return (
    <NavContext.Provider value={{ query, setQuery, searchSuggestions, setSearchSuggestions }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNav must be used within a NavProvider");
  }
  return context;
};
