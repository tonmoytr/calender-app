import React from "react";

export default function Days() {
  return (
    <div
      className="grid grid-cols-7 gap-2 text-gray-300 text-center 
  max-[480px]:grid-cols-4 max-[480px]:text-xs 
  sm:grid-cols-7 sm:text-sm 
  md:text-base 
  lg:text-xl"
    >
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div
          key={day}
          className="px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 border border-gray-600 rounded-2xl"
        >
          <span>{day}</span>
        </div>
      ))}
    </div>
  );
}
