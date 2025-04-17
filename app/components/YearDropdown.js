"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const months = [
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
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
        <FaChevronDown className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 text-gray-300" />
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
