export default function Visa() {
  return (
    <div className="relative rounded-2xl lg:p-4 p-3 text-[#eeeeeeea] bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg">
      <div className="flex justify-between items-start">
        <i className="fa-brands fa-cc-visa font-semibold tracking-wide text-xl"></i>
        <i className="fa-solid fa-wifi rotate-90 text-sm"></i>
      </div>

      <div className="mt-4 text-sm tracking-widest">8821 **** **** ****</div>

      <div className="mt-4 flex justify-between">
        <div className="grid">
          <p className="text-xs opacity-80">Current Balance</p>
          <h2 className="text-xl font-bold mt-0.5 text-white">SAR 180,000</h2>
        </div>
        <p className="self-end text-[11px]">Online payment</p>
      </div>
    </div>
  );
}
