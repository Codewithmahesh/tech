"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CircuitPattern from "./CircuitPattern";

const Section = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [transformStage, setTransformStage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      title: "Virtual Reality",
      description: "Immerse yourself in stunning digital environments",
      delay: "delay-[100ms]",

      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-16 h-16 text-purple-900"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 3v4.5m4.5-4.5v4.5m-6 12h7.5a3 3 0 003-3v-3h-4.5M5.25 9H15m3.75 0H21M3 12h3m6 6v3m0-3H9m0 0v-3m3 3h3"
          />
        </svg>
      ),
    },
    {
      title: "Augmented Reality",
      description: "Blend digital content with your physical world",
      delay: "delay-[200ms]",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-16 h-16 text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.5v4M9.5 8.5L12 11l2.5-2.5M12 16.5v4m2.5-2.5L12 14l-2.5 2.5"
          />
        </svg>
      ),
    },
    {
      title: "Mixed Reality",
      description: "Experience seamless digital-physical integration",
      delay: "delay-[300ms]",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-16 h-16 text-cyan-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 9v4.5m13.5-4.5V15M3 15.75h18M3 8.25h18m-9-4.5v4.5m0 0l2.25 2.25m-4.5 0L12 8.25"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const intervalId = setInterval(() => {
        setTransformStage((prev) => (prev + 1) % features.length);
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [isMobile, features.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderCard = (stage: number) => {
    const currentStage = features[stage];

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.5 },
          }}
          className={`absolute w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col justify-center items-center p-8`}
        >
          {currentStage.svg}
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {currentStage.title}
          </h2>
          <p className="text-center text-gray-600">
            {currentStage.description}
          </p>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white overflow-y-auto"
    >
      <CircuitPattern />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="flex items-center justify-start max-w-7xl mx-auto sm:mb-10 md:mb-16 lg:mb-24">
          <div className="flex flex-col justify-center items-center gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 50,
              }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-thin tracking-wide mb-8 
              leading-[1.2] sm:leading-[1.1] lg:leading-[1.2] 
              px-4 sm:px-8 lg:px-12 text-left"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Engage with the Future of Reality
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.9,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/Reality"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white
                bg-gradient-to-r from-blue-600 to-purple-600 rounded-full
                transform transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Explore the Technology
                <svg
                  className="ml-2 w-5 h-5 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="block lg:hidden relative w-full h-[500px] flex justify-center items-center">
          <div className="relative w-full max-w-sm h-96">
            {renderCard(transformStage)}
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 20,
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20,
              }}
              transition={{
                duration: 0.5,
                delay: isVisible ? 0.2 : 0,
              }}
              className={`p-6 rounded-2xl shadow-2xl text-left bg-gradient-to-b text-black`}
            >
              {feature.svg}
              <h2 className="text-2xl font-normal mt-2  mb-4">
                {feature.title}
              </h2>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
