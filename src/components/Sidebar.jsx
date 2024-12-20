import React, { useState } from "react";
import {
  HomeIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`h-screen bg-gray-900 text-white fixed top-0 left-0 z-50 transition-all duration-300 ${
        expanded ? "w-64" : "w-24"
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="h-full flex flex-col items-center justify-center py-4">
        <div className="flex items-center justify-center w-full px-4 mb-4">
          <span className="ml-2 text-lg font-bold">AppMail</span>
        </div>
        <div className="flex flex-col items-center justify-center w-full space-y-4 px-4">
          <div
            className={`p-4 rounded-lg flex items-center${
              expanded ? " w-full" : ""
            } hover:border hover:border-gray-500`}
          >
            <HomeIcon className="h-6 w-6" />
            {expanded && <span className="ml-4">Home</span>}
          </div>
          <div
            className={`p-4 rounded-lg flex items-center${
              expanded ? " w-full" : ""
            } hover:border hover:border-gray-500`}
          >
            <EnvelopeIcon className="h-6 w-6" />
            {expanded && <span className="ml-4">Campaigns</span>}
          </div>
          <div
            className={`p-4 rounded-lg flex items-center${
              expanded ? " w-full" : ""
            } hover:border hover:border-gray-500`}
          >
            <StarIcon className="h-6 w-6" />
            <div className="ml-4 flex items-center w-full">
              {expanded && <span>My Tokens: </span>}
              <span> 23</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-auto space-y-4">
          <div
            className={`p-4 rounded-lg flex items-center${
              expanded ? " w-full" : ""
            } hover:border hover:border-gray-500`}
          >
            <ShoppingBagIcon className="h-6 w-6" />
            {expanded && <span className="ml-4">My Branding</span>}
          </div>
          <div
            className={`p-4 rounded-lg flex items-center${
              expanded ? " w-full" : ""
            } hover:border hover:border-gray-500`}
          >
            <CurrencyDollarIcon className="h-6 w-6" />
            {expanded && <span className="ml-4">Plan and Billing</span>}
          </div>
          <div
            className={`p-4 rounded-lg flex items-center${
              expanded ? " w-full" : ""
            } hover:border hover:border-gray-500`}
          >
            <QuestionMarkCircleIcon className="h-6 w-6" />
            {expanded && <span className="ml-4">Help & Support</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
