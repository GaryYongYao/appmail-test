import React, { useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="bg-white shadow-md w-full flex items-center justify-between px-6 py-4 fixed top-0 left-0 z-40">
      <div className="text-xl font-bold text-gray-800">Appmail</div>
      <div className="relative">
        <button
          onClick={handleDropdownToggle}
          className="flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-600 transition"
        >
          <span className="flex items-center">Create campaign with AI</span>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-lg z-50">
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              Select Country
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
              Edit Calendar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
