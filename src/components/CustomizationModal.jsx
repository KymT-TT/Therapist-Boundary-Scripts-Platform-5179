import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiCopy, FiCheck } = FiIcons;

const CustomizationModal = ({ script, onClose }) => {
  const [values, setValues] = useState({});
  const [customizedContent, setCustomizedContent] = useState(script.content);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Initialize values for custom fields
    if (script.customFields) {
      const initialValues = {};
      script.customFields.forEach(field => {
        initialValues[field] = '';
      });
      setValues(initialValues);
    }
  }, [script]);

  useEffect(() => {
    // Update customized content when values change
    let content = script.content;
    Object.entries(values).forEach(([field, value]) => {
      const placeholder = `[${field}]`;
      content = content.replace(new RegExp(placeholder, 'g'), value || placeholder);
    });
    setCustomizedContent(content);
  }, [values, script.content]);

  const handleValueChange = (field, value) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(customizedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFieldLabel = (field) => {
    return field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sage-200">
          <h2 className="text-2xl font-semibold text-sage-800">Customize Script</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-sage-100 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiX} className="text-xl text-sage-600" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-medium text-sage-800 mb-4">{script.title}</h3>

            {/* Custom Fields */}
            {script.customFields && script.customFields.length > 0 && (
              <div className="mb-6">
                <h4 className="text-md font-medium text-sage-700 mb-3">Fill in your details:</h4>
                <div className="grid gap-4">
                  {script.customFields.map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-sage-700 mb-1">
                        {getFieldLabel(field)}
                      </label>
                      <input
                        type="text"
                        value={values[field] || ''}
                        onChange={(e) => handleValueChange(field, e.target.value)}
                        placeholder={`Enter ${getFieldLabel(field).toLowerCase()}`}
                        className="w-full px-3 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preview */}
            <div className="mb-6">
              <h4 className="text-md font-medium text-sage-700 mb-3">Preview:</h4>
              <div className="bg-sage-50 rounded-lg p-4 border border-sage-200">
                <div className="text-sage-800 leading-relaxed whitespace-pre-line">
                  {customizedContent}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-sage-200 bg-sage-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sage-600 hover:text-sage-700 font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 bg-sage-600 hover:bg-sage-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            <SafeIcon icon={copied ? FiCheck : FiCopy} />
            <span>{copied ? 'Copied!' : 'Copy Customized Script'}</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CustomizationModal;