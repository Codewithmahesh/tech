import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Headset, Home } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 md:w-8 h-6 md:h-8 bg-white/10 rounded-lg"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 w-full min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 md:mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Experience Real Estate in
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text block mt-2"> Virtual Reality</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-4"
        >
          Step into the future of property viewing with immersive AR/VR technology.
          Tour homes from anywhere in the world.
        </motion.p>

        {/* Feature icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12 px-4"
        >
          {[
            { Icon: Headset, text: "Virtual Tours" },
            { Icon: Building2, text: "3D Models" },
            { Icon: Building2, text: "AR Preview" },
            { Icon: Home, text: "Real-time Viewing" }
          ].map(({ Icon, text }, index) => (
            <motion.div
              key={text}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-white text-sm md:text-base">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 px-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg"
          >
            Start Virtual Tour
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 text-white rounded-lg font-bold hover:bg-white/20 transition-colors text-lg"
          >
            View Properties
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;