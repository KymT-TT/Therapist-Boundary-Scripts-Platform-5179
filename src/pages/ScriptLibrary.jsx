import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ScriptCard from '../components/ScriptCard';
import CustomizationModal from '../components/CustomizationModal';
import { scripts } from '../data/scripts';

const { FiSearch, FiFilter, FiExternalLink } = FiIcons;

const ScriptLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedScript, setSelectedScript] = useState(null);

  const categories = [
    { id: 'all', label: 'All Scripts' },
    { id: 'time', label: 'Time Boundaries' },
    { id: 'fees', label: 'Fee Policies' },
    { id: 'communication', label: 'Communication' },
    { id: 'crisis', label: 'Crisis Response' },
    { id: 'sliding-scale', label: 'Sliding Scale Requests' },
    { id: 'after-hours', label: 'After-Hours Messaging' },
    { id: 'cancellations', label: 'Late Cancellations' },
    { id: 'no-shows', label: 'No-Shows' },
    { id: 'referrals', label: 'Referrals and Terminations' }
  ];

  const filteredScripts = useMemo(() => {
    return scripts.filter(script => {
      const matchesSearch = script.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          script.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          script.content.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || script.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
            Script Library
          </h1>
          <p className="text-lg text-sage-600">
            Professional boundary scripts ready for your practice
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400" />
            <input
              type="text"
              placeholder="Search by topic (e.g., cancellation, fee requests, texts)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center space-x-2 mb-4">
            <SafeIcon icon={FiFilter} className="text-sage-500" />
            <span className="text-sm font-medium text-sage-700">Filter by category:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-sage-600 text-white'
                    : 'bg-sage-100 text-sage-700 hover:bg-sage-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sage-600">
            Showing {filteredScripts.length} of {scripts.length} scripts
          </p>
        </div>

        {/* Scripts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid gap-6 mb-16"
        >
          {filteredScripts.map((script, index) => (
            <motion.div
              key={script.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ScriptCard 
                script={script} 
                onCustomize={() => setSelectedScript(script)}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredScripts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sage-500 text-lg">No scripts found matching your criteria.</p>
            <p className="text-sage-400 mt-2">Try adjusting your search or filter options.</p>
          </div>
        )}

        {/* Custom Script Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-sage-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Can't find what you need?</h2>
          <p className="text-lg mb-6 opacity-90">
            For complex or unusual situations, use the BoundaryWise GPT to generate a custom script that fits your tone and clinical context.
          </p>
          
          <a
            href="https://chatgpt.com/g/g-682dbbc1ff708191be2df8fa06192ff1-boundarywise-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <span>Use the GPT Tool</span>
            <SafeIcon icon={FiExternalLink} />
          </a>
          
          <p className="text-sm opacity-75 mt-4">
            You'll need the password from the Therapist's GPT Hub to access.
          </p>
        </motion.div>
      </div>

      {/* Customization Modal */}
      {selectedScript && (
        <CustomizationModal
          script={selectedScript}
          onClose={() => setSelectedScript(null)}
        />
      )}
    </div>
  );
};

export default ScriptLibrary;