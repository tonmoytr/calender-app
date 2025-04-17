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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {days.map((day) => (
          <div
            key={day.id}
            onClick={(e) => handleClick(day, e)}
            className="border border-gray-600 rounded-[25px] p-4 min-h-[180px] flex flex-col justify-between hover:bg-gray-900 transition"
          >
            {/* Top section: date and count */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-base sm:text-lg font-semibold">
                {day.date}
              </div>
              {day.event_count >= 2 && (
                <div className="rounded-full border border-gray-600 w-9 h-9 flex items-center justify-center">
                  <div className="text-xs text-gray-400">
                    +{day.event_count}
                  </div>
                </div>
              )}
            </div>

            {/* Event section */}
            <div className="flex flex-col gap-2 mt-auto">
              {day.events.morning && (
                <div className="border border-green-600 text-sm sm:text-md px-4 py-2 rounded-2xl text-center">
                  {day.events.morning}
                </div>
              )}
              {day.events.evening && (
                <div className="border border-red-600 text-sm sm:text-md px-4 py-2 rounded-2xl text-center">
                  {day.events.evening}
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
          className="flex flex-col justify-between bg-black min-h-[30vh] border rounded-xl shadow-lg p-4 w-60 z-50"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="text-lg font-bold">Date {selectedDay.date}</div>
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {selectedDay.event_count === 0 ? (
              <div className="border border-gray-300 text-gray-500 text-sm px-5 py-6 rounded-2xl text-center flex items-center justify-center h-32">
                No events on this date.
              </div>
            ) : (
              <>
                {selectedDay.events.morning && (
                  <div className="border border-green-600 text-md px-5 py-3 rounded-2xl text-center mb-2">
                    {selectedDay.events.morning}
                  </div>
                )}
                {selectedDay.events.evening && (
                  <div className="border border-red-600 text-md px-5 py-3 rounded-2xl text-center mb-2">
                    {selectedDay.events.evening}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
