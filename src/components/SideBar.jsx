import clsx from "clsx";
import { pagesContext } from "../context/PagesContext";
import { themesContext } from "../context/Themes";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  const pages = useContext(pagesContext);
  const themes = useContext(themesContext);

  const handleSelectPage = (pageName) => {
    pages.setPagesState((prev) => {
      return { ...prev, selected: pageName };
    });
  };

  return (
    <div className="md:w-60 bg-white flex flex-col shadow-[3px_0_10px_rgba(0,0,0,0.04)]">
      <div className="flex items-center justify-center border-b border-gray-200">
        <img className="h-20 w-20 object-contain" src="/logo.jpeg" alt="logo" />
      </div>

      <div className="px-3 pt-4">
        <h1 className="text-[10px] font-medium tracking-wider text-gray-400 mb-2">
          OPERATIONS
        </h1>

        <div className="flex flex-col gap-0.5">
          {pages.pagesState.operationsPages.map((item, index) => {
            const isSelected = item.pageName === pages.pagesState.selected;

            return (
              <Link
                key={index}
                to={
                  item.pageName === "home"
                    ? "/"
                    : `/${item.pageName.toLowerCase()}`
                }
                onClick={() => handleSelectPage(item.pageName)}
              >
                <div
                  style={{
                    color: isSelected
                      ? themes.themesState.secondColor
                      : undefined,

                    backgroundColor: isSelected ? "#01255a27" : undefined,
                  }}
                  className={clsx(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-normal transition text-gray-600 hover:bg-gray-100"
                  )}
                >
                  <span className="text-[14px]">{item.icon}</span>
                  <span className="capitalize leading-none whitespace-nowrap">
                    {item.pageName}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="px-3 pt-6">
        <h1 className="text-[10px] font-medium tracking-wider text-gray-400 mb-2">
          SUPPORT & ADMIN
        </h1>

        <div className="flex flex-col gap-0.5">
          {pages.pagesState.adminPages.map((item, index) => {
            const isSelected = item.pageName === pages.pagesState.selected;

            return (
              <Link
                key={index}
                to={`/${item.pageName.toLowerCase()}`}
                onClick={() => handleSelectPage(item.pageName)}
              >
                <div
                  className={clsx(
                    "flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-normal transition",
                    isSelected
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  <span className="text-[14px]">{item.icon}</span>
                  <span className="capitalize leading-none whitespace-nowrap">
                    {item.pageName}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-auto px-3 pb-1">
        <button className="w-full flex items-center justify-center gap-2 py-1.5 rounded-md bg-red-600 text-white text-[13px] font-medium hover:bg-red-700 transition">
          <span>Log out</span>
          <i className="fa-solid fa-arrow-right-from-bracket text-[12px]"></i>
        </button>
      </div>
    </div>
  );
}
