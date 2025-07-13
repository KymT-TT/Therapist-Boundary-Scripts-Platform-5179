import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUser, FiAward, FiBookOpen, FiExternalLink } = FiIcons;

const AboutPage = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
            What is BoundaryWise Scripts?
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-sage-100">
            <p className="text-lg text-sage-700 leading-relaxed mb-8">
              This tool was created by <strong>Kym Tolson</strong>, founder of Bill Like a Boss and the BoundaryWise GPT, 
              to help therapists hold boundaries with clarity and confidence. Use this app to find pre-written scripts 
              or generate new ones using our AI tool.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiBookOpen} className="text-2xl text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Comprehensive Library</h3>
                <p className="text-sage-600">
                  Access 50+ professionally crafted scripts covering all major boundary scenarios
                </p>
              </div>

              <div className="text-center">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiAward} className="text-2xl text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Evidence-Based</h3>
                <p className="text-sage-600">
                  Scripts grounded in ethical therapy practice and professional boundary theory
                </p>
              </div>

              <div className="text-center">
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiUser} className="text-2xl text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-2">Therapist-Centered</h3>
                <p className="text-sage-600">
                  Designed specifically for licensed mental health professionals
                </p>
              </div>
            </div>

            {/* About Kym */}
            <div className="bg-sage-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-sage-800 mb-4">About the Creator</h3>
              <p className="text-sage-700 leading-relaxed">
                <strong>Kym Tolson</strong> is a recognized expert in therapy practice management and professional boundaries. 
                As the founder of Bill Like a Boss, she has helped thousands of therapists build sustainable, ethical practices. 
                The BoundaryWise tools represent her commitment to supporting clinicians in maintaining clear, professional 
                boundaries that protect both therapist and client wellbeing.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-sage-800 mb-4">Our Mission</h3>
              <p className="text-lg text-sage-700 leading-relaxed">
                To empower therapists with practical, professional tools that support strong therapeutic boundaries, 
                enhance practice sustainability, and promote ethical client care.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-sage-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Ready to strengthen your practice boundaries?</h3>
            <p className="mb-6 opacity-90">
              Explore our comprehensive script library or create custom solutions with the BoundaryWise GPT.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/library"
                className="bg-white text-sage-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Browse Script Library
              </a>
              
              <a
                href="https://chatgpt.com/g/g-682dbbc1ff708191be2df8fa06192ff1-boundarywise-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-sage-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Access GPT Tool</span>
                <SafeIcon icon={FiExternalLink} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;