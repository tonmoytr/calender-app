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
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      position: "absolute",
    });
    setSelectedDay(day);
  };

  const closeModal = () => setSelectedDay(null);

  return (
    <div className="my-8 relative">
      <div className="grid grid-cols-7 gap-4">
        {days.map((day) => (
          <div
            key={day.id}
            onClick={(e) => handleClick(day, e)}
            className="border rounded-[25px] p-3 min-h-[200px] flex flex-col justify-between"
          >
            <div className="flex justify-between">
              <div className="text-lg font-semibold">{day.date}</div>
              <div
                className={`${
                  day.event_count >= 2
                    ? "rounded-full border border-amber-100 p-2 w-[40px]"
                    : ""
                }`}
              >
                {day.event_count >= 2 && (
                  <div className="text-xs text-gray-400 text-sm mt-1">
                    +{day.event_count}
                  </div>
                )}
              </div>
            </div>

            <div className="mt- flex flex-col gap-1">
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
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selectedDay && (
        <div
          style={modalStyle}
          className="bg-black border rounded-xl shadow-lg p-4 w-60 z-50"
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
