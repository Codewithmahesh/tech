import {
  useScroll,
  useTransform,
  motion,
  useSpring
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState(0);
  const [inViewStates] = useState<boolean[]>([]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 40,
  });

  return (
    <div
      className="w-full dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10"
      >
        <motion.h2 
          className="text-4xl mt-4 font-normal text-white mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Changelog from my journey
        </motion.h2>
        <motion.p 
          className="text-white text-sm md:text-base max-w-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Two years of pushing the boundaries of AR &amp; VR journey.
        </motion.p>
      </motion.div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <motion.div
            ref={el => {
              itemRefs.current[index] = el;
            }}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={inViewStates[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex justify-start pt-10 md:gap-10"
          >
            <motion.div 
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inViewStates[index] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.div 
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="h-4 w-4 rounded-full bg-blue-400 border border-blue-300 shadow-[0_0_4px_rgba(59,130,246,0.4)] p-2"
                  animate={{ 
                    scale: inViewStates[index] ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.h3 
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500"
                initial={{ opacity: 0, x: -20 }}
                animate={inViewStates[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item.title}
              </motion.h3>
            </motion.div>

            <motion.div 
              className="relative pl-20 pr-4 md:pl-4 w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={inViewStates[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.h3 
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500"
                initial={{ opacity: 0 }}
                animate={inViewStates[index] ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {item.title}
              </motion.h3>
              {item.content}
            </motion.div>
          </motion.div>
        ))}

        <div className="absolute md:left-8 left-8 top-0 w-[2px] h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-300 to-transparent opacity-30" />
          <div className="absolute inset-0 blur-[2px] bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-20" />
          <motion.div
            style={{
              height: heightTransform,
              scaleY: smoothProgress,
              opacity: opacityTransform
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-blue-400 to-transparent shadow-[0_0_4px_rgba(59,130,246,0.3)] rounded-full origin-top"
          />

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="absolute w-1 h-1 left-1/2 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_2px_rgba(59,130,246,0.3)]"
              style={{
                top: `${(i + 1) * 16.6}%`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;