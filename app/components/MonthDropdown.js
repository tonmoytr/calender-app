"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function MonthDropdown() {
  const [selectedMonth, setSelectedMonth] = useState("Dec");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (month) => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[180px]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border rounded-2xl flex justify-between items-center px-7 py-3 cursor-pointer"
      >
        <p>{selectedMonth}</p>
        <FaChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-300" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-black border rounded-xl shadow-md max-h-60 overflow-auto">
          {months.map((month) => (
            <div
              key={month}
              onClick={() => handleSelect(month)}
              className="px-6 py-2 hover:bg-gray-100 hover:text-black cursor-pointer"
            >
              {month}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
