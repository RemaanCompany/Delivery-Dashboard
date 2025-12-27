import { themesContext } from "../context/Themes";
import { useContext } from "react";

export default function Settings() {
  const themes = useContext(themesContext);

  return (
    <div className="grid gap-3 content-start w-full px-6 py-4 bg-[#eee]">
      <h1
        style={{ color: themes.themesState.secondColor }}
        className="text-[23px] font-semibold text-gray-800"
      >
        System Settings
      </h1>

      <div
        style={{ color: themes.themesState.secondColor }}
        className="p-4 rounded-xl bg-white shadow grid gap-4"
      >
        <div className="flex items-center gap-2 border-b border-gray-200 pb-2">
          <i className="fa-solid fa-calculator"></i>
          <h3 className="font-semibold">Pricing & Finance</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600">
              Minimum delivery price (SAR)
            </label>
            <input
              type="number"
              className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">
              Value Added Tax (VAT) %
            </label>
            <input
              type="number"
              className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">
              The application's percentage from the driver (%)
            </label>
            <input
              type="number"
              className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white shadow grid gap-3">
        <div
          style={{ color: themes.themesState.secondColor }}
          className="flex items-center gap-2 border-b border-gray-200 pb-2"
        >
          <i class="fa-solid fa-mobile-screen-button"></i>
          <h3 className="font-semibold">Application Status</h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center">
            <h3 className="text-sm text-gray-700 text-[15px] font-semibold">
              Enable maintenance mode (temporarily suspend orders)
            </h3>
          </div>
          <div className="w-10 h-5 bg-gray-300 rounded-full relative shadow">
            <div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5"></div>
          </div>
        </div>
        <span className="text-gray-600 text-[13px]">
          When enabled, users will see a "Updating…" message, and new orders
          will not be accepted.
        </span>
      </div>

      <div className="p-4 rounded-xl bg-white shadow grid gap-4">
        <div
          style={{ color: themes.themesState.secondColor }}
          className="flex items-center gap-2 border-b border-gray-200 pb-2"
        >
          <i className="fa-solid fa-headset"></i>
          <h3 className="font-semibold">Support & Contact</h3>
        </div>

        <div className="grid gap-3">
          <div>
            <label className="block text-sm text-gray-600">Support phone</label>
            <input
              type="number"
              className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">
              Privacy policy
            </label>
            <input
              type="text"
              value="https://remaan.app/privacy"
              className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>
      </div>
      <button className="text-[#eee] p-2 rounded-[5px] font-semibold w-fit text-[14px] duration-150 bg-[#01245A] hover:bg-[#001c46]">
        Save changes
      </button>
    </div>
  );
}
