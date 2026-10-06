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
    <section className="relative w-full bg-white text-[#171717]" data-header-theme="light">
      {/* Top Border */}
      <div className="h-px w-full bg-[#e9e5dd]" />

      {/* Main Content */}
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`
                group
                relative
                flex
                min-h-[205px]
                flex-col
                items-center
                justify-center
                px-6
                py-10
                text-center
                transition-all
                duration-500
                hover:bg-[#fcfbf8]

                md:min-h-[215px]

                lg:min-h-[220px]
                lg:px-8
                lg:py-10

                ${
                  index !== features.length - 1
                    ? "lg:border-r lg:border-[#e8e3da]"
                    : ""
                }

                ${
                  index < 2
                    ? "md:border-b md:border-[#e8e3da] lg:border-b-0"
                    : ""
                }

                ${
                  index === 2
                    ? "md:border-r md:border-[#e8e3da] lg:border-r"
                    : ""
                }
              `}
            >
              {/* Top Gold Hover Line */}
              <span
                className="
                  absolute
                  left-1/2
                  top-0
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  bg-[#c5a05a]
                  transition-all
                  duration-500
                  group-hover:w-14
                "
              />

              {/* Number */}
              <span
                className="
                  absolute
                  left-6
                  top-6
                  text-[9px]
                  font-semibold
                  tracking-[0.28em]
                  text-[#b2945b]
                  opacity-70

                  lg:left-7
                  lg:top-6
                "
              >
                {feature.number}
              </span>

              {/* Icon */}
              <div
                className="
                  relative
                  mb-5
                  flex
                  h-[60px]
                  w-[60px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#e5e0d7]
                  bg-[#faf9f6]
                  text-[#1b1b1b]

                  transition-all
                  duration-500

                  group-hover:-translate-y-1
                  group-hover:border-[#c5a05a]
                  group-hover:bg-white
                  group-hover:text-[#b08b48]
                  group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]
                "
              >
                {feature.icon}

                {/* Gold Dot */}
                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    h-2
                    w-2
                    rounded-full
                    bg-[#c5a05a]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3
                  className="
                    text-[14px]
                    font-medium
                    leading-6
                    tracking-[-0.01em]
                    text-[#171717]
                    sm:text-[15px]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-[12px]
                    font-normal
                    leading-5
                    tracking-[0.025em]
                    text-[#77736c]
                    sm:text-[13px]
                  "
                >
                  {feature.subtitle}
                </p>
              </div>

              {/* Bottom Line */}
              <div
                className="
                  mt-5
                  h-px
                  w-7
                  bg-[#d9d4ca]
                  transition-all
                  duration-500
                  group-hover:w-12
                  group-hover:bg-[#c5a05a]
                "
              />
            </div>
          ))}

        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-px w-full bg-[#e9e5dd]" />
    </section>
  );
};

export default ManufacturingHighlights;
