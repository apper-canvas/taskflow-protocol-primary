import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No tasks yet", 
  description = "Add your first task to get started",
  icon = "CheckCircle2",
  showAction = true,
  actionText = "Add your first task",
  onAction
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto px-4 py-12 text-center"
    >
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-indigo-100">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6"
        >
          <ApperIcon name={icon} className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3"
        >
          {title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 mb-6 leading-relaxed"
        >
          {description}
        </motion.p>
        
        {showAction && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-gray-500 flex items-center justify-center gap-2"
          >
            <ApperIcon name="ArrowUp" className="w-4 h-4" />
            {actionText}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Empty;