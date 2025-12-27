import Header from "../components/Header";
import { themesContext } from "../context/Themes";
import { useContext } from "react";

export default function Admins() {
  const themes = useContext(themesContext);

  const managers = [
    {
      name: "Mohammed",
      emailAdrreas: "Mohammed@gmail.com",
      role: "General Manager",
      lastLog: "just now",
      status: "Active",
    },
    {
      name: "Ahmed",
      emailAdrreas: "Ahmed@gmail.com",
      role: "Manager",
      lastLog: "Before 42 seconds",
      status: "Active",
    },
    {
      name: "Yasser",
      emailAdrreas: "Yasser@gmail.com",
      role: "Finance",
      lastLog: "just now",
      status: "suspended",
    },
  ];

  return (
    <div className="grid gap-3 h-screen content-start w-full px-6 py-4 bg-[#eee]">
      <Header
        titles={{
          title: "Admins",
          subTitle: "Here you can see the other managers and see their status.",
        }}
      />

      <div className="flex justify-between items-center mt-2 p-3 rounded-[10px] shadow">
        <h2 className="text-[17px] font-semibold">admin staff list</h2>
        <button
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#022150")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              themes.themesState.secondColor)
          }
          className="flex gap-1 text-white rounded-[5px] items-center px-2 py-1 shadow cursor-pointer duration-150 text-[13px]"
          style={{ backgroundColor: themes.themesState.secondColor }}
        >
          <i class="fa-solid fa-plus"></i>
          <span>Add new member</span>
        </button>
      </div>

      <table
        className="text-[13px] border-collapse"
        style={{ color: themes.themesState.thirdColor }}
      >
        <thead>
          <tr className="text-left border-b border-gray-200">
            {[
              "NAME",
              "EMAIL ADDRESS",
              "ROLE",
              "LAST LOGIN",
              "STATUS",
              "ACTIONS",
            ].map((item, index) => (
              <th
                key={index}
                className="py-2 px-3 whitespace-nowrap text-sm font-medium"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="font-semibold">
          {managers.map((item, index) => {
            return (
              <tr
                key={index}
                className="border-t border-b border-gray-100 my-3 rounded-lg bg-white"
              >
                <td className="py-4 px-5 whitespace-nowrap">{item.name}</td>
                <td className="py-4 px-5 text-[11px] whitespace-nowrap">
                  {item.emailAdrreas}
                </td>
                <td className="py-4 px-5 whitespace-nowrap">
                  <span
                    style={{
                      backgroundColor: themes.themesState.secondColor,
                      color: "#eee",
                    }}
                    className="p-2 rounded-[5px]"
                  >
                    {item.role}
                  </span>
                </td>
                <td className="py-4 px-5 whitespace-nowrap">{item.lastLog}</td>
                <td
                  style={{
                    color: item.status == "Active" ? "#04c704" : "#f50000",
                  }}
                  className="py-4 px-5 whitespace-nowrap"
                >
                  {item.status}
                </td>
                {item.role !== "General Manager" ? (
                  <td className="whitespace-nowrap cursor-pointer">
                    <span className="border border-gray-300 py-1 px-2 ">
                      Edit
                    </span>
                  </td>
                ) : (
                  <td className="py-1 px-2 whitespace-nowrap">_ _</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex gap-1 text-amber-800 bg-yellow-100 p-2 rounded-[5px] items-center">
        <i class="fa-solid fa-circle-exclamation"></i>
        <p className="text-[13px]">
          <span className="font-bold">Note:</span> The
          <span className="font-bold"> General Manager </span>has access to all
          pages and settings.
          <span className="font-bold"> Customer Srvice</span> staff can only
          view "Tickets" and "Users". Permissions can be modified in Settings.
        </p>
      </div>
    </div>
  );
}
