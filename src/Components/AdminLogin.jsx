import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ onLogin, onLogout, isAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = onLogin(email, password);
    if (success) {
      navigate("/home");
    } else {
      alert("⚠️ Access Denied: Invalid Credentials");
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  // Auto logout when page/tab is closed or refreshed
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isAdmin) {
        onLogout();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isAdmin, onLogout]);

  return (
    <div className="admin-wrapper">
      <div className="admin-login-glass">
        {isAdmin ? (
          <div className="admin-loggedin-panel">
            <h2>🔒 Admin Access Granted</h2>
            <p>Welcome, Superuser. You are already logged in.</p>
            <button onClick={handleLogout} className="logout-button">
              Terminate Session
            </button>
          </div>
        ) : (
          <>
            <h2 className="admin-title">Admin Access</h2>
            <p className="admin-subtitle">Restricted Area. Authorized Personnel Only.</p>
            <form onSubmit={handleLogin} className="admin-form-styled">
              <input
                type="email"
                placeholder="👤 Admin Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="admin-input-styled"
              />
              <input
                type="password"
                placeholder="🔐 Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="admin-input-styled"
              />
              <button type="submit" className="admin-submit-styled">
                Authenticate »
              </button>
              <p className="warning-text">⚠️ Attempts are monitored.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
