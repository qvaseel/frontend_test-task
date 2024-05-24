import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Products from './pages/Products/Products';
import Algorithms from './pages/Alghoritms/Alghoritms';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/products" element={<Products />} />
        <Route path="/algorithms" element={<Algorithms />} />
      </Routes>
    </Router>
  );
}

export default App;
