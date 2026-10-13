"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "C.P. Taps",
    image: "/product-categories/prc-cp-taps-logo.webp",
    alt: "Chrome basin tap with PRC engraved on its body",
    href: "/products/c-p-tap-manufacturer",
  },
  {
    name: "C.P. Bend Shower",
    image: "/product-categories/prc-cp-bend-showers-logo.webp",
    alt: "Chrome bend shower with PRC engraved on the spray head",
    href: "/products/c-p-bend-shower-manufacturer",
  },
  {
    name: "Health Faucet Set",
    image: "/bath-collection/prc-health-faucet-set-logo.webp",
    alt: "Chrome health faucet set with PRC engraved on the sprayer barrel",
    href: "/products/c-p-health-faucet-set-manufacturer",
  },
  {
    name: "Hand Shower Set",
    image: "/product-categories/prc-hand-shower-sets-logo.webp",
    alt: "Chrome hand shower set with PRC engraved on its head and handle",
    href: "/products/c-p-hand-shower-set-manufacturer",
  },
  {
    name: "Basin Waste Coupling",
    image: "/bath-collection/prc-basin-waste-coupling-logo.webp",
    alt: "Basin waste coupling with PRC engraved on its chrome neck",
    href: "/products/basin-waste-coupling-manufacturer",
  },
  {
    name: "C.P. Flange",
    image: "/product-categories/prc-cp-flange-logo.webp",
    alt: "Polished chrome flange with PRC engraved above the center opening",
    href: "/products/c-p-flange-manufacturer",
  },
  {
    name: "Kent R.O. Valve",
    image: "/product-categories/prc-ro-valve-logo.webp",
    alt: "R.O. valve and adapter with PRC engraved on both metal bodies",
    href: "/products/kent-r-o-valve-manufacturer",
  },
  {
    name: "Spindle",
    image: "/product-categories/prc-spindle-logo.webp",
    alt: "Brass tap spindle with PRC engraved on its central collar",
    href: "/products/spindle-manufacturer",
  },
  {
    name: "Fastener Nut-Bolt",
    image: "/bath-collection/prc-fastener-nut-bolt-logo.webp",
    alt: "Fastener kit with PRC branded bolts and nylon wall plugs",
    href: "/products/fastener-nut-bolt-manufacturer",
  },
  {
    name: "Jet Spray",
    image: "/bath-collection/prc-jet-spray-logo.webp",
    alt: "Jet spray kit with PRC engraved on its chrome mounting plate",
    href: "/products/jet-spray-manufacturer",
  },
  {
    name: "S.S. Drain Jali",
    image: "/bath-collection/prc-ss-drain-jali-logo.webp",
    alt: "Stainless steel drain jali with PRC engraved on the front rim",
    href: "/products/s-s-drain-jali-manufacturer",
  },
  {
    name: "PVC Tap Something Head",
    image: "/bath-collection/prc-pvc-tap-logo.webp",
    alt: "White PVC tap with PRC printed on its neck and control knob",
    href: "/products/pvc-tap-something-head-manufacturer",
  },
];

const SCROLL_SPEED = 40;

export default function BathCollection() {
  const [ready, setReady] = useState(false);

  const trackRef = useRef(null);
  const groupRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;

    if (!track || !group) return;

    let cancelled = false;
    const cleanups = [];

    const updateDimensions = () => {
      const width = group.getBoundingClientRect().width;

      if (width <= 0) return;

      track.style.setProperty("--bath-scroll-distance", `${-width}px`);
      track.style.setProperty(
        "--bath-scroll-duration",
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
              // Explicit decoding is not supported for every image.
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
      className="bath-collection"
      aria-labelledby="bath-collection-title"
    >
      <div className="bath-collection__inner">
        <header className="bath-collection__heading">
          <p className="bath-collection__eyebrow">Our Products</p>

          <h2 id="bath-collection-title">
            Explore Our Bath Collection
          </h2>

          <span className="bath-collection__rule" aria-hidden="true" />
        </header>

        <div
          className="bath-collection__viewport"
          role="region"
          aria-label="PRC bath product collection"
        >
          <div
            className="bath-collection__track"
            ref={trackRef}
            data-ready={ready ? "true" : "false"}
          >
            {[false, true].map((isDuplicate) => (
              <div
                className="bath-collection__group"
                key={isDuplicate ? "duplicate" : "products"}
                ref={isDuplicate ? undefined : groupRef}
                aria-hidden={isDuplicate ? true : undefined}
              >
                {products.map((product) => (
                  <Link
                    className="bath-collection__card"
                    href={product.href}
                    key={product.name}
                    aria-label={`View PRC ${product.name}`}
                    tabIndex={isDuplicate ? -1 : undefined}
                  >
                    <span className="bath-collection__image-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={isDuplicate ? "" : product.alt}
                        loading="eager"
                        decoding="async"
                        draggable={false}
                      />

                      <span
                        className="bath-collection__view"
                        aria-hidden="true"
                      >
                        View product <span>↗</span>
                      </span>
                    </span>

                    <span className="bath-collection__name">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx global>{`
        /* Keep your existing layout, card sizes and heading styles. */

        .bath-collection .bath-collection__viewport {
          overflow: hidden;
        }

        .bath-collection .bath-collection__track {
          display: flex;
          width: max-content;
          gap: 0;
          padding: 0;
          animation: none;
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        .bath-collection .bath-collection__track[data-ready="true"] {
          animation: prc-bath-smooth-scroll
            var(--bath-scroll-duration, 60s) linear infinite;
        }

        .bath-collection .bath-collection__group {
          display: flex;
          flex-wrap: nowrap;
          flex: 0 0 auto;
          gap: 24px;
          margin: 0;
          padding: 0 24px 0 0;
          box-sizing: border-box;
        }

        .bath-collection .bath-collection__card {
          flex-shrink: 0;
          transform: none;
          animation: none;
        }

        .bath-collection .bath-collection__image-wrap img {
          display: block;
          object-fit: contain;
          object-position: center;
          image-rendering: auto;
          opacity: 1;
          filter: none;
          transform: none;
          animation: none;
          transition: none;
        }

        .bath-collection
          .bath-collection__viewport:focus-within
          .bath-collection__track[data-ready="true"] {
          animation-play-state: paused;
        }

        @media (hover: hover) {
          .bath-collection
            .bath-collection__viewport:hover
            .bath-collection__track[data-ready="true"] {
            animation-play-state: paused;
          }
        }

        @keyframes prc-bath-smooth-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(
              var(--bath-scroll-distance, -50%),
              0,
              0
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bath-collection .bath-collection__track[data-ready="true"] {
            animation: none;
            will-change: auto;
          }

          .bath-collection .bath-collection__viewport {
            overflow-x: auto;
          }

          .bath-collection__group[aria-hidden="true"] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
