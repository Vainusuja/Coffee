// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAdmin, children }) => {
  return isAdmin ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
