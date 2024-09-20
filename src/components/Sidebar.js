// src/components/Sidebar.js

import React from 'react';
import { FaHome, FaUser, FaChartBar, FaCog } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen fixed top-0 left-0 z-10"> {/* Set fixed position and z-index */}
      <div className="p-6 text-lg font-bold">My Dashboard</div>
      <ul className="space-y-4 p-6">
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaHome />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaUser />
          <span>Users</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaChartBar />
          <span>Reports</span>
        </li>
        <li className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <FaCog />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
