import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto px-4 py-12 text-center"
    >
      <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 shadow-lg border border-red-100">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-rose-500 rounded-full mb-6"
        >
          <ApperIcon name="AlertCircle" className="w-8 h-8 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Oops! Something went wrong
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {message}
        </p>
        
        {onRetry && (
          <Button 
            onClick={onRetry}
            className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ApperIcon name="RefreshCw" className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Error;