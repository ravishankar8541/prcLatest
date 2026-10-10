"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { productCatalog } from "./catalog";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 3.8 9 3.2a1.2 1.2 0 0 1 1.4.7l1.1 2.7a1.2 1.2 0 0 1-.3 1.4l-1.4 1.2a13.7 13.7 0 0 0 5 5l1.2-1.4a1.2 1.2 0 0 1 1.4-.3l2.7 1.1a1.2 1.2 0 0 1 .7 1.4l-.6 2.4a1.8 1.8 0 0 1-1.7 1.4A15.5 15.5 0 0 1 4.8 5.5a1.8 1.8 0 0 1 1.8-1.7Z" />
    </svg>
  );
}

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const closeProductsTimer = useRef<number | null>(null);

  const openProducts = () => {
    if (closeProductsTimer.current !== null) {
      window.clearTimeout(closeProductsTimer.current);
      closeProductsTimer.current = null;
    }
    setProductsOpen(true);
  };

  const scheduleCloseProducts = () => {
    if (closeProductsTimer.current !== null) window.clearTimeout(closeProductsTimer.current);
    closeProductsTimer.current = window.setTimeout(() => {
      setProductsOpen(false);
      closeProductsTimer.current = null;
    }, 220);
  };

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
      if (window.scrollY > 24) setMenuOpen(false);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenus = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header data-native-cursor className={`site-header${isScrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`}>
      <div className="header-shell">
        <Link className="brand-mark" href="/" aria-label="PRC Bath Fittings home" onClick={closeMenus}>
          <Image src="/prcNewLogo.png" alt="PRC Bath Fittings" width={250} height={124} priority />
        </Link>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-navigation${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <Link className="nav-link" href="/" onClick={closeMenus}>Home</Link>
          <Link className="nav-link" href="/about" onClick={closeMenus}>About Us</Link>

          <div
            className={`products-nav${productsOpen ? " is-open" : ""}`}
            onMouseEnter={openProducts}
            onMouseLeave={scheduleCloseProducts}
          >
            <button
              className="nav-link products-trigger"
              type="button"
              aria-expanded={productsOpen}
              aria-controls="product-menu"
              onClick={() => setProductsOpen((open) => !open)}
            >
              Product <span className="chevron" aria-hidden="true" />
            </button>
            <div className="mega-menu" id="product-menu">
              <div className="mega-menu-heading">
                <span>PRC COLLECTION</span>
                <Link href="/#products" onClick={closeMenus}>View all products <span aria-hidden="true">↗</span></Link>
              </div>
              <div className="product-grid">
                {productCatalog.map((product) => (
                  <Link
                    className="product-menu-link"
                    href={`/products/${product.slug}`}
                    key={product.slug}
                    onClick={closeMenus}
                  >
                    <span className="product-index">{String(product.number).padStart(2, "0")}</span>
                    <span>{product.name}</span>
                    <span className="product-arrow" aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link className="nav-link" href="/why-prc" onClick={closeMenus}>Why PRC</Link>
          <Link className="nav-link" href="/contact" onClick={closeMenus}>Contact Us</Link>
        </nav>

        <a className="header-contact" href="tel:+919643332209" aria-label="Call PRC Sanitary Ware at plus 91 96433 32209">
          <span className="contact-icon"><PhoneIcon /></span>
          <span className="contact-number">+91 96433 32209</span>
          <span className="contact-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
