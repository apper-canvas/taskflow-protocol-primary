import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    setIsLoading(true);
    try {
      await onAddTask(taskText.trim());
      setTaskText("");
      toast.success("Task added successfully!");
    } catch (error) {
      toast.error("Failed to add task. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto px-4"
    >
      <div className="relative">
        <Input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="pr-16 text-lg placeholder:text-gray-500 shadow-lg glass border-white/20 focus:border-primary/50"
          disabled={isLoading}
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <Button
            type="submit"
            variant="primary"
            size="sm"
            disabled={!taskText.trim() || isLoading}
            className="rounded-lg px-3 py-2"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <ApperIcon name="Loader2" className="w-4 h-4" />
              </motion.div>
            ) : (
              <ApperIcon name="Plus" className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </motion.form>
  );
};

export default TaskInput;