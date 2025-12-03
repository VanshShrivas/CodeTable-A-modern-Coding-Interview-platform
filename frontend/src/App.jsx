import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/landing.jsx';
import Mock from '../pages/mock.jsx';
import Live from '../pages/live.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/live" element={<Live />} />
        <Route path="/about" element={<Landing />} />
        <Route path="/contactus" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
