import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { ApiProvider, useApi } from './context/ApiContext';
import './App.css'

const PrivateRoute = ({ children }) => {
  const { user } = useApi();
  return user ? children : <Login />;
};

const App = () => {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={
            <PrivateRoute>
              <Welcome />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  );
};

export default App;
