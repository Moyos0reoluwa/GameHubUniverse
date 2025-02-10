"use client";

import React, { useState, useEffect, useRef } from "react";
import "animate.css";

interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alexander",
    feedback:
      "Amazing service! The team was professional and exceeded my expectations.",
    designation: "CEO, Peachy Academy",
  },
  {
    id: 2,
    name: "Damilare",
    feedback:
      "A truly wonderful experience from start to finish. Highly recommended!",
    designation: "CEO, Akonilede",
  },
  {
    id: 3,
    name: "Funmilola",
    feedback:
      "Top-notch quality and support. I couldn't have asked for better.",
    designation: "Entrepreneur",
  },
  {
    id: 4,
    name: "Emily Davis",
    feedback: "Everything was perfect. Will definitely come back again.",
    designation: "Freelancer",
  },
  {
    id: 5,
    name: "Michael Brown",
    feedback: "Exceptional work and great attention to detail. Thank you!",
    designation: "Product Manager",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    feedback: "Impressive results delivered on time. A+ for the effort!",
    designation: "Designer",
  },
  {
    id: 7,
    name: "David Lee",
    feedback:
      "Their commitment to excellence is unparalleled. Highly satisfied!",
    designation: "CEO, Kevin's Workshop",
  },
];

export default function TestimonialCarousel(): React.ReactElement {
  const [current, setCurrent] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // For touch swipe handling
  const touchStartX = useRef<number>(0);

  // Move to the next testimonial
  const handleNext = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Move to the previous testimonial
  const handlePrev = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-swap every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Reset animation state when animation completes
  const handleAnimationEnd = (): void => {
    setIsAnimating(false);
  };

  // Record the starting touch position
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Determine swipe direction and trigger navigation
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>): void => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // If swipe distance is significant (e.g., > 50px), change slide
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left
        handleNext();
      } else {
        // Swiped right
        handlePrev();
      }
    }
  };

  return (
    <div className="py-16 bg-gray-100">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-green-500 mb-6">
          Our Client Testimonials
        </h2>
      </div>

      {/* Carousel Container with swipe event handlers */}
      <div
        className="relative max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Testimonial Content */}
        <div
          key={testimonials[current].id}
          className="p-8 text-center animate__animated animate__fadeIn"
          onAnimationEnd={handleAnimationEnd}
        >
          <p className="text-lg text-gray-700 italic">
            "{testimonials[current].feedback}"
          </p>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            {testimonials[current].name}
          </h3>
          <p className="text-gray-500">{testimonials[current].designation}</p>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrent(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-gray-800" : "bg-gray-400"
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
}
