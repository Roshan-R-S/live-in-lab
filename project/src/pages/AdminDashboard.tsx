import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Server, Database, Settings, Users, Package, BarChart, LogOut } from 'lucide-react';
import AdminProducts from '../components/admin/AdminProducts';
import AdminServer from '../components/admin/AdminServer';
import AdminUsers from '../components/admin/AdminUsers';
import AdminAnalytics from '../components/admin/AdminAnalytics';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

const TABS = {
  SERVER: 'server',
  PRODUCTS: 'products',
  USERS: 'users',
  ANALYTICS: 'analytics'
} as const;

type TabType = typeof TABS[keyof typeof TABS];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>(TABS.SERVER);
  const navigate = useNavigate();
  const { logout } = useStore();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case TABS.SERVER:
        return <AdminServer />;
      case TABS.PRODUCTS:
        return <AdminProducts />;
      case TABS.USERS:
        return <AdminUsers />;
      case TABS.ANALYTICS:
        return <AdminAnalytics />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen shadow-md">
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">Admin Dashboard</h2>
          </div>
          <nav className="mt-4">
            <button
              onClick={() => setActiveTab(TABS.SERVER)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                activeTab === TABS.SERVER
                  ? 'bg-green-50 text-green-700 border-r-4 border-green-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Server className="h-5 w-5" />
              Server Status
            </button>
            <button
              onClick={() => setActiveTab(TABS.PRODUCTS)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                activeTab === TABS.PRODUCTS
                  ? 'bg-green-50 text-green-700 border-r-4 border-green-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Package className="h-5 w-5" />
              Products
            </button>
            <button
              onClick={() => setActiveTab(TABS.USERS)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                activeTab === TABS.USERS
                  ? 'bg-green-50 text-green-700 border-r-4 border-green-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Users className="h-5 w-5" />
              Users
            </button>
            <button
              onClick={() => setActiveTab(TABS.ANALYTICS)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left ${
                activeTab === TABS.ANALYTICS
                  ? 'bg-green-50 text-green-700 border-r-4 border-green-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <BarChart className="h-5 w-5" />
              Analytics
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-600 hover:bg-red-50 mt-4"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}