import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Header skeleton */}
        <div className="text-center space-y-4">
          <motion.div
            className="h-12 w-48 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-xl mx-auto"
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 100%" }}
          />
          <motion.div
            className="h-6 w-32 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-lg mx-auto"
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.2 }}
            style={{ backgroundSize: "200% 100%" }}
          />
        </div>

        {/* Input skeleton */}
        <motion.div
          className="h-14 w-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-xl"
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.4 }}
          style={{ backgroundSize: "200% 100%" }}
        />

        {/* Tabs skeleton */}
        <div className="flex justify-center space-x-4">
          <motion.div
            className="h-10 w-20 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-lg"
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.6 }}
            style={{ backgroundSize: "200% 100%" }}
          />
          <motion.div
            className="h-10 w-24 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-lg"
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.8 }}
            style={{ backgroundSize: "200% 100%" }}
          />
        </div>

        {/* Task items skeleton */}
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-xl"
              animate={{ x: [-100, 100, -100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 + i * 0.1 }}
              style={{ backgroundSize: "200% 100%" }}
            >
              <div className="h-5 w-5 bg-slate-300 rounded-full" />
              <div className="flex-1 h-5 bg-slate-300 rounded" />
              <div className="h-5 w-5 bg-slate-300 rounded" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;