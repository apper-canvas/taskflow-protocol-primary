import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const TaskTabs = ({ activeTab, onTabChange, activeTasks, completedTasks }) => {
  const tabs = [
    { id: "active", label: "Active", count: activeTasks },
    { id: "completed", label: "Completed", count: completedTasks },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="flex bg-white/50 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-white/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative px-6 py-3 rounded-lg font-medium transition-all duration-200",
              "hover:bg-white/60",
              activeTab === tab.id
                ? "text-white"
                : "text-gray-600 hover:text-gray-800"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.label}
              <span
                className={cn(
                  "px-2 py-1 rounded-full text-xs font-bold",
                  activeTab === tab.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-200 text-gray-600"
                )}
              >
                {tab.count}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskTabs;