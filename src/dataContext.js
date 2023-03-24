import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [dataCategory, setDataCategory] = useState([]);
  const [dataCatalog, setDataCatalog] = useState([]);
  console.log(dataCategory);
  console.log(dataCatalog); 
  return (
    <DataContext.Provider
      value={{ dataCategory, setDataCategory, dataCatalog, setDataCatalog }}
    >
      {children}
    </DataContext.Provider>
  );
};
