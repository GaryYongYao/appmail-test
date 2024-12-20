import React, { useState } from "react";
import { Calendar, Sidebar, Header } from "./components";
import "./styles/App.css";

const App = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth())
  );
  const [selectedCalendar, setSelectedCalendar] = useState("My Calendar");

  const events = {
    "2024-12-05": [{ type: "campaign", label: "Campaign Idea" }],
    "2024-12-20": [{ type: "campaign", label: "Campaign Idea 1" }],
    "2024-12-23": [
      {
        type: "holiday",
        label: "Christmas Eve",
        region: "United States, Canada",
      },
      {
        type: "holiday",
        label: "Christmas Eve",
        region: "United States, Canada",
      },
    ],
    "2024-12-25": [{ type: "holiday", label: "Christmas Day" }],
    "2024-12-31": [{ type: "holiday", label: "New Year's Eve" }],
  };

  return (
    <div className="min-h-screen flex items-center  justify-center py-8 bg-gray-100">
      <Sidebar />
      <Header />
      <Calendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        selectedCalendar={selectedCalendar}
        setSelectedCalendar={setSelectedCalendar}
        events={events}
      />
    </div>
  );
};

export default App;
