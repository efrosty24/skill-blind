import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/sections/Testimonials';
import { FaUserTie, FaUserGraduate, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-950 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Eliminating Bias in Hiring
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            SkillBlind promotes merit-based hiring by anonymizing applicant submissions, 
            ensuring candidates are evaluated solely on their skills and experience.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/candidates/jobs"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
            >
              Submit Your Application
            </Link>
            <Link
              to="/dashboard"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              View Applications
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              The Problem with Traditional Hiring
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Studies show that unconscious bias affects hiring decisions, leading to:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="text-4xl font-bold text-red-400 mb-2">50%</div>
                <p className="text-gray-300">Lower callback rates for minority candidates</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="text-4xl font-bold text-red-400 mb-2">40%</div>
                <p className="text-gray-300">Gender pay gap in tech</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <div className="text-4xl font-bold text-red-400 mb-2">60%</div>
                <p className="text-gray-300">Bias in resume screening</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            How SkillBlind Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-800 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaUserGraduate className="text-blue-400 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Submit</h3>
              <p className="text-gray-400">Candidates submit their skills and experience anonymously</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-blue-400 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Anonymize</h3>
              <p className="text-gray-400">Personal information is removed from applications</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaUserTie className="text-blue-400 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Evaluate</h3>
              <p className="text-gray-400">Recruiters review based on skills and experience</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-blue-400 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Hire</h3>
              <p className="text-gray-400">Make decisions based on merit, not bias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">For Candidates</h3>
                <p className="text-gray-300 mb-4">
                  Submit your application and let your skills speak for themselves
                </p>
                <Link
                  to="/apply"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Start Application
                </Link>
              </div>
              <div className="bg-gray-700 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">For Recruiters</h3>
                <p className="text-gray-300 mb-4">
                  Access a diverse pool of talent evaluated purely on merit
                </p>
                <Link
                  to="/dashboard"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  View Applications
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            SkillBlind is committed to promoting diversity and eliminating bias in the hiring process.
            We believe in judging candidates based on their skills and experience, not their identity.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home; 