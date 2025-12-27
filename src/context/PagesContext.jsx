import { useState, createContext } from "react";

export const pagesContext = createContext();

export default function PagesContext({ children }) {
  const [pagesState, setPagesState] = useState({
    operationsPages: [
      {
        pageName: "home",
        icon: <i className="fa-solid fa-house"></i>,
      },
      {
        pageName: "users",
        icon: <i className="fa-solid fa-users"></i>,
      },
      {
        pageName: "drivers",
        icon: <i className="fa-solid fa-motorcycle"></i>,
      },
      {
        pageName: "locations",
        icon: <i className="fa-solid fa-location-dot"></i>,
      },
      {
        pageName: "orders",
        icon: <i className="fa-solid fa-box-archive"></i>,
      },
      {
        pageName: "finance",
        icon: <i className="fa-solid fa-wallet"></i>,
      },
    ],
    adminPages: [
      { pageName: "financial", icon: <i className="fa-solid fa-wallet"></i> },
      { pageName: "support Center", icon: <i class="fa-solid fa-headset"></i> },
      { pageName: "notification", icon: <i class="fa-solid fa-bell"></i> },
      { pageName: "admins", icon: <i class="fa-solid fa-user-shield"></i> },
      { pageName: "settings", icon: <i class="fa-solid fa-gear"></i> },
    ],
    selected: window.location.pathname.split("/")[1] || "home",
  });

  const values = { pagesState, setPagesState };

  return (
    <pagesContext.Provider value={values}>{children}</pagesContext.Provider>
  );
}
