"use client";

import React from "react";
import Link from "next/link";
import "animate.css";

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800 animate__animated animate__fadeInUp">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Branding Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">GameHub</h2>
          </div>
          {/* Quick Links */}
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-gray-100 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-100 transition">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-gray-100 transition">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GameHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
