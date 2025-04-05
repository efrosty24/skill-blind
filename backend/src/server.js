const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Enhanced CORS configuration for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL, 'https://skill-blind.vercel.app'] 
    : 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Fallback job data
const fallbackJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechCorp",
    location: "Remote",
    description: "Looking for an experienced software engineer to join our team.",
    url: "https://example.com/job/1",
    source: "GitHub Jobs"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "San Francisco, CA",
    description: "Join our team as a full stack developer working on cutting-edge web applications.",
    url: "https://example.com/job/2",
    source: "GitHub Jobs"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "DesignCo",
    location: "New York, NY",
    description: "Seeking a frontend developer with React experience.",
    url: "https://example.com/job/3",
    source: "GitHub Jobs"
  }
];

// Function to fetch jobs from GitHub Jobs API
async function fetchGitHubJobs(keyword = 'software engineer', location = 'remote') {
  try {
    const url = `https://jobs.github.com/positions.json?description=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`;
    
    const response = await axios.get(url, {
      timeout: 10000
    });

    if (response.data && response.data.length > 0) {
      return response.data.map((job, index) => ({
        id: job.id || index + 1,
        title: job.title,
        company: job.company,
        location: job.location,
        description: job.description,
        url: job.url,
        source: 'GitHub Jobs'
      }));
    }

    return fallbackJobs;
  } catch (error) {
    console.error('Error fetching from GitHub Jobs:', error.message);
    return fallbackJobs;
  }
}

// API Routes
app.get('/api/jobs', async (req, res) => {
  try {
    const { keyword = 'software engineer', location = 'remote' } = req.query;
    const jobs = await fetchGitHubJobs(keyword, location);
    res.json(jobs);
  } catch (error) {
    console.error('Error in /api/jobs:', error);
    res.json(fallbackJobs);
  }
});

// Start server
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app; 