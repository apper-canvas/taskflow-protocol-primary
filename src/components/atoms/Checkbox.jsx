import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const Checkbox = forwardRef(({ 
  className, 
  checked = false, 
  onChange,
  disabled = false,
  ...props 
}, ref) => {
  return (
    <motion.div
      className={cn(
        "relative inline-flex items-center justify-center",
        className
      )}
      whileHover={{ scale: disabled ? 1 : 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.9 }}
    >
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only"
        {...props}
      />
      <div
        className={cn(
          "w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all duration-200",
          "cursor-pointer",
          checked 
            ? "bg-gradient-to-br from-primary to-secondary border-primary shadow-lg" 
            : "bg-white border-gray-300 hover:border-gray-400",
          disabled && "opacity-50 cursor-not-allowed"
        )}
        onClick={() => !disabled && onChange && onChange({ target: { checked: !checked } })}
      >
        {checked && (
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="checkmark-animation"
          >
            <ApperIcon name="Check" className="w-3 h-3 text-white" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;