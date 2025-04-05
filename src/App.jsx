import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Dashboard from './pages/Dashboard';
import JobBoard from './pages/JobBoard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<JobBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

