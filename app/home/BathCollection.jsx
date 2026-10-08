"use client";

import { useState } from "react";

const products = [
  {
    name: "C.P. Taps",
    image: "/CpTaps/1.png",
    alt: "PRC chrome C.P. tap",
    href: "/CpTaps/1.png",
  },
  {
    name: "C.P. Bend Shower",
    image: "/C.P.BENDSHOWER/1.png",
    alt: "PRC chrome bend shower",
    href: "/C.P.BENDSHOWER/1.png",
  },
  {
    name: "Health Faucet Set",
    image: "/C.P.HEALTHFAUATSET/1.png",
    alt: "PRC health faucet set",
    href: "/C.P.HEALTHFAUATSET/1.png",
  },
  {
    name: "Hand Shower Set",
    image: "/HandShowerSets/1.png",
    alt: "PRC hand shower set",
    href: "/HandShowerSets/1.png",
  },
  {
    name: "Basin Waste Coupling",
    image: "/BasinWasteCouplings/2.png",
    alt: "Basin Waste Coupling",
    href: "/BasinWasteCouplings/2.png",
  },
  {
    name: "C.P. Flange",
    image: "/C.P.Flange/1.png",
    alt: "C.P. Flange",
    href: "/BasinWasteCouplings/2.png",
  },
  {
    name: "Kent R.O. Valve",
    image: "/KentR.O.Valve/1.png",
    alt: "Kent R.O. Valve",
    href: "/KentR.O.Valve/1.png/1.png",
  },
  {
    name: "Spindle",
    image: "/Spindle/1.png",
    alt: "Spindle",
    href: "/Spindle/1.png/1.png",
  },
  {
    name: "Fastener Nut-Bolt",
    image: "/FastenerNut-Bolt/1.png",
    alt: "Fastener Nut-Bolt",
    href: "/FastenerNut-Bolt/1.png",
  },
   {
    name: "Jet Spray",
    image: "/JetSpray/1.png",
    alt: "Jet Spray",
    href: "/JetSpray/1.png",
  },
  {
    name: "S.S. Drain Jali",
    image: "/S.S.DrainJali/1.png",
    alt: "S.S. Drain Jali",
    href: "/S.S.DrainJali/1.png",
  },
   {
    name: "PVC Tap Something Head",
    image: "/PVCTapSomethingHead/1.png",
    alt: "PVC Tap Something Head",
    href: "/PVCTapSomethingHead/1.png",
  },
];

export default function BathCollection() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bath-collection" aria-labelledby="bath-collection-title">
      <div className="bath-collection__inner">
        <header className="bath-collection__heading">
          <p className="bath-collection__eyebrow">Our Products</p>
          <h2 id="bath-collection-title">Explore Our Bath Collection</h2>
          <span className="bath-collection__rule" aria-hidden="true" />
        </header>

        <div
          className={`bath-collection__viewport${paused ? " is-paused" : ""}`}
          aria-label="PRC bath product collection"
        >
          <div className="bath-collection__track">
            {[false, true].map((isDuplicate) => (
              <div
                className="bath-collection__group"
                key={isDuplicate ? "duplicate" : "products"}
                aria-hidden={isDuplicate ? "true" : undefined}
              >
                {products.map((product, index) => (
                  <a
                    className="bath-collection__card"
                    href={product.href}
                    key={`${isDuplicate ? "duplicate-" : ""}${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Explore PRC ${product.name}`}
                    tabIndex={isDuplicate ? -1 : undefined}
                  >
                    <span className="bath-collection__image-wrap">
                      <img
                        src={product.image}
                        alt={product.alt}
                        loading={index < 3 || (isDuplicate && index === 0) ? "eager" : "lazy"}
                        decoding="async"
                        draggable="false"
                      />
                      <span className="bath-collection__view" aria-hidden="true">
                        Explore collection <span>↗</span>
                      </span>
                    </span>
                    <span className="bath-collection__name">{product.name}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="bath-collection__controls">
          <button
            className="bath-collection__pause"
            type="button"
            aria-pressed={paused}
            onClick={() => setPaused((current) => !current)}
          >
            {paused ? "Resume movement" : "Pause movement"}
          </button>
        </div>
      </div>
    </section>
  );
}
