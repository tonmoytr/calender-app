import { SlLocationPin } from "react-icons/sl";
import Days from "./Days";
import Month from "./Month";
import MonthDropdown from "./MonthDropdown";
import YearDropdown from "./YearDropdown";

export default function Calender() {
  return (
    <div className="container mx-auto py-[10%] text-gray-300">
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-20 w-full">
        {/* Left: Month + Year Dropdowns */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5">
          <div className="sm:pr-5">
            <MonthDropdown />
          </div>
          <div className="sm:px-5">
            <YearDropdown />
          </div>
        </div>

        {/* Right: Location */}
        <div className="bg-amber-300 border border-amber-50 rounded-2xl px-6 py-3 text-black flex items-center justify-center w-full sm:w-auto">
          <SlLocationPin className="w-5 h-5 sm:w-6 sm:h-6 text-black mr-2" />
          <p className="text-base sm:text-lg">Patrick SFB</p>
        </div>
      </div>

      <div>
        <Days></Days>
      </div>
      <div className="my-[8%">
        <Month></Month>
      </div>
    </div>
  );
}
