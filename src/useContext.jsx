import axios from "axios";
import { Children, createContext, useEffect } from "react";

export const dataContext = createContext();

export const dataProvider = ({ children }) => {
  return <dataContext.Provider value={{}}>{children}</dataContext.Provider>;
};
