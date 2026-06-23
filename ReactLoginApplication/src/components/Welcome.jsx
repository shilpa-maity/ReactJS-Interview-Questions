import React from 'react';
import { useApi } from '../context/ApiContext';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const { user, logout } = useApi();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Welcome, {user?.email}</h2>
      <button onClick={handleLogout} className="btn btn-danger mt-3">Logout</button>
    </div>
  );
};

export default Welcome;
