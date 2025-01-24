import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, MapPin, Headset } from "lucide-react";

const ARVRRealEstateHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const propertyExperiences = [
    {
      icon: Home,
      title: "Virtual Property Tours",
      description:
        "Explore detailed 3D walkthroughs of properties from anywhere",
    },
    {
      icon: MapPin,
      title: "Interactive Neighborhood Insights",
      description:
        "Discover local amenities, schools, and community features in real-time",
    },
    {
      icon: Headset,
      title: "Immersive Design Visualization",
      description: "Customize and visualize interior designs before purchasing",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Subtle Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.02, 0.98, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-[url('/property-background.svg')] bg-cover opacity-10" />
      </motion.div>

      <div className="relative container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          >
            Reimagine Real Estate
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience properties like never before with cutting-edge AR and VR
            technology
          </p>
        </div>

        <div
          className={`
          grid ${isMobile ? "grid-cols-1 gap-6" : "grid-cols-3 gap-8"}
          max-w-5xl mx-auto
        `}
        >
          {propertyExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="mb-4 flex justify-center">
                <experience.icon className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                {experience.title}
              </h3>
              <p className="text-center text-gray-600">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white 
              px-10 py-4 rounded-full text-lg font-semibold 
              hover:shadow-xl transition-all"
          >
            Start Virtual Tour
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ARVRRealEstateHero;
