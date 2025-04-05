import React, { useState, useEffect } from 'react';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    keyword: 'software engineer',
    location: 'remote'
  });

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { keyword, location } = searchParams;
      const response = await fetch(
        `http://localhost:3001/api/jobs?keyword=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError('Failed to fetch job listings. Please try again later.');
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Job Board
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Browse available positions from various sources
            </p>
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="keyword"
                name="keyword"
                value={searchParams.keyword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="e.g., Software Engineer"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="e.g., Remote"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={loading}
            >
              {loading ? 'Searching...' : 'Search Jobs'}
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            {error}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {job.title}
                </h3>
                <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                  {job.source}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {job.company} • {job.location}
              </p>
              <p className="text-gray-700 dark:text-gray-400 mb-6">
                {job.description}
              </p>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                View Job
              </a>
            </div>
          ))}
        </div>

        {!loading && jobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300">
              No job listings available at the moment.
            </p>
          </div>
        )}

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Loading job listings...
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default JobBoard; 