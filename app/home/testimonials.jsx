"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Abhishek",
    company: "PRC Sanitary Ware",
    message:
      "The genuine product I found and the best in quality, durability. Price is in budget as compared to other local market.",
    image:
      "https://prcsanitaryware.com/upload/testimonial/d5f92538fe220ad219799e54808a4e2e.jpg",
  },
  {
    id: 2,
    name: "Anita Singh",
    company: "PRC Sanitary Ware",
    message:
      "I bought a basin from PRC and I found it worth it has been already 5 years and no stain and other problems I found.",
    image:
      "https://prcsanitaryware.com/upload/testimonial/51618bad8c638e25c21c70787614800f.jpg",
  },
  {
    id: 3,
    name: "Rajesh",
    company: "PRC Sanitary Ware",
    message:
      "The best part is price rate it is in budget range and the quality is also good.",
    image:
      "https://prcsanitaryware.com/upload/testimonial/389672c642d5c5659ac2a4fa8e1a50cf.jpg",
  },
];
export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  // Auto move right to left continuously every 2.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2500);

    return () => clearInterval(timer);
  }, [total]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const firstCard = testimonials[currentIndex];
  const secondCard = testimonials[(currentIndex + 1) % total];

  return (
    <section className="testimonial-section relative z-10 w-full bg-[#f0eee7] pt-16 lg:pt-20 clear-both select-none">
      {/* Top part - testimonials with constrained width */}
      <div className="mx-auto w-full max-w-[98%] px-3 pb-16 sm:px-6 sm:pb-20 lg:pb-24 xl:max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Left Column: Headings & Read More CTA */}
          <div className="w-full lg:w-[32%] flex flex-col items-start text-left flex-shrink-0">
            <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a2800b]">
              PRC Sanitary Ware
            </span>
            <h2 className="mb-4 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[#171715] sm:text-5xl">
              What Our <br />
              <span className="text-[#a2800b]">Customers</span> Say
            </h2>
            <p className="mb-6 max-w-sm text-[14px] leading-7 text-[#69675f]">
              Hear from PRC Sanitary Ware customers about the quality,
              durability, and value of their bath fittings and sanitaryware.
            </p>
            <Link
              href="/contact"
              className="testimonial-read-more inline-flex items-center gap-3 rounded-full border border-[#090908] bg-[#090908] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_22px_rgba(23,23,21,0.14)] transition-all duration-300 hover:border-[#f5c400] hover:bg-[#f5c400] hover:text-[#090908] active:scale-95"
            >
              <span>Contact Us</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Right Column: Carousel Track */}
          <div className="w-full lg:w-[68%] relative overflow-hidden px-1">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7bb53] bg-white text-[#292820] shadow-[0_5px_18px_rgba(20,19,16,0.10)] transition-all duration-300 hover:border-[#090908] hover:bg-[#090908] hover:text-[#f5c400] active:scale-90 cursor-pointer sm:h-10 sm:w-10"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7bb53] bg-white text-[#292820] shadow-[0_5px_18px_rgba(20,19,16,0.10)] transition-all duration-300 hover:border-[#090908] hover:bg-[#090908] hover:text-[#f5c400] active:scale-90 cursor-pointer sm:h-10 sm:w-10"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* 2 Testimonials Side by Side */}
            <div className="grid grid-cols-1 gap-5 px-9 py-2 sm:px-12 md:grid-cols-2 md:gap-6">
              {/* Card 1 */}
              <div
                key={firstCard.id}
                className="relative flex min-h-[290px] flex-col items-center rounded-[22px] border border-[#ece2bf] bg-white px-6 py-8 text-center shadow-[0_12px_38px_rgba(33,29,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(33,29,18,0.10)]"
              >
                <span aria-hidden="true" className="absolute left-5 top-2 font-serif text-6xl leading-none text-[#f5c400]/30">“</span>
                <div className="mb-4 flex h-[76px] w-[76px] min-h-[76px] min-w-[76px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#f5c400] via-white to-[#a2800b] p-[2px] shadow-[0_5px_18px_rgba(162,128,11,0.16)]">
                  <img
                    src={firstCard.image}
                    alt={firstCard.name}
                    className="h-full w-full rounded-full bg-[#f0eee7] object-cover"
                  />
                </div>
                <h3 className="text-[16px] font-semibold leading-tight text-[#191916]">
                  {firstCard.name}
                </h3>
                <span className="mb-4 mt-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a2800b]">
                  {firstCard.company}
                </span>
                <p className="max-w-[310px] text-[13px] italic leading-7 text-[#626057]">
                  {firstCard.message}
                </p>
              </div>

              {/* Card 2 */}
              <div
                key={secondCard.id}
                className="relative flex min-h-[290px] flex-col items-center rounded-[22px] border border-[#ece2bf] bg-white px-6 py-8 text-center shadow-[0_12px_38px_rgba(33,29,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(33,29,18,0.10)]"
              >
                <span aria-hidden="true" className="absolute left-5 top-2 font-serif text-6xl leading-none text-[#f5c400]/30">“</span>
                <div className="mb-4 flex h-[76px] w-[76px] min-h-[76px] min-w-[76px] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#f5c400] via-white to-[#a2800b] p-[2px] shadow-[0_5px_18px_rgba(162,128,11,0.16)]">
                  <img
                    src={secondCard.image}
                    alt={secondCard.name}
                    className="h-full w-full rounded-full bg-[#f0eee7] object-cover"
                  />
                </div>
                <h3 className="text-[16px] font-semibold leading-tight text-[#191916]">
                  {secondCard.name}
                </h3>
                <span className="mb-4 mt-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#a2800b]">
                  {secondCard.company}
                </span>
                <p className="max-w-[310px] text-[13px] italic leading-7 text-[#626057]">
                  {secondCard.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
