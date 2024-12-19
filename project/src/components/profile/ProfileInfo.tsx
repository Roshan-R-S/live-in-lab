import React from 'react';
import { useStore } from '../../store/useStore';

export default function ProfileInfo() {
  const { user } = useStore();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={user?.name}
            className="input"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={user?.email}
            className="input"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            className="input"
          />
        </div>
        <button className="btn btn-primary w-full sm:w-auto">
          Update Profile
        </button>
      </div>
    </div>
  );
}