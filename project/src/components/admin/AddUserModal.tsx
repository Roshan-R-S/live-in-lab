import React, { useState } from 'react';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (user: NewUser) => void;
}

export interface NewUser {
  name: string;
  email: string;
  role: 'admin' | 'farmer' | 'user';
  password: string;
}

export default function AddUserModal({ isOpen, onClose, onAdd }: AddUserModalProps) {
  const [formData, setFormData] = useState<NewUser>({
    name: '',
    email: '',
    role: 'user',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: '', email: '', role: 'user', password: '' });
    toast.success('User added successfully!');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="input"
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as NewUser['role'] })}
              className="input"
              required
            >
              <option value="user">User</option>
              <option value="farmer">Farmer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}