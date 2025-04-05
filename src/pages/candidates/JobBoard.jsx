import React, { useState, useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';

const CandidatesJobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({
    title: '',
    location: '',
  });

  // Fallback job data in case the API fails
  const fallbackJobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      description: 'Looking for a skilled software engineer to join our team. Experience with React and Node.js required.'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'InnovateCo',
      location: 'New York, NY',
      description: 'Seeking an experienced product manager to lead our development team and drive product strategy.'
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'DesignHub',
      location: 'Remote',
      description: 'Join our design team to create beautiful and intuitive user experiences for our products.'
    }
  ];

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1c49553bf0msh219ea45fe40c21ep17639djsnefaae9751a41',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

      const query = searchParams.title || 'developer';
      const location = searchParams.location || 'new york';
      
      console.log('Fetching jobs with options:', options);
      
      const response = await fetch(
        `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}%20in%20${encodeURIComponent(location)}&page=1&num_pages=1`,
        options
      );
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.data && Array.isArray(data.data)) {
        const transformedJobs = data.data.map(job => ({
          id: job.job_id || Math.random().toString(),
          title: job.job_title,
          company: job.employer_name,
          location: job.job_city ? `${job.job_city}, ${job.job_country}` : job.job_country,
          description: job.job_description,
          url: job.job_apply_link,
          type: job.job_employment_type,
          posted_at: job.job_posted_at_timestamp
        }));

        setJobs(transformedJobs);
      } else {
        console.error('Invalid API response format:', data);
        throw new Error('Invalid API response format');
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Unable to fetch job listings. Showing sample jobs instead.');
      setJobs(fallbackJobs);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchJobs();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Find Your Next Opportunity</h1>
        <p className="text-gray-400">Browse through our curated job listings and apply anonymously</p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaBriefcase className="text-gray-400" />
            </div>
            <input
              type="text"
              name="title"
              value={searchParams.title}
              onChange={handleInputChange}
              placeholder="Job title or keywords"
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaMapMarkerAlt className="text-gray-400" />
            </div>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center"
          >
            <FaSearch className="mr-2" />
            Search Jobs
          </button>
        </div>
      </form>

      {/* Job Listings */}
      {error && (
        <div className="bg-yellow-900/50 border border-yellow-700 text-yellow-200 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading job listings...</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-gray-400 mb-4">{job.company}</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{job.location}</span>
                  </div>
                  {job.type && (
                    <div className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm mb-4">
                      {job.type}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-end">
                  <button
                    onClick={() => window.location.href = `/candidates/apply?jobId=${job.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors mb-2"
                  >
                    Apply Now
                  </button>
                  {job.url && (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white flex items-center text-sm"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      View Original Posting
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-300 line-clamp-3">{job.description}</p>
              </div>
              {job.posted_at && (
                <div className="mt-4 text-sm text-gray-500">
                  Posted: {new Date(job.posted_at * 1000).toLocaleDateString()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CandidatesJobBoard; 