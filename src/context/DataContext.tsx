import React, { ReactNode, createContext, useState } from "react";
import items from "../Data/Item";
import Item from "../Interfaces/Item";

interface CardContext {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filteredData: Item[];
  orderedData: Item[]; 
  sortPrice: () => void; 
  sortPriceDesc: () => void; 
  sortAlphabetically: () => void; 
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const DataContext = createContext<CardContext | undefined>(undefined);

interface CardProviderProps {
  children: ReactNode;
}

const CardProvider = ({ children }: CardProviderProps) => {
  const [filter, setFilter] = useState("");
  const [orderedData, setOrderedData] = useState<Item[]>([]); // Adicionado estado para os dados ordenados

  const filteredData = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const sortPrice = () => {
    const sortedItems = [...filteredData].sort((a, b) => a.price - b.price);
    setOrderedData(sortedItems); // Atualize os dados ordenados
  };

  const sortPriceDesc = () => {
    const sortedItems = [...filteredData].sort((a, b) => b.price - a.price); // Corrigido o cálculo da ordenação descendente
    setOrderedData(sortedItems); // Atualize os dados ordenados
  };

  const sortAlphabetically = () => {
    const sortedItems = [...filteredData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setOrderedData(sortedItems); // Atualize os dados ordenados
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "1") {
      sortPrice();
    } else if (value === "2") {
      sortPriceDesc();
    } else if (value === "3") {
      sortAlphabetically();
    }
  };

  return (
    <DataContext.Provider
      value={{
        filter,
        setFilter,
        filteredData,
        orderedData, // Alterado para usar dados ordenados
        sortPrice,
        sortPriceDesc,
        sortAlphabetically,
        handleSortChange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default CardProvider;
