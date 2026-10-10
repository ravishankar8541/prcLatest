"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    name: "C.P. Taps",
    image: "/CpTaps/1.png",
    alt: "PRC chrome C.P. tap",
    href: "/products/c-p-tap-manufacturer",
  },
  {
    name: "C.P. Bend Shower",
    image: "/C.P.BENDSHOWER/1.png",
    alt: "PRC chrome bend shower",
    href: "/products/c-p-bend-shower-manufacturer",
  },
  {
    name: "Health Faucet Set",
    image: "/C.P.HEALTHFAUATSET/1.png",
    alt: "PRC health faucet set",
    href: "/products/c-p-health-faucet-set-manufacturer",
  },
  {
    name: "Hand Shower Set",
    image: "/HandShowerSets/1.png",
    alt: "PRC hand shower set",
    href: "/products/c-p-hand-shower-set-manufacturer",
  },
  {
    name: "Basin Waste Coupling",
    image: "/BasinWasteCouplings/2.png",
    alt: "Basin Waste Coupling",
    href: "/products/basin-waste-coupling-manufacturer",
  },
  {
    name: "C.P. Flange",
    image: "/C.P.Flange/1.png",
    alt: "C.P. Flange",
    href: "/products/c-p-flange-manufacturer",
  },
  {
    name: "Kent R.O. Valve",
    image: "/KentR.O.Valve/1.png",
    alt: "Kent R.O. Valve",
    href: "/products/kent-r-o-valve-manufacturer",
  },
  {
    name: "Spindle",
    image: "/Spindle/1.png",
    alt: "Spindle",
    href: "/products/spindle-manufacturer",
  },
  {
    name: "Fastener Nut-Bolt",
    image: "/FastenerNut-Bolt/1.png",
    alt: "Fastener Nut-Bolt",
    href: "/products/fastener-nut-bolt-manufacturer",
  },
  {
    name: "Jet Spray",
    image: "/JetSpray/1.png",
    alt: "Jet Spray",
    href: "/products/jet-spray-manufacturer",
  },
  {
    name: "S.S. Drain Jali",
    image: "/S.S.DrainJali/1.png",
    alt: "S.S. Drain Jali",
    href: "/products/s-s-drain-jali-manufacturer",
  },
  {
    name: "PVC Tap Something Head",
    image: "/PVCTapSomethingHead/1.png",
    alt: "PVC Tap Something Head",
    href: "/products/pvc-tap-something-head-manufacturer",
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
                  <Link
                    className="bath-collection__card"
                    href={product.href}
                    key={`${isDuplicate ? "duplicate-" : ""}${product.name}`}
                    aria-label={`View PRC ${product.name}`}
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
                        View product <span>↗</span>
                      </span>
                    </span>
                    <span className="bath-collection__name">{product.name}</span>
                  </Link>
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
