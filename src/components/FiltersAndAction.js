// src/components/FiltersAndActions.js

import React from 'react';

function FiltersAndActions() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
      {/* Filters */}
      <div className="flex space-x-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">This Year</label>
          <select className="w-32 bg-gray-100 border border-gray-300 text-gray-600 p-2 rounded-lg focus:outline-none">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select className="w-32 bg-gray-100 border border-gray-300 text-gray-600 p-2 rounded-lg focus:outline-none">
            <option value="all">All Locations</option>
            <option value="nyc">New York</option>
            <option value="la">Los Angeles</option>
            <option value="chicago">Chicago</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select className="w-32 bg-gray-100 border border-gray-300 text-gray-600 p-2 rounded-lg focus:outline-none">
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
          Create Order
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none">
          Add Customer
        </button>
        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 focus:outline-none">
          Add Service Provider
        </button>
      </div>
    </div>
  );
}

export default FiltersAndActions;
