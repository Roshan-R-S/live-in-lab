import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-600 font-bold">
            ₹{product.price}/{product.unit}
          </span>
          <button
            onClick={handleViewDetails}
            className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-1 hover:bg-green-700 transition-colors"
          >
            <Eye className="h-4 w-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}