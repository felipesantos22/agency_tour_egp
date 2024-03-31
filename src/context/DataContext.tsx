import React, { ReactNode, createContext, useState } from "react";

interface CardContext {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<CardContext | undefined>(undefined);

interface CardProviderProps {
  children: ReactNode;
}

const CardProvider = ({ children }: CardProviderProps) => {

  const [filter, setFilter] = useState(""); 

  return (
    <DataContext.Provider value={{ filter, setFilter }}>
      {children}
    </DataContext.Provider>
  );
};

export default CardProvider;
