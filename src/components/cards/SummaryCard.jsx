import { useContext } from "react";
import { themesContext } from "../../context/Themes";
import clsx from "clsx";

export default function SummaryCard({ info }) {
  const themes = useContext(themesContext);

  return (
    <div
      style={{
        borderBottomColor: info.borderColor || undefined,
        borderBottomWidth: info.borderColor ? "4px" : undefined,
        borderBottomStyle: info.borderColor ? "solid" : undefined,
      }}
      className="grid px-3 py-2 gap-1 bg-white w-full h-full rounded-[10px] shadow content-start"
    >
      <div className="flex justify-between items-center text-[13px]">
        <p style={{ color: themes.themesState.thirdColor }}>{info.title}</p>
        {info?.icon ? <p>{info.icon}</p> : null}
      </div>
      <h1
        style={{ color: themes.themesState.secondColor }}
        className={clsx(`font-bold text-[23px]`)}
      >
        {info.amount}
      </h1>
      {info?.percentageIcon ? (
        info?.percentageIcon ? (
          <span className={clsx(`text-green-600 text-[13px]`)}>
            {info?.percentageIcon} %{info.subTitle}
          </span>
        ) : (
          <span
            style={{ color: themes.themesState.thirdColor }}
            className={clsx(`text-[13px]`)}
          >
            {info.subTitle}
          </span>
        )
      ) : null}
    </div>
  );
}
