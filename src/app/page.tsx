"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  // Array of carousel background images
  const carouselImages = [
    "/img/beach1.jpg",
    "/img/dubai2.jpg",
    "/img/paris1.jpg",
    "/img/uk2.jpg",
  ];

  // State to manage the current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 7000); 
    return () => clearInterval(interval); 
  }, [carouselImages.length]);

  return (
    <div className="relative">

      <div
        className="absolute inset-0 -z-10 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${carouselImages[currentImageIndex]})`,
        }}
      ></div>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Discover the World Like Never Before
            </h1>
            <p className="mt-8 text-lg text-white sm:text-xl">
              Unforgettable adventures, stunning destinations, and curated tours designed just for you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-slate-100 overflow-hidden">
                <div className="grid place-items-center border-r-2 border-slate-300 h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  className=" h-full border-none w-full outline-none text-sm pr-2"
                  type="text"
                  id="search"
                  placeholder="View Luxury Tours..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}