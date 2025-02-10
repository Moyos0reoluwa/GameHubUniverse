"use client";

import React from "react";
import Image from "next/image";
import "animate.css";
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function ContactSection(): React.ReactElement {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Contacts Section - appears first on mobile, right on desktop */}
          <div className="w-full md:w-[70vw] order-1 md:order-2 mb-8 md:mb-0">
            <div className="animate__animated animate__fadeInUp">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg mb-4">Phone: +1 234 567 890</p>
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-500 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-green-500 transition"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-black transition"
                >
                  <SiTiktok />
                </a>
              </div>
              <p className="text-lg">Email: contact@gamehub.com</p>
            </div>
          </div>

          {/* Image Section - appears second on mobile, left on desktop */}
          <div className="w-full md:w-[30vw] order-2 md:order-1">
            <div className="animate__animated animate__fadeIn">
              <Image
                src="/contact-image.jpg"
                alt="Contact Us"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
