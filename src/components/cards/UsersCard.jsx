import { useContext } from "react";
import { themesContext } from "../../context/Themes";

export default function UsersCard({ info }) {
  const themes = useContext(themesContext);

  return (
    <div className="flex items-center px-3 py-2 gap-2 bg-white w-full h-full rounded-[10px] shadow content-start">
      {info.icon}
      <div className="grid content-start">
        <p
          className="text-[13px]"
          style={{ color: themes.themesState.thirdColor }}
        >
          {info.title}
        </p>
        <h1
          style={{ color: themes.themesState.secondColor }}
          className={`font-bold text-[23px] -mt-1.5`}
        >
          {info.amount}
        </h1>
      </div>
      {info?.percentage ? (
        <span className="text-green-600 text-[11px] self-end pb-1">
          {info?.percentage}
        </span>
      ) : null}
    </div>
  );
}
