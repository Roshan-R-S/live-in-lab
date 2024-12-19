import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User as UserIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { useStore } from '../store/useStore';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in production, this would be an API call
    if (isLogin) {
      // Check if it's an admin login
      if (email === 'roshanravi2k2@gmail.com' && password === 'admin123') {
        setUser({ id: 'admin1', email, name: 'Admin User', role: 'admin' });
        toast.success('Logged in as admin');
        navigate('/admin');
        return;
      }

      // Regular user login
      setUser({ id: '1', email, name: 'Demo User', role: 'user' });
      toast.success('Logged in successfully!');
      navigate('/');
    } else {
      toast.success('Account created successfully!');
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin ? 'Login to access your account' : 'Sign up to get started'}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input pl-10"
                  placeholder="Full Name"
                />
              </div>
            </div>
          )}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input pl-10"
                placeholder="Email address"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input pl-10"
                placeholder="Password"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-600 hover:text-green-700"
          >
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}