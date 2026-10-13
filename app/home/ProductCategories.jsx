"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = [
  {
    name: "C.P. Taps",
    image: "/product-categories/prc-cp-taps-logo.webp",
    alt: "Chrome basin tap with PRC engraved on its body",
    href: "/products/c-p-tap-manufacturer",
  },
  {
    name: "C.P. Flange",
    image: "/product-categories/prc-cp-flange-logo.webp",
    alt: "Polished chrome flange with PRC engraved above the center opening",
    href: "/products/c-p-flange-manufacturer",
  },
  {
    name: "C.P. Bend Showers",
    image: "/product-categories/prc-cp-bend-showers-logo.webp",
    alt: "Chrome bend shower with PRC engraved on the spray head",
    href: "/products/c-p-bend-shower-manufacturer",
  },
  {
    name: "Kent R.O. Valve",
    image: "/product-categories/prc-ro-valve-logo.webp",
    alt: "R.O. valve and threaded adapter with PRC engraved on both metal bodies",
    href: "/products/kent-r-o-valve-manufacturer",
  },
  {
    name: "Hand Shower Sets",
    image: "/product-categories/prc-hand-shower-sets-logo.webp",
    alt: "Chrome hand shower set with PRC engraved on its head and handle",
    href: "/products/c-p-hand-shower-set-manufacturer",
  },
  {
    name: "Spindle",
    image: "/product-categories/prc-spindle-logo.webp",
    alt: "Brass tap spindle with PRC engraved on its central collar",
    href: "/products/spindle-manufacturer",
  },
];

const SCROLL_SPEED = 45;

export default function ProductCategories() {
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;

    if (!track || !group) return;

    let cancelled = false;
    const cleanups = [];

    const updateDimensions = () => {
      const width = group.getBoundingClientRect().width;

      if (width <= 0) return;

      track.style.setProperty(
        "--category-scroll-distance",
        `${-width}px`
      );

      track.style.setProperty(
        "--category-scroll-duration",
        `${width / SCROLL_SPEED}s`
      );
    };

    updateDimensions();

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateDimensions)
        : null;

    observer?.observe(group);
    window.addEventListener("resize", updateDimensions);

    const waitForImage = (img) =>
      new Promise((resolve) => {
        let settled = false;

        const cleanup = () => {
          img.removeEventListener("load", finish);
          img.removeEventListener("error", finish);
        };

        const finish = async () => {
          if (settled) return;
          settled = true;
          cleanup();

          if (img.naturalWidth > 0 && typeof img.decode === "function") {
            try {
              await img.decode();
            } catch {
              // Continue if the browser cannot decode this image explicitly.
            }
          }

          resolve();
        };

        img.addEventListener("load", finish);
        img.addEventListener("error", finish);

        cleanups.push(cleanup);

        if (img.complete) {
          void finish();
        }
      });

    Promise.all(
      Array.from(track.querySelectorAll("img")).map(waitForImage)
    ).then(() => {
      if (cancelled) return;

      updateDimensions();
      setReady(true);
    });

    return () => {
      cancelled = true;
      observer?.disconnect();
      window.removeEventListener("resize", updateDimensions);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <section
      id="products"
      className="category-discover"
      data-header-theme="light"
      aria-labelledby="category-discover-title"
    >
      <div className="category-discover__inner">
        <header className="category-discover__header">
          <h2 id="category-discover-title">
            Explore Product Categories
          </h2>

          <p>
            Top-rated, best-selling products trusted and loved by our customers.
          </p>
        </header>

        <div
          className="category-discover__viewport"
          role="region"
          aria-label="PRC product categories"
        >
          <div
            className="category-discover__track"
            ref={trackRef}
            data-ready={ready ? "true" : "false"}
          >
            {[false, true].map((clone) => (
              <div
                className="category-discover__group"
                key={clone ? "repeat" : "original"}
                ref={clone ? undefined : groupRef}
                aria-hidden={clone ? true : undefined}
              >
                {categories.map((category) => (
                  <Link
                    className="category-tile"
                    href={category.href}
                    key={category.name}
                    aria-label={`Explore ${category.name} by PRC`}
                    tabIndex={clone ? -1 : 0}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={category.image}
                      alt={clone ? "" : category.alt}
                      width={1122}
                      height={1402}
                      loading="eager"
                      decoding="async"
                      draggable={false}
                    />

                    <span className="category-tile__name">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Your existing layout CSS remains in use. */

        .category-discover .category-discover__viewport {
          overflow: hidden;
        }

        .category-discover .category-discover__track {
          display: flex;
          width: max-content;
          gap: 0;
          padding: 0;
          animation: none;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        .category-discover
          .category-discover__track[data-ready="true"] {
          animation: prc-smooth-category-scroll
            var(--category-scroll-duration, 40s) linear infinite;
        }

        .category-discover .category-discover__group {
          display: flex;
          flex-wrap: nowrap;
          flex: 0 0 auto;
          gap: 24px;
          margin: 0;
          padding: 0 24px 0 0;
          box-sizing: border-box;
        }

        .category-discover .category-tile {
          flex-shrink: 0;
          transform: none;
          animation: none;
          transition: none;
        }

        .category-discover .category-tile img {
          display: block;
          opacity: 1;
          filter: none;
          transform: none;
          animation: none;
          transition: none;
          image-rendering: auto;
        }

        .category-discover
          .category-discover__viewport:focus-within
          .category-discover__track[data-ready="true"] {
          animation-play-state: paused;
        }

        @media (hover: hover) {
          .category-discover
            .category-discover__viewport:hover
            .category-discover__track[data-ready="true"] {
            animation-play-state: paused;
          }
        }

        @keyframes prc-smooth-category-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(
              var(--category-scroll-distance, -50%),
              0,
              0
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .category-discover
            .category-discover__track[data-ready="true"] {
            animation: none;
            will-change: auto;
          }

          .category-discover .category-discover__viewport {
            overflow-x: auto;
          }

          .category-discover
            .category-discover__group[aria-hidden="true"] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
