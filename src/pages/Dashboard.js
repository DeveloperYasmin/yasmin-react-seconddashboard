// src/pages/Dashboard.js

import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FiltersAndActions from '../components/FiltersAndAction'; // Import this new component
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import DashboardStats from '../components/DashboardStats';

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        {/* Filters and Actions Section */}
        <FiltersAndActions />

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dashboard Stats */}
          <DashboardStats />

          {/* Charts */}
          <BarChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
