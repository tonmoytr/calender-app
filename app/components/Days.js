import React from "react";

export default function Days() {
  return (
    <div className="grid grid-cols-7 gap-2 text-gray-300 text-center">
      <div className="px-10 py-6 text-xl border-amber-50 border rounded-2xl">
        <span>Sun</span>
      </div>
      <div className="px-10 py-6 text-xl border-amber-50 border rounded-2xl">
        <span>Mon</span>
      </div>
      <div className="px-10 py-6 text-xl border-amber-50 border rounded-2xl">
        <span>Tue</span>
      </div>
      <div className="px-10 py-6 text-xl border-amber-50 border rounded-2xl">
        <span>Wed</span>
      </div>
      <div className="px-10 py-6 text-xl border-amber-50 border rounded-2xl">
        <span>Thu</span>
      </div>
      <div className="px-10 py-6 text-xl border-amber-50 border rounded-2xl">
        <span>Fri</span>
      </div>
      <div className="px-10 py-6 text-xl border-amber-50 border rounded-2xl">
        <span>Sat</span>
      </div>
    </div>
  );
}
