"use client"

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { PinContainer } from '../ui/3d-pin';

const demoCards = [
  {
    title: "3D Product Viewer",
    description: "Immersive 3D visualization for your products with real-time interaction",
    visual: (
      <div className="relative w-full h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 relative">
            {/* Animated 3D Cube */}
            <div className="cube animate-spin-slow">
              <div className="face front bg-blue-500/20 backdrop-blur-sm border border-blue-500/30"></div>
              <div className="face back bg-blue-600/20 backdrop-blur-sm border border-blue-500/30"></div>
              <div className="face right bg-blue-400/20 backdrop-blur-sm border border-blue-500/30"></div>
              <div className="face left bg-blue-700/20 backdrop-blur-sm border border-blue-500/30"></div>
              <div className="face top bg-blue-300/20 backdrop-blur-sm border border-blue-500/30"></div>
              <div className="face bottom bg-blue-800/20 backdrop-blur-sm border border-blue-500/30"></div>
            </div>
          </div>
        </div>
      </div>
    ),
    gradient: "from-blue-500 to-blue-600",
    bgGlow: "group-hover:shadow-blue-500/30",
  },
  {
    title: "Interactive Catalog",
    description: "Digital catalog enhanced with AR previews and live product demonstrations",
    visual: (
      <div className="relative w-full h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated Circles */}
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500/30 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border-4 border-purple-400/40 animate-pulse delay-150"></div>
            <div className="absolute inset-4 rounded-full border-4 border-purple-300/50 animate-pulse delay-300"></div>
            <div className="absolute inset-6 rounded-full border-4 border-purple-200/60 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    ),
    gradient: "from-purple-500 to-purple-600",
    bgGlow: "group-hover:shadow-purple-500/30",
  },
  {
    title: "Virtual Try-On",
    description: "Revolutionary AR try-on experience for seamless product visualization",
    visual: (
      <div className="relative w-full h-32">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated Wave Pattern */}
          <div className="relative w-32 h-32">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`absolute inset-0 border-2 border-indigo-500/30 rounded-lg transform rotate-${i * 15} animate-wave-${i}`}
                style={{
                  animationDelay: `${i * 200}ms`,
                  animationDuration: '3s',
                }}
              ></div>
            ))}
            <div className="absolute inset-4 bg-indigo-500/10 backdrop-blur-sm rounded-lg"></div>
          </div>
        </div>
      </div>
    ),
    gradient: "from-indigo-500 to-indigo-600",
    bgGlow: "group-hover:shadow-indigo-500/30",
  },
];

const DemoCards = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="py-12 px-4">
      <style jsx global>{`
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate 20s infinite linear;
        }
        
        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 8px;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
            }
        
        @keyframes rotate {
          from { transform: rotateX(0) rotateY(0); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.1; }
        }
        
        .animate-wave-0 { animation: wave 3s infinite; }
        .animate-wave-1 { animation: wave 3s infinite 200ms; }
        .animate-wave-2 { animation: wave 3s infinite 400ms; }
        .animate-wave-3 { animation: wave 3s infinite 600ms; }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {demoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PinContainer title="try now" href="/">
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 text-2xl text-slate-100">
                    {card.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-thin">
                    <span className="text-slate-500">
                      {card.description}
                    </span>
                  </div>
                  {/* Custom Visual Elements */}
                  <div className="mt-4">
                    {card.visual}
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DemoCards;