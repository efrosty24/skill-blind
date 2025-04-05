import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaSearch, FaFileAlt } from 'react-icons/fa';

const CandidatesLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Sub Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <Link
              to="/candidates/jobs"
              className={`flex items-center py-4 px-2 border-b-2 ${
                location.pathname === '/candidates/jobs'
                  ? 'border-blue-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <FaSearch className="mr-2" />
              Job Listings
            </Link>
            <Link
              to="/candidates/apply"
              className={`flex items-center py-4 px-2 border-b-2 ${
                location.pathname === '/candidates/apply'
                  ? 'border-blue-500 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <FaFileAlt className="mr-2" />
              Apply Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default CandidatesLayout; 