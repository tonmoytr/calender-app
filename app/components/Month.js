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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
          <div className="bg-black border border-gray-700 rounded-xl shadow-xl w-[90%] min-h-[30vh] flex flex-col justify-between gap-10 max-w-sm p-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-white">
                Date {selectedDay.date}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
              {selectedDay.event_count === 0 ? (
                <div className="border border-gray-600 text-gray-400 text-sm px-5 py-6 rounded-2xl text-center">
                  No events on this date.
                </div>
              ) : (
                <>
                  {selectedDay.events.morning && (
                    <div className="border border-green-600 text-md px-5 py-3 rounded-2xl text-center">
                      {selectedDay.events.morning}
                    </div>
                  )}
                  {selectedDay.events.evening && (
                    <div className="border border-red-600 text-md px-5 py-3 rounded-2xl text-center">
                      {selectedDay.events.evening}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
