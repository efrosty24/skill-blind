# SkillBlind

A full-stack application for bias-free hiring through anonymized applicant submissions.

## Features

- Applicant submission form
- Recruiter dashboard
- Job listings scraper
- Contact unlock flow
- Modern UI with Tailwind CSS

## Development Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd backend
   npm install
   ```
3. Create a `.env` file based on `.env.example`
4. Start the development servers:

   ```bash
   # Terminal 1 (Frontend)
   npm run dev

   # Terminal 2 (Backend)
   cd backend
   npm run dev
   ```

## Deployment

This application is deployed on Vercel. To deploy your own instance:

1. Fork this repository
2. Create a new project on Vercel
3. Import your forked repository
4. Configure environment variables in the Vercel dashboard:
   - `VITE_API_URL`: Your production API URL
   - `NODE_ENV`: Set to "production"
   - `FRONTEND_URL`: Your production frontend URL

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
VITE_API_URL=https://your-api-url/api
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

For production, set these variables in your Vercel dashboard.

## License

MIT
