import React, { useState } from 'react';

const Apply = () => {
  const [formData, setFormData] = useState({
    workExperience: '',
    education: '',
    skills: '',
    portfolioLinks: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique anonymized ID
    const anonymizedId = `SKB-${Math.random().toString(36).substr(2, 9)}`;
    
    // Here we would typically send the data to a backend
    console.log('Submitting application with ID:', anonymizedId, formData);
    
    // Reset form
    setFormData({
      workExperience: '',
      education: '',
      skills: '',
      portfolioLinks: '',
      resume: null
    });
    
    alert('Application submitted successfully! Your anonymized ID is: ' + anonymizedId);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Anonymous Application
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Submit your application without revealing personal information. Your skills and experience will speak for themselves.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Work Experience
              </label>
              <textarea
                id="workExperience"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows="4"
                required
              />
            </div>

            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Education
              </label>
              <textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows="3"
                required
              />
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Skills
              </label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows="3"
                required
              />
            </div>

            <div>
              <label htmlFor="portfolioLinks" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Portfolio/Project Links (Optional)
              </label>
              <textarea
                id="portfolioLinks"
                name="portfolioLinks"
                value={formData.portfolioLinks}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows="2"
                placeholder="https://github.com/username/project"
              />
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Resume (Optional)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                accept=".pdf,.doc,.docx"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Apply; 