"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const banners = [
  {
    id: 1,
    image: "/bannerPcr1.png",
    alt: "Premium Quality Products",
  },
  {
    id: 2,
    image: "/bannerPcr2.png",
    alt: "Trusted Products Better Business",
  },
];

export default function ProductShowcase() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  }, []);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden shadow-2xl">
        {/* Banners container */}
        <div className="relative h-auto aspect-[1791/878] lg:aspect-auto lg:h-[700px] xl:h-[800px]">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                index === current
                  ? "translate-x-0 opacity-100"
                  : index < current
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
              }`}
            >
              {/* Background image */}
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Previous button */}
          <button
            onClick={prevSlide}
            aria-label="Previous banner"
            className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-md transition hover:scale-110 hover:bg-black/60 sm:left-6 sm:h-14 sm:w-14 lg:left-8 lg:h-16 lg:w-16"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={nextSlide}
            aria-label="Next banner"
            className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur-md transition hover:scale-110 hover:bg-black/60 sm:right-6 sm:h-14 sm:w-14 lg:right-8 lg:h-16 lg:w-16"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8 sm:gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index ? "w-10 bg-white" : "w-2.5 bg-white/50"
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
