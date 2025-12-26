import clsx from "clsx";
import { themesContext } from "../context/Themes";
import { useContext } from "react";

export default function Header({ titles }) {
  const themes = useContext(themesContext);

  return (
    <div className="flex justify-between">
      <div className="grid">
        <h1
          style={{ color: themes.themesState.secondColor }}
          className={clsx(`text-[25px] font-bold`)}
        >
          {titles.title}
        </h1>
        <p
          style={{ color: themes.themesState.thirdColor }}
          className={clsx(`text-[15px] -mt-1`)}
        >
          {titles.subTitle}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <i
          style={{ color: themes.themesState.thirdColor }}
          className={clsx(`fa-solid fa-bell`)}
        ></i>
        <img
          className="rounded-full w-12 h-12 shadow-md p-1"
          src="public/Anonymous-user.jpg"
          alt="user-avatar"
        />
      </div>
    </div>
  );
}
