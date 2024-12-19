import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import ProfileInfo from '../components/profile/ProfileInfo';
import OrderHistory from '../components/profile/OrderHistory';
import AddressBook from '../components/profile/AddressBook';
import AccountSettings from '../components/profile/AccountSettings';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const { user } = useStore();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileInfo />;
      case 'orders':
        return <OrderHistory />;
      case 'addresses':
        return <AddressBook />;
      case 'settings':
        return <AccountSettings />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}