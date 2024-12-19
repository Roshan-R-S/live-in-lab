import React from 'react';

const mockOrders = [
  { id: '1', date: '2024-03-15', status: 'Delivered', total: 1250 },
  { id: '2', date: '2024-03-10', status: 'Processing', total: 850 },
];

export default function OrderHistory() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Order History</h2>
      <div className="space-y-4">
        {mockOrders.map(order => (
          <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Order #{order.id}</span>
              <span className={`px-2 py-1 rounded-full text-sm ${
                order.status === 'Delivered' 
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              <p>Date: {order.date}</p>
              <p>Total: ₹{order.total}</p>
            </div>
            <button className="mt-2 text-green-600 hover:text-green-700 text-sm font-medium">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}