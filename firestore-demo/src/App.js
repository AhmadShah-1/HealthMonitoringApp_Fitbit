import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import BackendDemo from './pages/BackendDemo';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './backend/firebaseConfig';
import HealthData from './pages/Health-Data';


const app = initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/healthdata" element={<HealthData />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HealthData />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;