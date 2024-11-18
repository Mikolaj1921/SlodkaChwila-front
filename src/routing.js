
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Importowanie stron
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import News from './pages/News';

const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/news" element={<News />} />
  </Routes>
);

export default Routing;
