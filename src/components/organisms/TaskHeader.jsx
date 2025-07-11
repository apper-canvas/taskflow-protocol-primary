import React from "react";
import { motion } from "framer-motion";
import Badge from "@/components/atoms/Badge";
import ApperIcon from "@/components/ApperIcon";

const TaskHeader = ({ activeTaskCount, completedTaskCount }) => {
  const totalTasks = activeTaskCount + completedTaskCount;
  const completionPercentage = totalTasks > 0 ? Math.round((completedTaskCount / totalTasks) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <div className="flex items-center justify-center gap-4 mb-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg"
        >
          <ApperIcon name="CheckCircle2" className="w-8 h-8 text-white" />
        </motion.div>
        
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            TaskFlow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-600 font-medium"
          >
            Stay focused, get things done
          </motion.p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Badge variant="primary" size="md" pulse={activeTaskCount > 0}>
          <ApperIcon name="Clock" className="w-4 h-4 mr-2" />
          {activeTaskCount} Active
        </Badge>
        
        <Badge variant="success" size="md" pulse={completedTaskCount > 0}>
          <ApperIcon name="CheckCircle" className="w-4 h-4 mr-2" />
          {completedTaskCount} Done
        </Badge>
        
        {totalTasks > 0 && (
          <Badge variant="accent" size="md">
            <ApperIcon name="TrendingUp" className="w-4 h-4 mr-2" />
            {completionPercentage}% Complete
          </Badge>
        )}
      </div>
    </motion.div>
  );
};

export default TaskHeader;