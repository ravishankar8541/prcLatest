"use client";

import { useEffect, useRef, useState } from "react";

const products = [
  {
    name: "C.P. Taps",
    image: "/CpTaps/1.png",
    alt: "PRC chrome C.P. tap",
    href: "https://www.prcsanitaryware.com/product-list.php?id=3",
  },
  {
    name: "C.P. Bend Shower",
    image: "/C.P.BENDSHOWER/1.png",
    alt: "PRC chrome bend shower",
    href: "https://www.prcsanitaryware.com/product-list.php?id=4",
  },
  {
    name: "Health Faucet Set",
    image: "/C.P.HEALTHFAUATSET/1.png",
    alt: "PRC health faucet set",
    href: "https://www.prcsanitaryware.com/product-list.php?id=5",
  },
  {
    name: "Hand Shower Set",
    image: "/HandShowerSets/1.png",
    alt: "PRC hand shower set",
    href: "https://www.prcsanitaryware.com/product-list.php?id=6",
  },
];

const slides = [...products, { ...products[0], clone: true }];
const AUTOPLAY_DELAY = 2900;

export default function BathCollection() {
  const [activeSlide, setActiveSlide] = useState(0);
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
      setActiveSlide((current) => Math.min(current + 1, products.length));
    }, AUTOPLAY_DELAY);
    return () => window.clearTimeout(timer);
  }, [activeSlide, paused, reducedMotion]);

  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    if (activeSlide === products.length) {
      resetWithoutAnimation.current = true;
      setActiveSlide(0);
    }
  };

  const goTo = (index) => setActiveSlide(index);
  const goToNext = () => setActiveSlide((current) => (current >= products.length - 1 ? 0 : current + 1));
  const goToPrevious = () => setActiveSlide((current) => (current <= 0 ? products.length - 1 : current - 1));
  const currentProduct = activeSlide === products.length ? 0 : activeSlide;

  return (
    <section className="bath-collection" aria-labelledby="bath-collection-title">
      <div className="bath-collection__inner">
        <header className="bath-collection__heading">
          <p className="bath-collection__eyebrow">Our Products</p>
          <h2 id="bath-collection-title">Explore Our Bath Collection</h2>
          <span className="bath-collection__rule" aria-hidden="true" />
        </header>

        <div
          className="bath-collection__viewport"
          ref={viewportRef}
          aria-label="PRC bath product collection"
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
            if (distance < -44) goToNext();
            if (distance > 44) goToPrevious();
            touchStartX.current = null;
          }}
        >
          <div className="bath-collection__track" ref={trackRef} onTransitionEnd={handleTransitionEnd}>
            {slides.map((product, index) => (
              <a
                className="bath-collection__card"
                href={product.href}
                key={`${product.name}-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Explore PRC ${product.name}`}
                aria-hidden={product.clone ? "true" : undefined}
                tabIndex={product.clone ? -1 : 0}
              >
                <span className="bath-collection__image-wrap">
                  <img
                    src={product.image}
                    alt={product.clone ? "" : product.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    draggable="false"
                  />
                  <span className="bath-collection__view" aria-hidden="true">Explore collection <span>↗</span></span>
                </span>
                <span className="bath-collection__name">{product.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="bath-collection__controls" aria-label="Collection carousel controls">
          <span className="bath-collection__count">{String(currentProduct + 1).padStart(2, "0")} <i /> {String(products.length).padStart(2, "0")}</span>
          <div className="bath-collection__dots" aria-label="Choose a featured product">
            {products.map((product, index) => (
              <button
                className={`bath-collection__dot${currentProduct === index ? " is-active" : ""}`}
                type="button"
                key={product.name}
                aria-label={`Show ${product.name}`}
                aria-current={currentProduct === index ? "true" : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <div className="bath-collection__arrows">
            <button type="button" onClick={goToPrevious} aria-label="Previous products">←</button>
            <button type="button" onClick={goToNext} aria-label="Next products">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
