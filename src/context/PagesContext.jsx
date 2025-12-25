import { useState, createContext } from "react";

export const pagesContext = createContext();

export default function PagesContext({ children }) {
  const [pagesState, setPagesState] = useState({
    home: "Home",
    users: "Users",
    drivers: "Drivers",
    locations: "Locations",
    orders: "Orders",
    finance: "Finance",
    selected: "Home",
  });

  const values = { pagesState, setPagesState };

  return (
    <pagesContext.Provider value={values}>{children}</pagesContext.Provider>
  );
}
