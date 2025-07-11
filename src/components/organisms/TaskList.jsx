import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskItem from "@/components/molecules/TaskItem";
import Empty from "@/components/ui/Empty";

const TaskList = ({ 
  tasks, 
  activeTab, 
  onToggleComplete, 
  onDeleteTask 
}) => {
  if (tasks.length === 0) {
    return (
      <Empty
        title={activeTab === "active" ? "No active tasks" : "No completed tasks"}
        description={
          activeTab === "active" 
            ? "Add a new task to get started on your goals!" 
            : "Complete some tasks to see them here."
        }
        icon={activeTab === "active" ? "Plus" : "CheckCircle2"}
        showAction={activeTab === "active"}
      />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="space-y-3">
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.div
              key={task.Id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ 
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
            >
              <TaskItem
                task={task}
                onToggleComplete={onToggleComplete}
                onDeleteTask={onDeleteTask}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TaskList;