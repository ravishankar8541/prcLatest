import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import PageBanner from "../home/PageBanner";
import SiteFooter from "../home/footer";
import SiteHeader from "../site-header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Catalogue | PRC Sanitary Ware",
  description: "View the PRC Sanitary Ware product catalogue and explore our bath fittings and plumbing collection.",
};

const catalogueUrl = "/catalogue/prc-catalogue.pdf";

export default function CataloguePage() {
  const hasCatalogue = existsSync(
    path.join(process.cwd(), "public", "catalogue", "prc-catalogue.pdf"),
  );

  return (
    <main className="home-page">
      <SiteHeader />
      <PageBanner pageName="Catalogue" imageAlt="PRC bath fittings and sanitaryware collection" />
      <section className={styles.section} aria-labelledby="catalogue-title">
        <div className={styles.inner}>
          <header className={styles.heading}>
            <div>
              <p className={styles.eyebrow}>PRC SANITARY WARE</p>
              <h2 id="catalogue-title">Our Product Catalogue</h2>
              <p className={styles.description}>
                Discover our range of bath fittings and plumbing essentials.
              </p>
            </div>
            {hasCatalogue && (
              <div className={styles.actions}>
                <a className={styles.secondary} href={catalogueUrl} target="_blank" rel="noopener noreferrer">
                  Open PDF <span aria-hidden="true">↗</span>
                </a>
                <a className={styles.primary} href="/api/catalogue">
                  Download Catalogue <span aria-hidden="true">↓</span>
                </a>
              </div>
            )}
          </header>

          {hasCatalogue ? (
            <div className={styles.viewer}>
              <div className={styles.viewerBar}>
                <span>PRC Product Catalogue</span>
                <span>PDF</span>
              </div>
              <object className={styles.document} data={catalogueUrl} type="application/pdf" aria-label="PRC product catalogue PDF">
                <div className={styles.fallback}>
                  <p>Open the catalogue to view it in your browser or PDF reader.</p>
                  <a className={styles.primary} href={catalogueUrl} target="_blank" rel="noopener noreferrer">Open Catalogue ↗</a>
                </div>
              </object>
              <p className={styles.hint}>Having trouble viewing the catalogue? Use “Open PDF” or download a copy above.</p>
            </div>
          ) : (
            <div className={styles.empty}>
              <span className={styles.monogram} aria-hidden="true">PRC</span>
              <h3>Request our catalogue</h3>
              <p>Contact the PRC team for a copy of our product catalogue, or explore our products online.</p>
              <div className={styles.actions}>
                <a className={styles.primary} href="mailto:prcsanitaryware@gmail.com?subject=PRC%20Catalogue%20Request">Email PRC Team <span aria-hidden="true">↗</span></a>
                <Link className={styles.secondary} href="/#products">Explore Products <span aria-hidden="true">→</span></Link>
              </div>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
