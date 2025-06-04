import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import AdminLogin from './Components/AdminLogin';
import './index.css';

const Main = () => {
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      const stored = localStorage.getItem('adminAuth');
      return stored ? JSON.parse(stored).isLoggedIn : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('adminAuth', JSON.stringify({ isLoggedIn: isAdmin }));
  }, [isAdmin]);

  const handleLogin = (email, password) => {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('adminAuth');
  };

  
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isAdmin) {
        handleLogout(); 
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isAdmin]);

  const ProtectedRoute = ({ children }) => {
    return isAdmin ? children : <Navigate to="/login" replace />;
  };

  const AuthOnlyRoute = ({ children }) => {
    return !isAdmin ? children : <Navigate to="/home" replace />;
  };

  return (
    <Router>
      <div className="app">
        {isAdmin && <Navbar onLogout={handleLogout} isAdmin={isAdmin} />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={
              <AuthOnlyRoute>
                <AdminLogin onLogin={handleLogin} onLogout={handleLogout} isAdmin={isAdmin} />
              </AuthOnlyRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/menu"
            element={
              <ProtectedRoute>
                <Menu />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<Navigate to={isAdmin ? "/home" : "/login"} replace />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
