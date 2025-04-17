import { SlLocationPin } from "react-icons/sl";
import Days from "./Days";
import Month from "./Month";
import MonthDropdown from "./MonthDropdown";
import YearDropdown from "./YearDropdown";

export default function Calender() {
  return (
    <div className="container mx-auto py-[10%] text-gray-300">
      <div className="flex justify-between mb-20">
        <div className="w-[350px] flex justify-between gap-5">
          {/* <div className="w-[180px] border rounded-2xl flex justify-between px-7 py-3">
            <div>
              <p>Dec</p>
            </div>
            <div>
              <span>
                <FaChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-300" />
              </span>
            </div>
          </div> */}
          <div className="pr-5">
            <MonthDropdown />
          </div>
          <div className="px-5">
            <YearDropdown></YearDropdown>
          </div>
        </div>
        <div className="bg-amber-300 w-[200px] border-amber-50 rounded-2xl px-7 py-3 text-black">
          <span>
            <SlLocationPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black inline mr-3" />
          </span>
          <p className="inline text-lg">Patrick SFB</p>
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
