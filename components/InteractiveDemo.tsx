"use client";
import React, { useEffect, useState, useRef } from "react";
import { Box, Eye, Smartphone, Code, Share2, Shield } from "lucide-react";

const EnhancedSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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

  const demoCards = [
    {
      title: "3D Product Viewer",
      description:
        "Immersive 3D visualization for your products with real-time interaction",
      icon: Box,
      gradient: "from-blue-500 to-blue-600",
      bgGlow: "group-hover:shadow-blue-500/30",
    },
    {
      title: "Interactive Catalog",
      description:
        "Digital catalog enhanced with AR previews and live product demonstrations",
      icon: Eye,
      gradient: "from-purple-500 to-purple-600",
      bgGlow: "group-hover:shadow-purple-500/30",
    },
    {
      title: "Virtual Try-On",
      description:
        "Revolutionary AR try-on experience for seamless product visualization",
      icon: Smartphone,
      gradient: "from-indigo-500 to-indigo-600",
      bgGlow: "group-hover:shadow-indigo-500/30",
    },
  ];

  const features = [
    {
      title: "Quick Integration",
      description: "Simple setup process with comprehensive documentation",
      icon: Code,
      gradient: "from-emerald-500 to-emerald-600",
      bgGlow: "group-hover:shadow-emerald-500/30",
    },
    {
      title: "Collaborative Sharing",
      description: "Share AR experiences instantly with your team",
      icon: Share2,
      gradient: "from-amber-500 to-amber-600",
      bgGlow: "group-hover:shadow-amber-500/30",
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption for all your AR content",
      icon: Shield,
      gradient: "from-rose-500 to-rose-600",
      bgGlow: "group-hover:shadow-rose-500/30",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(129,140,248,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(168,85,247,0.1),transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section with Enhanced Animation */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1
            className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6 transition-all duration-1000 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Next-Generation AR/VR Experience
          </h1>
          <p
            className={`text-xl text-gray-600 transition-all duration-1000 delay-200 ease-out
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Transform your digital presence with cutting-edge augmented reality
            solutions
          </p>

          {/* Enhanced CTA Button */}
          <div
            className={`mt-12 transition-all duration-1000 delay-300
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
              <span className="relative flex items-center">
                Get Started Now
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
              </span>
            </button>
          </div>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {demoCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative transition-all duration-700 ease-out transform 
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
                ${`delay-[${index * 200}ms]`}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={`relative bg-white rounded-2xl p-8 h-full transition-all duration-500 
                transform group-hover:-translate-y-2 group-hover:shadow-xl ${card.bgGlow}
                border border-gray-100`}
              >
                <div
                  className={`absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r ${
                    card.gradient
                  } 
                  transform origin-left transition-transform duration-500 
                  ${activeCard === index ? "scale-x-100" : "scale-x-0"}`}
                />

                <div
                  className={`p-4 rounded-lg bg-gradient-to-br ${card.gradient} 
                  text-white inline-block mb-6 transition-transform duration-300 
                  group-hover:scale-110`}
                >
                  <card.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.description}</p>

                <div className="mt-6 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-500">
                  Try Demo
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100
                transition-all duration-700 ease-out transform hover:-translate-y-2
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
                ${`delay-[${(index + 3) * 200}ms]`}
                hover:shadow-lg ${feature.bgGlow}`}
            >
              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} 
                text-white inline-block mb-6 transition-transform duration-300 
                group-hover:scale-110`}
              >
                <feature.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}
                transform origin-left transition-transform duration-500 scale-x-0 
                group-hover:scale-x-100 rounded-b-2xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedSection;
