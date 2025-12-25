import { useState, createContext } from "react";

export const themesContext = createContext();

export default function PagesContext({ children }) {
  const [themesState, setThemesState] = useState({
    manColor: "#fff",
    secondColor: "#01245A",
    thirdColor: "#eee",
  });

  const values = { themesState, setThemesState };

  return (
    <themesContext.Provider value={values}>{children}</themesContext.Provider>
  );
}
