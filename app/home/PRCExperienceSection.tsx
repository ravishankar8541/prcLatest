"use client";

import { useEffect, useRef, useState } from "react";

export default function PRCExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;

    const syncPlayback = () => {
      if (reduceMotion.matches || !isVisible) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (entry.isIntersecting) setHasRevealed(true);
      syncPlayback();
    }, { threshold: 0.2 });

    observer.observe(section);
    reduceMotion.addEventListener("change", syncPlayback);

    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", syncPlayback);
      video.pause();
    };
  }, []);

  return (
    <section
      className={`prc-experience${hasRevealed ? " is-revealed" : ""}`}
      ref={sectionRef}
    >
      <video
        className="prc-experience__video"
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster="/prc-hero-faucet.jpg"
        aria-hidden="true"
      >
        <source src="/newVideo.mp4" type="video/mp4" />
      </video>

      <div className="prc-experience__shade" aria-hidden="true" />
    </section>
  );
}


