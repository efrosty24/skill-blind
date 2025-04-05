import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            SkillBlind
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Promoting bias-free hiring through anonymous applicant submissions
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/apply"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/dashboard"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              View Applicants
            </Link>
          </div>
        </div>

        <section className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Anonymous Applications</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Submit your skills and experience without revealing personal information
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Merit-Based Review</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Employers review applications based solely on qualifications and experience
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Job Board Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access real-time job postings from multiple sources in one place
            </p>
          </div>
        </section>
      </section>

      <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            SkillBlind is committed to promoting diversity and eliminating bias in the hiring process.
            We believe in judging candidates based on their skills and experience, not their identity.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home; 