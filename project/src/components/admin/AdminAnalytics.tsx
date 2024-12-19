import React from 'react';
import { TrendingUp, Users, ShoppingBag, DollarSign } from 'lucide-react';

export default function AdminAnalytics() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Sales Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Total Sales</p>
              <h3 className="text-2xl font-bold">₹45,231</h3>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>

        {/* Total Orders Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <h3 className="text-2xl font-bold">156</h3>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-blue-600">+8% from last month</p>
        </div>

        {/* Total Users Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold">2,345</h3>
            </div>
            <div className="p-3 bg-purple-100 rounded-full">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-purple-600">+15% from last month</p>
        </div>

        {/* Growth Rate Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Growth Rate</p>
              <h3 className="text-2xl font-bold">+23%</h3>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-sm text-yellow-600">+5% from last month</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            {/* Placeholder for sales chart */}
            <p className="text-gray-500">Sales Chart Coming Soon</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">User Growth</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            {/* Placeholder for user growth chart */}
            <p className="text-gray-500">User Growth Chart Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}