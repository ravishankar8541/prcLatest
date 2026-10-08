import Image from "next/image";
import type { Metadata } from "next";
import PageBanner from "../home/PageBanner";
import SiteFooter from "../home/footer";
import SiteHeader from "../site-header";
import { productCatalog } from "../catalog";

export const metadata: Metadata = {
  title: "Why PRC | Sanitaryware for Homes, Trade & Projects",
  description:
    "Explore the PRC difference: a considered sanitaryware range, wholesale and retail options, and product guidance for homeowners, contractors, and retailers.",
};

const strengths = [
  {
    number: "01",
    title: "A range made for everyday spaces",
    text: "Explore stainless steel kitchen sinks, brass and telephonic showers, C.P. taps, health faucets, waste couplings, and more.",
  },
  {
    number: "02",
    title: "Materials chosen for lasting use",
    text: "PRC describes its products as made with quality materials, with durability and longevity in mind.",
  },
  {
    number: "03",
    title: "Options for the way you buy",
    text: "Competitive retail and wholesale options give homeowners and trade buyers more ways to source what they need.",
  },
  {
    number: "04",
    title: "People ready to help you choose",
    text: "Get practical product guidance from a team that works with homeowners, contractors, and retailers.",
  },
];

const customers = [
  { number: "01", title: "Homeowners", text: "Choose individual kitchen and bathroom essentials, with the team available to help you narrow down the right fit." },
  { number: "02", title: "Contractors", text: "Explore practical fittings and plumbing essentials for homes and project requirements." },
  { number: "03", title: "Retailers", text: "Browse a multi-category range from sinks and showers to fittings and accessories." },
  { number: "04", title: "Wholesale buyers", text: "Ask the PRC team about wholesale options for trade and larger order requirements." },
];

const products = [
  { name: "Stainless steel sinks", category: "KITCHEN", image: "/KITCHENSINIK/1.png", alt: "PRC stainless steel kitchen sink" },
  { name: "Brass bath showers", category: "BATHROOM", image: "/C.P.BENDSHOWER/1.png", alt: "PRC chrome bath shower fitting" },
  { name: "Health faucet sets", category: "BATHROOM", image: "/C.P.HEALTHFAUATSET/1.png", alt: "PRC health faucet set" },
  { name: "C.P. taps", category: "FITTINGS", image: "/CpTaps/1.png", alt: "PRC chrome C.P. tap" },
];

export default function WhyPrcPage() {
  return (
    <main className="home-page why-prc-page">
      <SiteHeader />

      <PageBanner pageName="Why PRC" imageAlt="A polished PRC basin fitting in a modern bathroom" />

      <section className="why-prc-hero" aria-labelledby="why-prc-title">
        <div className="why-prc-hero__copy">
          <p className="why-prc-eyebrow"><span /> THE PRC DIFFERENCE</p>
          <h2 id="why-prc-title">Good essentials.<br /><em>Clear guidance.</em></h2>
          <p className="why-prc-hero__lead">
            From stainless steel sinks and brass showers to couplings and health faucets, PRC brings everyday sanitaryware together with practical guidance and retail or wholesale options.
          </p>
          <div className="why-prc-hero__actions">
            <a className="why-prc-button why-prc-button--dark" href="/#products">Explore the range <span aria-hidden="true">↗</span></a>
            <a className="why-prc-text-link" href="/contact">Talk to our team <span aria-hidden="true">↗</span></a>
          </div>
          <div className="why-prc-hero__caption">
            <span>FOR HOMES, TRADE & PROJECTS</span>
            <i aria-hidden="true" />
            <span>PRC · DELHI</span>
          </div>
        </div>

        <div className="why-prc-hero__visual">
          <div className="why-prc-hero__image why-prc-hero__image--primary">
            <Image
              src="/C.P.BENDSHOWER/1.png"
              alt="A chrome PRC shower fitting in a refined bathroom setting"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="why-prc-strengths" aria-labelledby="why-prc-strengths-title">
        <div className="why-prc-section-heading why-prc-section-heading--light">
          <div>
            <p className="why-prc-eyebrow"><span /> A BETTER WAY TO CHOOSE</p>
            <h2 id="why-prc-strengths-title">The things that matter,<br />brought together.</h2>
          </div>
          <p>Useful products, clear guidance, and dependable value for the spaces people use every day.</p>
        </div>
        <div className="why-prc-strength-grid">
          {strengths.map((item) => (
            <article className="why-prc-strength" key={item.number}>
              <span className="why-prc-card-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <span className="why-prc-card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="why-prc-customers" aria-labelledby="why-prc-customers-title">
        <div className="why-prc-section-heading">
          <div>
            <p className="why-prc-eyebrow why-prc-eyebrow--ink"><span /> ONE PARTNER, MANY NEEDS</p>
            <h2 id="why-prc-customers-title">A useful partner at<br />every scale.</h2>
          </div>
          <p>PRC operates as a manufacturer, trader, wholesaler, and retailer—serving homeowners, contractors, retailers, and larger-order buyers through retail and wholesale options.</p>
        </div>
        <div className="why-prc-customer-grid">
          {customers.map((item) => (
            <article className="why-prc-customer" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="why-prc-range" aria-labelledby="why-prc-range-title">
        <div className="why-prc-section-heading">
          <div>
            <p className="why-prc-eyebrow why-prc-eyebrow--ink"><span /> A CONSIDERED RANGE</p>
            <h2 id="why-prc-range-title">From kitchen to bath.</h2>
          </div>
            <a className="why-prc-text-link why-prc-text-link--ink" href="/#products">View all products <span aria-hidden="true">↗</span></a>
        </div>
        <div className="why-prc-product-grid">
          {products.map((item, index) => (
            <a className="why-prc-product" href="/#products" key={item.name}>
              <div className="why-prc-product__image">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 90vw, 25vw" />
                <span aria-hidden="true">↗</span>
              </div>
              <div className="why-prc-product__meta">
                <span>0{index + 1} / {item.category}</span>
                <h3>{item.name}</h3>
              </div>
            </a>
          ))}
        </div>
        <div className="why-prc-range__details">
          <h3>More of the range</h3>
          <p>Explore the full PRC catalogue, from core kitchen and bathroom fixtures to the fittings, valves, and connection essentials that complete an installation. Select a category to view it in the product collection.</p>
          <ul aria-label="All PRC product categories">
            {productCatalog.map((product) => (
              <li key={product.slug}>
                <a href={`/products/${product.slug}`}>
                  <span className="why-prc-range__number">{String(product.number).padStart(2, "0")}</span>
                  <span>{product.name}</span>
                  <span className="why-prc-range__arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="why-prc-cta" aria-labelledby="why-prc-cta-title">
        <div className="why-prc-cta__glow" aria-hidden="true" />
        <div className="why-prc-cta__copy">
          <p className="why-prc-eyebrow"><span /> READY WHEN YOU ARE</p>
          <h2 id="why-prc-cta-title">Let’s find the right fit for your next project.</h2>
          <p>Tell us what you need. The PRC team is ready to help you explore the options.</p>
        </div>
        <div className="why-prc-cta__actions">
          <a className="why-prc-button why-prc-button--gold" href="/contact">Talk to our team <span aria-hidden="true">↗</span></a>
          <a className="why-prc-cta__phone" href="tel:+919643332209">+91 96433 32209</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
