import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Badge = forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  pulse = false,
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg",
    secondary: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 shadow-md",
    success: "bg-gradient-to-r from-success to-emerald-500 text-white shadow-lg",
    warning: "bg-gradient-to-r from-warning to-amber-500 text-white shadow-lg",
    error: "bg-gradient-to-r from-error to-red-500 text-white shadow-lg",
    accent: "bg-gradient-to-r from-accent to-pink-500 text-white shadow-lg",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200";

  return (
    <motion.span
      ref={ref}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        pulse && "animate-pulse-gentle",
        className
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.span>
  );
});

Badge.displayName = "Badge";

export default Badge;