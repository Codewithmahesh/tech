import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Headset, Users } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Headset className="w-8 sm:w-10 h-8 sm:h-10" />,
      title: "Virtual Reality",
      description:
        "Step into immersive 3D worlds with cutting-edge VR technology.",
      color: "from-purple-600 to-purple-400",
      gradient:
        "bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent",
      border: "border-purple-500/20",
      stats: "200K+ Active Users",
    },
    {
      icon: <Globe className="w-8 sm:w-10 h-8 sm:h-10" />,
      title: "Digital World",
      description:
        "Explore endless possibilities in our expansive digital universe.",
      color: "from-blue-600 to-blue-400",
      gradient:
        "bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent",
      border: "border-blue-500/20",
      stats: "1000+ Worlds",
    },
    {
      icon: <Users className="w-8 sm:w-10 h-8 sm:h-10" />,
      title: "Social Connection",
      description:
        "Connect with a global community in real-time virtual spaces.",
      color: "from-cyan-600 to-cyan-400",
      gradient:
        "bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent",
      border: "border-cyan-500/20",
      stats: "50K+ Daily Users",
    },
    {
      icon: <Cpu className="w-8 sm:w-10 h-8 sm:h-10" />,
      title: "AI Integration",
      description:
        "Experience next-gen AI-powered interactions and experiences.",
      color: "from-indigo-600 to-indigo-400",
      gradient:
        "bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-transparent",
      border: "border-indigo-500/20",
      stats: "24/7 Support",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          transform: `translate(${mousePosition.x * 0.01}px, ${
            mousePosition.y * 0.01
          }px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-8 sm:gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 sm:space-y-8 max-w-4xl"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Metaverse Revolution
              <br />
              with Atomix
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Experience a revolutionary platform where virtual and physical
              worlds converge.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/Reality" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:scale-105 hover:shadow-lg transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Explore Technologies"
                >
                  Explore Technologies
                </motion.button>
              </Link>
              <motion.button
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white border-2 border-purple-500 rounded-full hover:bg-purple-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Watch Demo"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-8 sm:mt-12 px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden ${feature.gradient} backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 border ${feature.border} group`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
                <div
                  className={`bg-gradient-to-r ${feature.color} p-3 sm:p-4 rounded-lg sm:rounded-xl w-fit mb-3 sm:mb-4 shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {feature.description}
                </p>
                <div className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-purple-400">
                  {feature.stats}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
