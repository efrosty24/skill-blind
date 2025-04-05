const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configure CORS for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Function to scrape Indeed jobs
async function scrapeIndeedJobs(keyword = 'software engineer', location = 'remote') {
  try {
    const url = `https://www.indeed.com/jobs?q=${encodeURIComponent(keyword)}&l=${encodeURIComponent(location)}`;
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
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
    console.error('Error scraping Indeed:', error);
    return [];
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

// API endpoint to get jobs
app.get('/api/jobs', async (req, res) => {
  try {
    const { keyword = 'software engineer', location = 'remote' } = req.query;
    
    // Scrape jobs from both sources
    const indeedJobs = await scrapeIndeedJobs(keyword, location);
    const linkedInJobs = await scrapeLinkedInJobs(keyword, location);
    
    // Combine and shuffle the results
    const allJobs = [...indeedJobs, ...linkedInJobs]
      .sort(() => Math.random() - 0.5)
      .slice(0, 20); // Limit to 20 jobs total

    res.json(allJobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 