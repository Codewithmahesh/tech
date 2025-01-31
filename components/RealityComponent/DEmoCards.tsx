"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { PinContainer } from "../ui/3d-pin";
import { Box, Lock, Share, Zap, Image, Monitor } from "lucide-react";

const DemoCards = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const demoCards = useMemo(
    () => [
      {
        title: "Basic Viewer",
        description: "Simple 3D model viewer for your website",
        icon: <Box className="w-10 h-10 text-blue-400" />,
        navigate: "Try Now",
        link:"/Reality/Cards"  
      },
      {
        title: "Secure Access",
        description: "Basic access control for your content",
        icon: <Lock className="w-10 h-10 text-green-400" />,
        navigate: "Explore",
        link:"/Reality/Cards"  
      },
      {
        title: "Easy Share",
        description: "Share your models via simple links",
        icon: <Share className="w-10 h-10 text-yellow-400" />,
        navigate: "Try Now",
        link:"/Reality/Cards"  
      },
      {
        title: "Fast Setup",
        description: "Get started in minutes with our guide",
        icon: <Zap className="w-10 h-10 text-purple-400" />,
        navigate: "Try Now",
        link:"/Reality/Cards"  
      },
      {
        title: "Image Display",
        description: "Show your products with basic previews",
        icon: <Image className="w-10 h-10 text-pink-400" />,
        navigate: "Try Now",
        link:"/Reality/Cards"  
      },
      {
        title: "Preview Mode",
        description: "Simple product previews for customers",
        icon: <Monitor className="w-10 h-10 text-orange-400" />,
        navigate: "Try Now",
        link:"/Reality/Cards"  
      },
    ],
    []
  );

  if (!mounted) return null;

  return (
    <div className=" px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {demoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PinContainer title={card.navigate} href={card.link}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[22rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 text-xl text-slate-100">
                    {card.title}
                  </h3>
                  <div className="text-sm !m-0 !p-0 font-normal">
                    <span className="text-slate-400">{card.description}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-center h-24">
                    {card.icon}
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