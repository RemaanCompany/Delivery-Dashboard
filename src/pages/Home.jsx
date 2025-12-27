import clsx from "clsx";
import { themesContext } from "../context/Themes";
import { useContext } from "react";
import Header from "../components/Header";
import SummaryCard from "../components/cards/SummaryCard";
import MapView from "../components/MapView";

export default function Home() {
  const themes = useContext(themesContext);

  const cardInfo = [
    {
      title: "Active orders",
      amount: 145,
      subTitle: "2.3 Crowded now",
      icon: <i className="fa-solid fa-box-open text-orange-500"></i>,
      percentageIcon: <i className="fa-solid fa-arrow-up text-[11px]"></i>,
    },
    {
      title: "Free drivers",
      amount: 145,
      subTitle: "Out of 34 driver",
      icon: <i className={clsx(`fa-solid fa-motorcycle text-[#01245A]`)}></i>,
    },
    {
      title: "Today's revenue",
      amount: 145,
      subTitle: "2.3 Compared to yesterday",
      icon: <i className="fa-solid fa-dollar-sign text-green-600"></i>,
      percentageIcon: <i className="fa-solid fa-arrow-up text-[11px]"></i>,
    },
    {
      title: "Average rating",
      amount: 4.8,
      subTitle: "Excellent",
      icon: <i className="fa-solid fa-star text-orange-500"></i>,
    },
  ];

  const latestOrders = [
    {
      orderNumber: "VGDG-FYIE",
      customer: "Zyied",
      driver: "Mohammed",
      time: "Since 4 minutes",
      price: "322 S.R",
      status: "On the Way",
    },
    {
      orderNumber: "VGDG-FYIE",
      customer: "Zyied",
      driver: "Mohammed",
      time: "Since 4 minutes",
      price: "332 S.R",
      status: "Waiting for Drive",
    },
    {
      orderNumber: "VGDG-FYIE",
      customer: "Zyied",
      driver: "Mohammed",
      time: "Since 4 minutes",
      price: "532 S.R",
      status: "Delivered",
    },
    {
      orderNumber: "VGDG-FYIE",
      customer: "Zyied",
      driver: "Mohammed",
      time: "Since 4 minutes",
      price: "322 S.R",
      status: "On the Way",
    },
    {
      orderNumber: "VGDG-FYIE",
      customer: "Zyied",
      driver: "Mohammed",
      time: "Since 4 minutes",
      price: "332 S.R",
      status: "Waiting for Drive",
    },
    {
      orderNumber: "VGDG-FYIE",
      customer: "Zyied",
      driver: "Mohammed",
      time: "Since 4 minutes",
      price: "532 S.R",
      status: "Delivered",
    },
  ];

  return (
    <div
      className={clsx("grid gap-3 content-start w-full px-6 py-2 bg-[#eee]")}
    >
      <Header
        titles={{
          title: "Dashboard",
          subTitle: "Hi Ahmed, here is the summary of today’s operations.",
        }}
      />

      <div className="flex gap-4">
        {cardInfo.map((item, index) => {
          return <SummaryCard key={index} info={item} />;
        })}
      </div>

      <div className="flex gap-3">
        <div className="p-3 rounded-[10px] shadow bg-white flex-3">
          <h1
            style={{ color: themes.themesState.secondColor }}
            className="text-[17px] font-semibold"
          >
            Driver distribution and orders (live map)
          </h1>
          <MapView />
        </div>

        <div className="p-3 rounded-[10px] shadow bg-white flex-2 flex flex-col justify-between h-full">
          <h1
            style={{ color: themes.themesState.secondColor }}
            className={clsx(`text-[15px] font-semibold`)}
          >
            Order Performance (Daily Hours)
          </h1>
        </div>
      </div>

      <div className="p-3 shadow rounded-[10px] bg-white flex-2 flex flex-col justify-between h-full">
        <h1
          style={{ color: themes.themesState.secondColor }}
          className="text-[17px] font-semibold"
        >
          Latest orders received
        </h1>

        <table
          className="text-[13px] border-separate w-full"
          style={{
            color: themes.themesState.thirdColor,
            borderSpacing: "0 12px",
          }}
        >
          <thead>
            <tr className="text-left">
              {[
                "Order number",
                "Customer",
                "Driver",
                "Time",
                "Price",
                "Status",
              ].map((item, index) => {
                return (
                  <th key={index} className="py-1 px-2 whitespace-nowrap">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="font-semibold">
            {latestOrders.map((item, index) => (
              <tr key={index} className="rounded-lg bg-white">
                <td className="py-1 px-2">
                  <span>{item.orderNumber}</span>
                </td>
                <td className="py-1 px-2">
                  <span>{item.customer}</span>
                </td>
                <td className="py-1 px-2">
                  <span>{item.driver}</span>
                </td>
                <td className="py-1 px-2">
                  <span>{item.time}</span>
                </td>
                <td className="py-1 px-2">
                  <span>{item.price}</span>
                </td>
                <td>
                  <span
                    className="py-1 px-2 rounded-[10px]"
                    style={{
                      color:
                        item.status === "Delivered"
                          ? "#16A34A"
                          : item.status === "On the Way"
                          ? "#F59E0B"
                          : "#2563EB",
                      backgroundColor:
                        item.status === "Delivered"
                          ? "#BBF7D0"
                          : item.status === "On the Way"
                          ? "#FEF3C7"
                          : "#BFDBFE",
                    }}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{ color: themes.themesState.secondColor }}
          className="flex items-center gap-1 mt-1.5 text-[13px] border-t border-gray-300 pt-2"
        >
          <button
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#eee")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
            className="p-2 border border-gray-200 rounded cursor-pointer duration-150"
          >
            Next
          </button>
          <span
            style={{ backgroundColor: themes.themesState.secondColor }}
            className="w-8 h-8 flex items-center justify-center border text-white border-gray-200 cursor-pointer rounded duration-150"
          >
            1
          </span>
          <span className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded cursor-pointer duration-150">
            2
          </span>
          <button
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#eee")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
            className="p-2 border border-gray-200 rounded cursor-pointer duration-150"
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}
