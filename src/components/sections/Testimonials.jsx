import React from 'react';
import { FaQuoteLeft, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer",
    story: "Despite having 5 years of experience and a strong portfolio, I was consistently overlooked for senior positions. After using SkillBlind, I received multiple offers based purely on my technical abilities.",
    background: "Asian-American"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Product Manager",
    story: "I noticed a pattern where my applications were being rejected at the resume screening stage. SkillBlind helped me get past the initial bias and showcase my actual skills and experience.",
    background: "Hispanic"
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Data Scientist",
    story: "As someone who didn't attend a prestigious university, I struggled to get interviews. SkillBlind's blind evaluation process finally gave me a fair chance to demonstrate my capabilities.",
    background: "First-generation college graduate"
  }
];

const statistics = [
  {
    title: "Resume Bias Impact",
    value: "50%",
    description: "of candidates from underrepresented groups face resume screening bias"
  },
  {
    title: "Interview Success",
    value: "3x",
    description: "increase in interview rates for candidates using SkillBlind"
  },
  {
    title: "Diverse Hiring",
    value: "40%",
    description: "increase in diverse hires for companies using SkillBlind"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-800 font-bold mb-4">Real Stories, Real Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how SkillBlind is transforming hiring practices and creating equal opportunities for all candidates.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <h3 className="text-xl text-gray-800 font-semibold mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaUser className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-800 font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.background}</p>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-blue-200 text-4xl absolute -top-2 -left-2" />
                <p className="text-gray-700 pl-8">{testimonial.story}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Research Section */}
        <div className="mt-16 bg-blue-50 p-8 rounded-lg">
          <h3 className="text-2xl text-gray-800 font-semibold mb-4">Backed by Research</h3>
          <p className="text-gray-700 mb-4">
            Studies show that traditional hiring practices often lead to unconscious bias, affecting candidates from all backgrounds. Our approach is based on extensive research in hiring practices and bias reduction.
          </p>
          <a 
            href="https://www.nber.org/system/files/working_papers/w9873/w9873.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Read the Research →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 