import { useState, createContext } from "react";

export const pagesContext = createContext();

export default function PagesContext({ children }) {
  const [pagesState, setPagesState] = useState({
    pages: [
      {
        pageName: "Home",
        icon: <i className="fa-solid fa-house"></i>,
      },
      {
        pageName: "Users",
        icon: <i className="fa-solid fa-users"></i>,
      },
      {
        pageName: "Drivers",
        icon: <i className="fa-solid fa-motorcycle"></i>,
      },
      {
        pageName: "Locations",
        icon: <i className="fa-solid fa-location-dot"></i>,
      },
      {
        pageName: "Orders",
        icon: <i className="fa-solid fa-box-archive"></i>,
      },
      {
        pageName: "Finance",
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
