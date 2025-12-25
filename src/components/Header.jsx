import clsx from "clsx";
import { themesContext } from "../context/Themes";
import { useContext } from "react";

export default function Header({ titles }) {
  const themes = useContext(themesContext);

  return (
    <div className="flex justify-between">
      <div className="grid">
        <h1
          className={clsx(
            `text-[25px] font-bold text-[${themes.themesState.secondColor}]`
          )}
        >
          {titles.title}
        </h1>
        <p
          className={clsx(
            `text-[15px] text-[${themes.themesState.thirdColor}] -mt-1`
          )}
        >
          {titles.subTitle}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <i
          className={clsx(
            `fa-solid fa-bell text-[${themes.themesState.thirdColor}]`
          )}
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
