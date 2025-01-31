import React from "react";

const CircuitPattern = () => {
  return (
    <div>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#3B82F6", stopOpacity: 0.05 }} />
            <stop offset="100%" style={{ stopColor: "#8B5CF6", stopOpacity: 0.05 }} />
          </linearGradient>
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(0)"
          >
            {/* Horizontal lines */}
            <path
              d="M0 10h8v0.5h-8v-0.5zm12 0h8v0.5h-8v-0.5zm12 0h8v0.5h-8v-0.5z"
              fill="currentColor"
              className="text-gray-300"
            />
            {/* Vertical lines */}
            <path
              d="M10 0v8h0.5v-8h-0.5zm0 12v8h0.5v-8h-0.5zm0 12v8h0.5v-8h-0.5z"
              fill="currentColor"
              className="text-gray-500"
            />
            <path
              d="M20 0v8h0.5v-8h-0.5zm0 12v8h0.5v-8h-0.5zm0 12v8h0.5v-8h-0.5z"
              fill="currentColor"
              className="text-gray-500"
            />
            <path
              d="M30 0v8h0.5v-8h-0.5zm0 12v8h0.5v-8h-0.5zm0 12v8h0.5v-8h-0.5z"
              fill="currentColor"
              className="text-gray-500"
            />
            {/* Connection dots */}
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-gray-500" />
            <circle cx="20" cy="10" r="1" fill="currentColor" className="text-gray-500" />
            <circle cx="30" cy="10" r="1" fill="currentColor" className="text-gray-500" />
          </pattern>
        </defs>
        {/* Background rect with gradient */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" />
        {/* Pattern rect */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#circuit)"
          fillOpacity="0.1"
        />
      </svg>
    </div>
  );
};

export default CircuitPattern;