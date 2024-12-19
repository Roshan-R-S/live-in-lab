import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Sprout, LogOut } from 'lucide-react';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { cart, user, searchQuery, setSearchQuery, logout } = useStore();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/products?search=${searchQuery}`);
  };

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };
  
  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8" />
            <span className="font-bold text-xl">FC Choice</span>
          </Link>
          
          <div className="flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button type="submit" className="absolute right-3 top-2.5">
                  <Search className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/products" className="hover:text-green-200">Products</Link>
            <Link to="/about" className="hover:text-green-200">About</Link>
            <Link to="/contact" className="hover:text-green-200">Contact</Link>
            <Link to="/cart" className="relative hover:text-green-200">
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to={user.role === 'admin' ? '/admin' : '/profile'} className="hover:text-green-200">
                  <User className="h-6 w-6" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-green-200"
                >
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="hover:text-green-200">
                <User className="h-6 w-6" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}