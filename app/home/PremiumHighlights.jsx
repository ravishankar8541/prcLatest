"use client";

import React from "react";

const ManufacturingHighlights = () => {
  const features = [
    {
      number: "01",
      title: "21+ Years",
      subtitle: "of Manufacturing Excellence",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          <path d="M12 3.5l2.1 4.25 4.7.68-3.4 3.32.8 4.68L12 14.23l-4.2 2.2.8-4.68-3.4-3.32 4.7-.68L12 3.5Z" />
          <path d="M8.5 19h7M10 21h4" />
        </svg>
      ),
    },

    {
      number: "02",
      title: "Strict Quality",
      subtitle: "Control Standards",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          <path d="M12 3 19 6v5.1c0 4.3-2.7 7.6-7 9.9-4.3-2.3-7-5.6-7-9.9V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },

    {
      number: "03",
      title: "Advanced",
      subtitle: "Manufacturing Technology",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          <circle cx="12" cy="12" r="3" />

          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.5 1.4-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.5h-2v-.5a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.4-1.4.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H7v-2h.5a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.4-1.4.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V6h2v.5a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L20 9l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.4v2h-.5a1.7 1.7 0 0 0-1.6 1Z" />
        </svg>
      ),
    },

    {
      number: "04",
      title: "Designed with",
      subtitle: "Global Standards",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-6 w-6"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.4 2.4 3.5 5.4 3.5 9s-1.1 6.6-3.5 9c-2.4-2.4-3.5-5.4-3.5-9S9.6 5.4 12 3Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#f3f0e8] text-[#171613]"
      data-header-theme="light"
      aria-label="PRC manufacturing standards"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,160,90,0.16),transparent_58%)]" />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c6a15a] to-transparent" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <article
              key={feature.number}
              className={`group relative flex min-h-[248px] flex-col items-center justify-center px-7 py-12 text-center transition-colors duration-500 hover:bg-white/70 sm:min-h-[260px] ${
                [
                  "border-b border-[#e4dccb] sm:border-r lg:border-b-0",
                  "border-b border-[#e4dccb] lg:border-b-0 lg:border-r",
                  "border-b border-[#e4dccb] sm:border-b-0 sm:border-r",
                  "",
                ][index]
              }`}
            >
              <span className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-[#c6a15a] transition-all duration-500 group-hover:w-16" />

              <span className="absolute left-6 top-6 font-[Georgia,Times_New_Roman,serif] text-[13px] tracking-[0.18em] text-[#b08b48] lg:left-7">
                {feature.number}
              </span>

              <div className="relative mb-6 flex h-[78px] w-[78px] items-center justify-center rounded-full border border-[#e7d7b0] bg-white shadow-[0_14px_34px_rgba(23,22,19,0.06)] transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#f1e6cf] bg-[#fbfaf6] text-[#8a6822] transition-colors duration-500 group-hover:border-[#d4b36a] group-hover:text-[#6f5414] [&_svg]:h-7 [&_svg]:w-7">
                  {feature.icon}
                </div>
              </div>

              <h3 className="font-[Georgia,Times_New_Roman,serif] text-[22px] font-normal leading-none tracking-[-0.03em] text-[#1b1914] sm:text-[24px]">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-[16rem] text-[13px] leading-5 tracking-[0.04em] text-[#6f6a61]">
                {feature.subtitle}
              </p>
              <span className="mt-5 h-px w-8 bg-[#d7c49a] transition-all duration-500 group-hover:w-14 group-hover:bg-[#c6a15a]" />
            </article>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c6a15a] to-transparent" />
    </section>
  );
};

export default ManufacturingHighlights;
