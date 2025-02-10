"use client";

import React from "react";
import Image from "next/image";
import "animate.css";

export default function Hero(): React.ReactElement {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/heroimg.jpeg"
          alt="GameHub Hero Image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white animate__animated animate__fadeIn">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate__animated animate__zoomIn opacity-40">
          GameHub Universe...
        </h1>
        <button
          className="mt-4 px-6 py-3 bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-800 animate__animated animate__infinite animate__pulse"
        >
          Browse our games
        </button>
      </div>
    </section>
  );
}
