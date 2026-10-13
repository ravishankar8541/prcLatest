"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { productCatalog } from "./catalog";

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");
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

  const downloadCatalogue = async () => {
    if (downloading) return;
    closeMenus();
    setDownloadError("");
    setDownloading(true);
    try {
      const response = await fetch("/api/catalogue");
      if (!response.ok) {
        setDownloadError(response.status === 404
          ? "Catalogue PDF is not available yet. Please contact the PRC team."
          : "Download failed. Please try again.");
        return;
      }
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement("a");
      link.href = url;
      link.download = "PRC-Catalogue.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch {
      setDownloadError("Download failed. Please check your connection and try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}${menuOpen ? " is-menu-open" : ""}`}>
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

        <div className="header-catalogue-wrap">
          <button className="header-catalogue" type="button" onClick={downloadCatalogue} disabled={downloading} aria-describedby={downloadError ? "catalogue-download-status" : undefined}>
            {downloading ? "Downloading…" : "Download Catalog"}
          </button>
          <div id="catalogue-download-status" className="header-catalogue-status" role="status">
            {downloadError}
          </div>
        </div>
      </div>
    </header>
  );
}
