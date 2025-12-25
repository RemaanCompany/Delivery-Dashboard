import { useState, createContext } from "react";

export const pagesContext = createContext();

export default function PagesContext({ children }) {
  const [pagesState, setPagesState] = useState({
    pages: [
      {
        home: "Home",
        icon: <i className="fa-solid fa-house"></i>,
      },
      {
        users: "Users",
        icon: <i className="fa-solid fa-users"></i>,
      },
      {
        drivers: "Drivers",
        icon: <i className="fa-solid fa-motorcycle"></i>,
      },
      {
        locations: "Locations",
        icon: <i className="fa-solid fa-location-dot"></i>,
      },
      {
        orders: "Orders",
        icon: <i className="fa-solid fa-box-archive"></i>,
      },
      {
        finance: "Finance",
        icon: <i className="fa-solid fa-wallet"></i>,
      },
    ],
    selected: "Home",
  });

  const values = { pagesState, setPagesState };

  return (
    <pagesContext.Provider value={values}>{children}</pagesContext.Provider>
  );
}
