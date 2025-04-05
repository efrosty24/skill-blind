import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Apply from './pages/Apply';
import JobBoard from './pages/JobBoard';
import CandidatesLayout from './components/layouts/CandidatesLayout';
import CandidatesJobBoard from './pages/candidates/JobBoard';
import CandidatesApply from './pages/candidates/Apply';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/candidates" element={<CandidatesLayout />}>
            <Route path="jobs" element={<CandidatesJobBoard />} />
            <Route path="apply" element={<CandidatesApply />} />
          </Route>
          {/* Legacy routes - we can remove these later */}
          <Route path="/apply" element={<Apply />} />
          <Route path="/jobs" element={<JobBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

