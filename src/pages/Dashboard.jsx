import React, { useState } from 'react';

// Mock data for demonstration
const mockApplicants = [
  {
    id: 'SKB-abc123',
    workExperience: '5 years of software development experience with focus on React and Node.js',
    education: 'BS in Computer Science from University of Technology',
    skills: 'JavaScript, React, Node.js, MongoDB, AWS',
    portfolioLinks: 'https://github.com/example/project1\nhttps://example.com/portfolio',
  },
  {
    id: 'SKB-def456',
    workExperience: '3 years of full-stack development, specializing in Python and Django',
    education: 'MS in Software Engineering from Tech University',
    skills: 'Python, Django, PostgreSQL, Docker, Kubernetes',
    portfolioLinks: 'https://github.com/example/project2',
  },
];

const Dashboard = () => {
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRequestContact = (applicant) => {
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedApplicant(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Anonymous Applicant Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Review applications based solely on skills and experience. Personal information is hidden to prevent bias.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockApplicants.map((applicant) => (
            <div
              key={applicant.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Applicant ID: {applicant.id}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Work Experience
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {applicant.workExperience}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Education
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {applicant.education}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Skills
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {applicant.skills}
                  </p>
                </div>

                {applicant.portfolioLinks && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Portfolio Links
                    </h4>
                    <div className="mt-1 space-y-1">
                      {applicant.portfolioLinks.split('\n').map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => handleRequestContact(applicant)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Request Contact Info
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Request Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Are you sure you want to request contact information for this applicant?
                This action will be logged and the applicant will be notified.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Simulate contact info reveal
                    alert(`Contact information for ${selectedApplicant.id}:\nEmail: applicant@example.com\nPhone: (555) 123-4567`);
                    closeModal();
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Dashboard; 