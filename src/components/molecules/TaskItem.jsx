import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import Checkbox from "@/components/atoms/Checkbox";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const handleToggleComplete = async () => {
    setIsToggling(true);
    try {
      await onToggleComplete(task.Id);
      if (!task.completed) {
        toast.success("Task completed! 🎉", {
          className: "bg-gradient-to-r from-success to-emerald-500",
        });
      }
    } catch (error) {
      toast.error("Failed to update task. Please try again.");
    } finally {
      setIsToggling(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDeleteTask(task.Id);
      toast.info("Task deleted");
    } catch (error) {
      toast.error("Failed to delete task. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "group flex items-center gap-4 p-4 rounded-xl transition-all duration-200",
          "glass border-white/20 hover:shadow-lg hover:border-white/30",
          "backdrop-blur-sm",
          isDeleting && "opacity-50 pointer-events-none"
        )}
      >
        <Checkbox
          checked={task.completed}
          onChange={handleToggleComplete}
          disabled={isToggling}
        />
        
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              "text-lg transition-all duration-300",
              task.completed 
                ? "text-gray-500 strikethrough-animation line-through" 
                : "text-gray-800"
            )}
          >
            {task.text}
          </p>
        </div>

        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            disabled={isDeleting}
            className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg p-2"
          >
            {isDeleting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <ApperIcon name="Loader2" className="w-4 h-4" />
              </motion.div>
            ) : (
              <ApperIcon name="Trash2" className="w-4 h-4" />
            )}
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TaskItem;