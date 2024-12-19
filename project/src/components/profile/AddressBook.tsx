import React from 'react';

const mockAddresses = [
  {
    id: '1',
    type: 'Home',
    address: '123 Main St, Green Valley',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600001',
    phone: '+91 98765 43210'
  },
  {
    id: '2',
    type: 'Office',
    address: '456 Work Plaza, Tech Park',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600002',
    phone: '+91 98765 43211'
  }
];

export default function AddressBook() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Saved Addresses</h2>
        <button className="btn btn-primary">
          Add New Address
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {mockAddresses.map(address => (
          <div key={address.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="font-semibold">{address.type}</span>
                <p className="text-gray-600 mt-1">
                  {address.address}<br />
                  {address.city}, {address.state} - {address.pincode}<br />
                  Phone: {address.phone}
                </p>
              </div>
              <div className="space-x-2">
                <button className="text-blue-600 hover:text-blue-700">Edit</button>
                <button className="text-red-600 hover:text-red-700">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}