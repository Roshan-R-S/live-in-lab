import React from 'react';

export default function AccountSettings() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
      <div className="space-y-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Change Password</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <input
                type="password"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                className="input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                className="input"
              />
            </div>
            <button className="btn btn-primary w-full sm:w-auto">
              Change Password
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <span>Email notifications for orders</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <span>Email notifications for promotions</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
              <span>SMS notifications for order updates</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}