import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCopy, FiCheck, FiEdit3, FiChevronDown, FiChevronUp } = FiIcons;

const ScriptCard = ({ script, onCustomize }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(script.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'time': 'bg-blue-100 text-blue-700',
      'fees': 'bg-green-100 text-green-700',
      'communication': 'bg-purple-100 text-purple-700',
      'crisis': 'bg-red-100 text-red-700',
      'sliding-scale': 'bg-yellow-100 text-yellow-700',
      'after-hours': 'bg-indigo-100 text-indigo-700',
      'cancellations': 'bg-orange-100 text-orange-700',
      'no-shows': 'bg-pink-100 text-pink-700',
      'referrals': 'bg-gray-100 text-gray-700'
    };
    return colors[category] || 'bg-sage-100 text-sage-700';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      'time': 'Time Boundaries',
      'fees': 'Fee Policies',
      'communication': 'Communication',
      'crisis': 'Crisis Response',
      'sliding-scale': 'Sliding Scale',
      'after-hours': 'After-Hours',
      'cancellations': 'Cancellations',
      'no-shows': 'No-Shows',
      'referrals': 'Referrals'
    };
    return labels[category] || category;
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl border border-sage-200 shadow-sm hover:shadow-md transition-all duration-200"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-semibold text-sage-800">{script.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(script.category)}`}>
                {getCategoryLabel(script.category)}
              </span>
            </div>
            <p className="text-sage-600 leading-relaxed">{script.description}</p>
          </div>
        </div>

        {/* Script Content Preview */}
        <div className="bg-sage-50 rounded-lg p-4 mb-4">
          <div className={`text-sage-700 leading-relaxed ${!expanded ? 'line-clamp-3' : ''}`}>
            {script.content}
          </div>
          
          {script.content.length > 200 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center space-x-1 text-sage-600 hover:text-sage-700 mt-2 text-sm font-medium"
            >
              <span>{expanded ? 'Show less' : 'Show more'}</span>
              <SafeIcon icon={expanded ? FiChevronUp : FiChevronDown} />
            </button>
          )}
        </div>

        {/* Customization Fields */}
        {script.customFields && script.customFields.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-sage-600 mb-2">
              <strong>Customizable fields:</strong> {script.customFields.join(', ')}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center space-x-2 bg-sage-600 hover:bg-sage-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex-1"
          >
            <SafeIcon icon={copied ? FiCheck : FiCopy} />
            <span>{copied ? 'Copied!' : 'Copy Script'}</span>
          </button>

          {script.customFields && script.customFields.length > 0 && (
            <button
              onClick={onCustomize}
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex-1"
            >
              <SafeIcon icon={FiEdit3} />
              <span>Customize</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ScriptCard;