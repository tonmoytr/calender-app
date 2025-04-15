"use client";

import { useEffect, useState } from "react";

export default function Month() {
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalStyle, setModalStyle] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/month.json");
      const data = await res.json();
      setDays(data);
    };

    fetchData();
  }, []);

  const handleClick = (day, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setModalStyle({
      top: rect.top + window.scrollY + "px",
      left: rect.left + window.scrollX + "px",
      position: "absolute",
    });
    setSelectedDay(day);
  };

  const closeModal = () => setSelectedDay(null);

  return (
    <div className="p-4 relative">
      <div className="grid grid-cols-7 gap-4">
        {days.map((day) => (
          <div
            key={day.id}
            onClick={(e) => handleClick(day, e)}
            className="border rounded-lg p-3 min-h-[100px] flex flex-col justify-between cursor-pointer hover:bg-gray-50"
          >
            <div className="text-lg font-semibold">{day.date}</div>

            <div className="mt-2 flex flex-col gap-1">
              {day.events.morning && (
                <div className="border border-green-500 text-sm p-1 rounded">
                  🌅 {day.events.morning}
                </div>
              )}
              {day.events.evening && (
                <div className="border border-red-500 text-sm p-1 rounded">
                  🌇 {day.events.evening}
                </div>
              )}
              {day.event_count >= 2 && (
                <div className="text-xs text-gray-500 mt-1">
                  Total Events: {day.event_count}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDay && (
        <div
          style={modalStyle}
          className="bg-white border rounded-xl shadow-lg p-4 w-60 z-50"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-lg font-bold">Date {selectedDay.date}</div>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {selectedDay.events.morning && (
              <div className="border border-green-500 text-sm p-1 rounded">
                🌅 {selectedDay.events.morning}
              </div>
            )}
            {selectedDay.events.evening && (
              <div className="border border-red-500 text-sm p-1 rounded">
                🌇 {selectedDay.events.evening}
              </div>
            )}
            {selectedDay.event_count >= 2 && (
              <div className="text-xs text-gray-500 mt-1">
                Total Events: {selectedDay.event_count}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
