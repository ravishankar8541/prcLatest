"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    name: "C.P. Taps",
    image:
      "/CpTaps/1.png",
    alt: "Chrome PRC bathroom tap",
    href: "https://www.prcsanitaryware.com/product-list.php?id=3",
  },
  {
    name: "C.P. Flange",
    image: "/C.P.Flange/1.png",
    alt: "C.P. Flange",
    href: "/BasinWasteCouplings/2.png",
  },
  {
    name: "C.P. Bend Showers",
    image:"/C.P.BENDSHOWER/1.png",
    alt: "PRC bath fitting from the product collection",
    href: "https://www.prcsanitaryware.com/product-list.php?id=4",
  },
  {
    name: "Kent R.O. Valve",
    image: "/KentR.O.Valve/1.png",
    alt: "Kent R.O. Valve",
    href: "/KentR.O.Valve/1.png/1.png",
  },
  {
    name: "Hand Shower Sets",
    image:
      "/HandShowerSets/1.png",
    alt: "PRC bath fitting from the product collection",
    href: "https://www.prcsanitaryware.com/product-list.php?id=6",
  },
  {
    name: "Spindle",
    image: "/Spindle/1.png",
    alt: "Spindle",
    href: "/Spindle/1.png/1.png",
  },
];

const slides = [
  { ...categories[categories.length - 1], categoryIndex: categories.length - 1, clone: true },
  ...categories.map((category, categoryIndex) => ({ ...category, categoryIndex })),
  { ...categories[0], categoryIndex: 0, clone: true },
];

const AUTOPLAY_DELAY = 2400;

export default function ProductCategories() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const resetWithoutAnimation = useRef(true);
  const touchStartX = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(media.matches);
    updateMotionPreference();
    media.addEventListener?.("change", updateMotionPreference);
    return () => media.removeEventListener?.("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const moveTrack = () => {
      const first = track.children[0];
      const active = track.children[activeSlide];
      if (!first || !active) return;

      if (resetWithoutAnimation.current) track.style.transition = "none";
      const offset = active.offsetLeft - first.offsetLeft;
      track.style.transform = `translate3d(-${offset}px, 0, 0)`;

      if (resetWithoutAnimation.current) {
        window.requestAnimationFrame(() => {
          track.style.transition = "";
          resetWithoutAnimation.current = false;
        });
      }
    };

    moveTrack();
    const resizeObserver = new ResizeObserver(moveTrack);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    return () => resizeObserver.disconnect();
  }, [activeSlide]);

  useEffect(() => {
    if (paused || reducedMotion) return undefined;
    const timer = window.setTimeout(() => {
      setActiveSlide((current) => Math.min(current + 1, categories.length + 1));
    }, AUTOPLAY_DELAY);
    return () => window.clearTimeout(timer);
  }, [activeSlide, paused, reducedMotion]);

  const handleTrackTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;

    if (activeSlide === 0 || activeSlide === categories.length + 1) {
      resetWithoutAnimation.current = true;
      setActiveSlide(activeSlide === 0 ? categories.length : 1);
    }
  };

  const moveToNext = () => setActiveSlide((current) => Math.min(current + 1, categories.length + 1));
  const moveToPrevious = () => setActiveSlide((current) => Math.max(current - 1, 0));
  const activeCategoryIndex =
    activeSlide === 0
      ? categories.length - 1
      : activeSlide === categories.length + 1
        ? 0
        : activeSlide - 1;

  return (
    <section
      id="products"
      className="category-discover"
      data-header-theme="light"
      aria-labelledby="category-discover-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0]?.clientX - touchStartX.current;
        if (distance < -48) moveToNext();
        if (distance > 48) moveToPrevious();
        touchStartX.current = null;
      }}
    >
      <div className="category-discover__inner">
        <header className="category-discover__header">
          <h2 id="category-discover-title">Explore Product Categories</h2>
          <p>Top-rated, best-selling products trusted and loved by our customers.</p>

          <div className="category-discover__pagination" aria-label="Choose a product category">
            {categories.map((category, index) => (
              <button
                className={`category-discover__dot${activeCategoryIndex === index ? " is-active" : ""}`}
                type="button"
                key={category.name}
                aria-label={`Show ${category.name}`}
                aria-current={activeCategoryIndex === index ? "true" : undefined}
                onClick={() => setActiveSlide(index + 1)}
              >
                <span />
              </button>
            ))}
          </div>
        </header>

        <div
          className="category-discover__viewport"
          ref={viewportRef}
          aria-roledescription="carousel"
          aria-label="PRC product categories"
        >
          <div
            className="category-discover__track"
            ref={trackRef}
            onTransitionEnd={handleTrackTransitionEnd}
          >
            {slides.map((slide, slideIndex) => (
              <a
                className={`category-tile${activeSlide === slideIndex ? " is-active" : ""}`}
                href={slide.href}
                key={`${slide.name}-${slideIndex}`}
                aria-label={`Explore PRC ${slide.name}`}
                aria-hidden={slide.clone ? "true" : undefined}
                tabIndex={slide.clone ? -1 : 0}
              >
                <img
                  src={slide.image}
                  alt={slide.clone ? "" : slide.alt}
                  loading={slideIndex < 3 ? "eager" : "lazy"}
                  decoding="async"
                  draggable="false"
                />
                <span className="category-tile__name">{slide.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
