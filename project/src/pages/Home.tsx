import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
          alt="Fresh organic produce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-5xl font-bold mb-6">Fresh Organic Products for Your Healthy Life</h1>
            <p className="text-xl mb-8">Discover nature's finest selection of organic fruits, vegetables, and more.</p>
            <Link
              to="/products"
              className="bg-green-600 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-green-700 transition-colors"
            >
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
              <p className="text-gray-600">All our products are certified organic and naturally grown</p>
            </div>
            <div className="text-center p-6">
              <Truck className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free delivery on orders above ₹500</p>
            </div>
            <div className="text-center p-6">
              <ShieldCheck className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Quality checked products from trusted farmers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name.toLowerCase()}`}
                className="group relative rounded-lg overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  {
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80'
  },
  {
    name: 'Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80'
  },
  {
    name: 'Dairy',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80'
  },
  {
    name: 'Millets',
    image: 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?auto=format&fit=crop&q=80'
  }
];