import React, { useState } from "react";
import CalendarCell from "./CalendarCell";
import { getCalendarDates, formatDate } from "../utils";
const Calendar = ({ events, currentDate, setCurrentDate, selectedCalendar, setSelectedCalendar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const calendars = ["Select Country", "Edit Calendar"];
  const handleMonthChange = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const days = getCalendarDates(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  return (
    <div className="calendar-container border border-gray-300 bg-gray-50 rounded-lg shadow-lg">
      <div className="flex justify-end items-center mb-4 bg-white py-4 px-8 rounded-lg">
        <div className="flex items-center m-auto">
          <button
            onClick={() => handleMonthChange(-1)}
            className="px-2 py-1 rounded hover:bg-gray-100"
          >
            &#8249;
          </button>
          <h2 className="mx-4 text-lg font-bold text-gray-800 uppercase">
            {currentDate.toLocaleString("default", { month: "short" })}{" "}
            {currentDate.getFullYear()}
          </h2>
          <button
            onClick={() => handleMonthChange(1)}
            className="px-2 py-1 rounded hover:bg-gray-100"
          >
            &#8250;
          </button>
        </div>

        <div className="relative float-left">
          <button
            className="px-4 py-2 border rounded-md bg-white text-gray-800 shadow-sm flex items-center"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {selectedCalendar} <span className="ml-2">&#9660;</span>
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border z-10">
              {calendars.map((calendar, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => {
                    setSelectedCalendar(calendar);
                    setDropdownOpen(false);
                  }}
                >
                  {calendar}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="calendar-header grid grid-cols-7 text-center font-bold text-gray-600">
        <span>Sunday</span>
        <span>Monday</span>
        <span>Tuesday</span>
        <span>Wednesday</span>
        <span>Thursday</span>
        <span>Friday</span>
        <span>Saturday</span>
      </div>

      <div className="calendar-grid grid grid-cols-7 w-full mt-2">
        {days.map((day, index) => (
          <CalendarCell
            key={index}
            day={day}
            events={events[formatDate(day.date)]}
            onAddEvent={(selectedDay) => {
              console.log(`Create campaign for: ${selectedDay.date}`);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
