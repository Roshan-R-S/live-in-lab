import React from 'react';
import { User, ShoppingBag, MapPin, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import toast from 'react-hot-toast';

interface ProfileSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function ProfileSidebar({ activeTab, setActiveTab }: ProfileSidebarProps) {
  const { user, logout } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="text-center mb-6">
        <div className="h-24 w-24 rounded-full bg-green-100 mx-auto mb-4 flex items-center justify-center">
          <User className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-xl font-semibold">{user?.name}</h2>
        <p className="text-gray-600">{user?.email}</p>
      </div>
      
      <nav className="space-y-2">
        <button
          onClick={() => setActiveTab('profile')}
          className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
            activeTab === 'profile' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
          }`}
        >
          <User className="h-5 w-5" />
          Profile
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
            activeTab === 'orders' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
          }`}
        >
          <ShoppingBag className="h-5 w-5" />
          Orders
        </button>
        <button
          onClick={() => setActiveTab('addresses')}
          className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
            activeTab === 'addresses' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
          }`}
        >
          <MapPin className="h-5 w-5" />
          Addresses
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
            activeTab === 'settings' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
          }`}
        >
          <Settings className="h-5 w-5" />
          Settings
        </button>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </nav>
    </div>
  );
}