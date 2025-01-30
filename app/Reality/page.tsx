import FeaturesSection from "@/components/RealityComponent/FeatureCard";
import InteractiveDemo from "@/components/RealityComponent/InteractiveDemo";
import HeroSection from "@/components/RealityComponent/VRHero";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <InteractiveDemo />
      <hr />
      <FeaturesSection />
    </div>
  );
};

export default page;
