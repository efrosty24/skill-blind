const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
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

// Function to scrape Indeed jobs
async function scrapeIndeedJobs(keyword = 'software engineer', location = 'remote') {
  try {
    const url = `https://www.indeed.com/jobs?q=${encodeURIComponent(keyword)}&l=${encodeURIComponent(location)}`;
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 10000 // 10 second timeout
    });

    const $ = cheerio.load(response.data);
    const jobs = [];

    $('.job_seen_beacon').each((i, element) => {
      const title = $(element).find('.jobTitle').text().trim();
      const company = $(element).find('.companyName').text().trim();
      const location = $(element).find('.companyLocation').text().trim();
      const description = $(element).find('.job-snippet').text().trim();
      const link = 'https://www.indeed.com' + $(element).find('a').attr('href');

      if (title && company) {
        jobs.push({
          id: i + 1,
          title,
          company,
          location,
          description,
          url: link,
          source: 'Indeed'
        });
      }
    });

    return jobs;
  } catch (error) {
    console.error('Error scraping Indeed:', error.message);
    throw new Error('Failed to fetch jobs from Indeed');
  }
}

// Function to scrape LinkedIn jobs
async function scrapeLinkedInJobs(keyword = 'software engineer', location = 'remote') {
  try {
    const url = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`;
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const $ = cheerio.load(response.data);
    const jobs = [];

    $('.jobs-search__results-list li').each((i, element) => {
      const title = $(element).find('.base-search-card__title').text().trim();
      const company = $(element).find('.base-search-card__subtitle').text().trim();
      const location = $(element).find('.job-search-card__location').text().trim();
      const link = $(element).find('a').attr('href');

      if (title && company) {
        jobs.push({
          id: i + 1,
          title,
          company,
          location,
          description: 'Description available on LinkedIn',
          url: link,
          source: 'LinkedIn'
        });
      }
    });

    return jobs;
  } catch (error) {
    console.error('Error scraping LinkedIn:', error);
    return [];
  }
}

// API Routes
app.get('/api/jobs', async (req, res) => {
  try {
    const { keyword = 'software engineer', location = 'remote' } = req.query;
    const jobs = await scrapeIndeedJobs(keyword, location);
    res.json(jobs);
  } catch (error) {
    console.error('Error in /api/jobs:', error);
    res.status(500).json({ error: error.message });
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