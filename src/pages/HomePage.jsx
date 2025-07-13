import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiExternalLink, FiLock, FiShield, FiFileText, FiUsers } = FiIcons;

const HomePage = () => {
  const features = [
    {
      icon: FiFileText,
      title: "Pre-Written Scripts",
      description: "Access 50+ professional boundary scripts ready to use in your practice"
    },
    {
      icon: FiUsers,
      title: "Customizable Templates",
      description: "Personalize scripts with client names, fees, and practice-specific details"
    },
    {
      icon: FiShield,
      title: "Evidence-Based",
      description: "Scripts grounded in ethical therapy practice and boundary theory"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-sage-800 mb-6">
              Welcome to <span className="text-blue-600">BoundaryWise Scripts</span>
            </h1>
            <p className="text-xl md:text-2xl text-sage-600 mb-8 leading-relaxed">
              Scripts and tools to support strong, ethical boundaries in your therapy practice.
            </p>
            
            <Link to="/library">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 mx-auto"
              >
                <span>Start Now</span>
                <SafeIcon icon={FiArrowRight} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6"
              >
                <div className="bg-sage-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={feature.icon} className="text-2xl text-sage-600" />
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">{feature.title}</h3>
                <p className="text-sage-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GPT Tool Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-500 to-sage-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need customized boundary language?
            </h2>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Use the BoundaryWise GPT to generate tailored responses and coaching.
            </p>
            
            <a
              href="https://chatgpt.com/g/g-682dbbc1ff708191be2df8fa06192ff1-boundarywise-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <span>Launch GPT Tool</span>
              <SafeIcon icon={FiExternalLink} />
            </a>
            
            <div className="mt-6 flex items-center justify-center space-x-2 text-sm opacity-75">
              <SafeIcon icon={FiLock} />
              <span>Access is password protected. You'll find the password inside the Therapist's GPT Hub.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Script Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-sage-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-sage-800 mb-4">
              Can't find what you need?
            </h2>
            <p className="text-lg text-sage-600 mb-6">
              For complex or unusual situations, use the BoundaryWise GPT to generate a custom script that fits your tone and clinical context.
            </p>
            
            <a
              href="https://chatgpt.com/g/g-682dbbc1ff708191be2df8fa06192ff1-boundarywise-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>Use the GPT Tool</span>
              <SafeIcon icon={FiExternalLink} />
            </a>
            
            <p className="text-sm text-sage-500 mt-4">
              You'll need the password from the Therapist's GPT Hub to access.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;