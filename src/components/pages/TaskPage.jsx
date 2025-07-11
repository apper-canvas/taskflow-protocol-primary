import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { taskService } from "@/services/api/taskService";
import TaskHeader from "@/components/organisms/TaskHeader";
import TaskInput from "@/components/molecules/TaskInput";
import TaskTabs from "@/components/molecules/TaskTabs";
import TaskList from "@/components/organisms/TaskList";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("active");

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError("");
      const tasksData = await taskService.getAll();
      setTasks(tasksData);
    } catch (err) {
      setError("Failed to load tasks. Please try again.");
      console.error("Error loading tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (text) => {
    try {
      const newTask = await taskService.create({ text });
      setTasks(prev => [...prev, newTask]);
    } catch (err) {
      throw new Error("Failed to add task");
    }
  };

  const handleToggleComplete = async (taskId) => {
    try {
      const updatedTask = await taskService.toggleComplete(taskId);
      setTasks(prev => 
        prev.map(task => 
          task.Id === taskId ? updatedTask : task
        )
      );
    } catch (err) {
      throw new Error("Failed to update task");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await taskService.delete(taskId);
      setTasks(prev => prev.filter(task => task.Id !== taskId));
    } catch (err) {
      throw new Error("Failed to delete task");
    }
  };

  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  const currentTasks = activeTab === "active" ? activeTasks : completedTasks;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Error 
        message={error} 
        onRetry={loadTasks} 
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-8"
    >
      <div className="max-w-4xl mx-auto">
        <TaskHeader
          activeTaskCount={activeTasks.length}
          completedTaskCount={completedTasks.length}
        />

        <div className="mb-8">
          <TaskInput onAddTask={handleAddTask} />
        </div>

        <TaskTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          activeTasks={activeTasks.length}
          completedTasks={completedTasks.length}
        />

        <TaskList
          tasks={currentTasks}
          activeTab={activeTab}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </motion.div>
  );
};

export default TaskPage;