import HeroVideo from "./hero-video";
import SiteHeader from "./site-header";
import PremiumCursor from "./premium-cursor";
import ManufacturingHighlights from "./home/PremiumHighlights";
import ProductShowcase from "./home/ProductShowcase";
import ProductCategories from "./home/ProductCategories";
import PRCExperienceSection from "./home/PRCExperienceSection";
import PreFooterShowcase from "./home/PreFooterShowcase";
import BathCollection from "./home/BathCollection";
import SiteFooter from "./home/footer";
import Testimonials from "./home/testimonials";

export default function Home() {
  return (
    <main className="home-page" id="home">
      <PremiumCursor />
      <SiteHeader />
      <section data-native-cursor className="hero" aria-label="PRC Sanitary Ware">
        <HeroVideo />
        <div className="hero-shade" aria-hidden="true" />
      </section>

      <aside className="quick-actions" aria-label="PRC quick contact and product links">
        <a className="quick-action quick-action--products" href="#products" aria-label="Browse PRC products">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2L12 3Z" /><path d="m4.4 7.4 7.6 4 7.6-4M12 11.4V21" /></svg>
        </a>
        <a
          className="quick-action quick-action--whatsapp"
          href="https://wa.me/919643332209"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with PRC Sanitary Ware on WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 11.5C20 16.2 16.4 20 12 20c-1.5 0-2.9-.4-4.1-1.1L4 20l1.1-3.8C4.4 15 4 13.6 4 12c0-4.7 3.6-8.5 8-8.5s8 3.8 8 8Z" />
            <path d="M8.2 8.3c.2-.4.5-.5.8-.5h.8c.2 0 .4.2.5.5l.7 1.7c.1.2.1.4-.1.6l-.6.7c.6 1.2 1.6 2.2 2.8 2.8l.7-.6c.2-.2.4-.2.6-.1l1.7.7c.3.1.5.3.5.6v.7c0 .3-.2.6-.5.8-.5.3-1.1.4-1.7.2-3.2-.7-5.7-3.2-6.4-6.4-.2-.6-.1-1.2.2-1.7Z" />
          </svg>
        </a>
        <a className="quick-action quick-action--email" href="mailto:prcsanitaryware@gmail.com" aria-label="Email PRC Sanitary Ware">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="14" rx="2" /><path d="m4.5 7 7.5 6 7.5-6" /></svg>
        </a>
        <a className="quick-action quick-action--phone" href="tel:+919643332209" aria-label="Call PRC Sanitary Ware">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.8 9 3.2a1.2 1.2 0 0 1 1.4.7l1.1 2.7a1.2 1.2 0 0 1-.3 1.4l-1.4 1.2a13.7 13.7 0 0 0 5 5l1.2-1.4a1.2 1.2 0 0 1 1.4-.3l2.7 1.1a1.2 1.2 0 0 1 .7 1.4l-.6 2.4a1.8 1.8 0 0 1-1.7 1.4A15.5 15.5 0 0 1 4.8 5.5a1.8 1.8 0 0 1 1.8-1.7Z" /></svg>
        </a>
      </aside>
      
      <ManufacturingHighlights />
      <ProductShowcase />
      <ProductCategories />
      <PRCExperienceSection />
      <PreFooterShowcase />
      <BathCollection />
      <Testimonials />
      <SiteFooter />

    

      

    

      
    </main>
  );
}
