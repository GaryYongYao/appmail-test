import React, { useState } from "react";

const CalendarCell = ({ day, events, onAddEvent }) => {
  const [hovered, setHovered] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openEventIndex, setOpenEventIndex] = useState(null);

  return (
    <div
      className={`calendar-cell border rounded-md relative flex flex-col items-center justify-start ${
        day.isCurrentMonth
          ? day.isToday
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 bg-white"
          : "border-gray-200 bg-gray-100 text-gray-400"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setDropdownOpen(false);
        setOpenEventIndex(null);
      }}
    >
      <div className={`date-label text-gray-800 text-sm font-bold text-center${day.isToday ? " bg-gray-800 text-white rounded-xl flex items-center justify-center" : " text-gray-800"}`}>
        {day.date.toLocaleString("default", { month: "short" })}{" "}
        {day.date.getDate()}
      </div>

      {events &&
        events.map((event, idx) => (
          <div
            key={idx}
            className={`event-label relative w-full text-lg font-medium text-center font-bold px-2 py-2 rounded-md mt-2 ${
              event.type === "holiday"
                ? "bg-red-500 text-white"
                : "bg-yellow-100 text-gray-800"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setOpenEventIndex(idx === openEventIndex ? null : idx); // Toggle dropdown for the clicked event
            }}
          >
            {event.label}

            {openEventIndex === idx && (
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md text-left border mt-1 z-10 p-4">
                {[
                  "Unlock Exclusive Winter Deals!",
                  "Winter Must-haves",
                  "Our top 3 winter essentials",
                ].map((detail, detailIdx) => (
                  <div
                    key={detailIdx}
                    className="text-sm text-gray-800 py-1 hover:bg-gray-100 rounded-md"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

      {(hovered || dropdownOpen) && (
        <button
          className={`m-auto mt-4 bg-white border border-gray-300 rounded-md w-12 h-12 self-center flex items-center justify-center shadow text-xxl hover:bg-gray-100`}
          onClick={(e) => {
            e.stopPropagation();
            setDropdownOpen((prev) => !prev);
          }}
        >
          +
        </button>
      )}

      {dropdownOpen && (
        <div className="absolute bottom-12 left-2 bg-white shadow-lg rounded-md border z-10">
          <button
            className="block w-64 text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
            onClick={() => onAddEvent(day)}
          >
            Create campaign with AI
          </button>
        </div>
      )}
    </div>
  );
};

export default CalendarCell;
