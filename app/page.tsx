"use client";

import "@/app/globals.css";
import ScrollOverlay from "@/components/Home";

const Home = () => {
  return (
    <main className="relative min-h-screen">
      <ScrollOverlay />

      {/* Additional content section */}
      <div className="relative bg-gradient-to-b from-blue-900 to-black">
        <div
          className="relative"
          style={{
            zIndex: 51,
            position: "relative",
            isolation: "isolate",
          }}
        >
          {/* Additional content goes here */}
        </div>
      </div>
    </main>
  );
};

export default Home;
