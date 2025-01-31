import CircuitPattern from "@/components/CircuitPattern";
import DemoCards from "@/components/RealityComponent/DEmoCards";
import { TimelineDemo } from "@/components/RealityComponent/Timeline";
import HeroSection from "@/components/RealityComponent/VRHero";
import CyberDivider from "@/components/CyberDivider";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="relative min-h-screen w-full pt-9 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-30">
          <CircuitPattern />
        </div>
        <HeroSection />
        <DemoCards />
        <CyberDivider />
        <TimelineDemo />
      </section>
    </div>
  );
};

export default page;