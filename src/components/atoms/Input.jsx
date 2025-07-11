import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Input = forwardRef(({ 
  className, 
  type = "text", 
  label,
  error,
  ...props 
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white backdrop-blur-sm",
          "focus:border-primary focus:ring-4 focus:ring-primary/20 focus:outline-none",
          "transition-all duration-200",
          "placeholder:text-gray-400",
          "hover:border-gray-300",
          error && "border-red-300 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;