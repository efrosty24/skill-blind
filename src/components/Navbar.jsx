import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            SkillBlind
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/apply"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md"
            >
              Apply
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              to="/jobs"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md"
            >
              Jobs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;