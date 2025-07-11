import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import TaskPage from "@/components/pages/TaskPage";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <Routes>
        <Route path="/" element={<TaskPage />} />
      </Routes>
    </motion.div>
  );
};

export default App;