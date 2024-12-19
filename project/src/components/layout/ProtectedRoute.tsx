import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const user = useStore((state) => state.user);
  
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
}