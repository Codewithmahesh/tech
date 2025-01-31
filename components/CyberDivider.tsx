"use client"
import React from 'react';
import { motion } from 'framer-motion';

const CyberDivider = () => {
  return (
    <div className="relative py-8">
      {/* Main gradient line with softer animation */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 blur-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-30" />
      </motion.div>

      {/* Decorative elements with faster, subtler animations */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.1,
              }}
              className="w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_3px_rgba(59,130,246,0.4)]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CyberDivider;