"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MINIMUM_DISPLAY_TIME = 850;
const MAXIMUM_DISPLAY_TIME = 2200;

export default function BrandLoader() {
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const startedAt = Date.now();
    let exitTimer: number | undefined;
    let hasStartedLeaving = false;

    const beginExit = () => {
      if (hasStartedLeaving) return;
      hasStartedLeaving = true;

      const remainingTime = Math.max(
        0,
        MINIMUM_DISPLAY_TIME - (Date.now() - startedAt),
      );

      exitTimer = window.setTimeout(() => setLeaving(true), remainingTime);
    };

    if (document.readyState === "complete") {
      beginExit();
    } else {
      window.addEventListener("load", beginExit, { once: true });
    }

    const fallbackTimer = window.setTimeout(beginExit, MAXIMUM_DISPLAY_TIME);

    return () => {
      window.removeEventListener("load", beginExit);
      window.clearTimeout(fallbackTimer);
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`brand-loader${leaving ? " brand-loader--leaving" : ""}`}
      role="status"
      aria-label="Loading PRC Bath Fittings"
      aria-hidden={leaving}
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && event.propertyName === "opacity") {
          setMounted(false);
        }
      }}
    >
      <div className="brand-loader__content">
        <div className="brand-loader__stage" aria-hidden="true">
          <span className="brand-loader__ring brand-loader__ring--outer" />
          <span className="brand-loader__ring brand-loader__ring--middle" />
          <span className="brand-loader__ring brand-loader__ring--inner" />
          <span className="brand-loader__orbit brand-loader__orbit--a" />
          <span className="brand-loader__orbit brand-loader__orbit--b" />
          <Image
            className="brand-loader__logo"
            src="/prcNewLogo.png"
            alt="PRC Bath Fittings"
            width={250}
            height={124}
            preload
          />
        </div>

        <span className="brand-loader__rule" aria-hidden="true" />
        <p className="brand-loader__descriptor">SANITARYWARE · BATH FITTINGS</p>

        <div className="brand-loader__progress" aria-hidden="true">
          <span />
        </div>

        <p className="brand-loader__message">PREPARING YOUR EXPERIENCE</p>
      </div>
    </div>
  );
}
