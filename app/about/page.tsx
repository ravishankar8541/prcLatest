import Image from "next/image";
import type { Metadata } from "next";
import PageBanner from "../home/PageBanner";
import SiteFooter from "../home/footer";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "About PRC Sanitary Ware | Our Story & Product Range",
  description:
    "Meet PRC Sanitary Ware: a manufacturer, trader, wholesaler, and retailer of kitchen sinks, showers, health faucets, and other sanitaryware essentials.",
};

const waysToWork = [
  { number: "01", title: "Manufacturer", detail: "A considered range of sanitaryware and bath fitting essentials." },
  { number: "02", title: "Trader", detail: "A broad selection for homes, retail, and project requirements." },
  { number: "03", title: "Wholesaler", detail: "Wholesale options for trade and larger order requirements." },
  { number: "04", title: "Retailer", detail: "Retail options for homeowners and individual requirements." },
];

const values = [
  {
    number: "01",
    label: "PRODUCT RANGE",
    title: "A considered range",
    text: "Explore everyday essentials across kitchen sinks, showers, health faucets, couplings, and more.",
  },
  {
    number: "02",
    label: "QUALITY",
    title: "Made for lasting use",
    text: "PRC focuses on quality materials and dependable products designed for durability and longevity.",
  },
  {
    number: "03",
    label: "PERSONAL SUPPORT",
    title: "Guidance that helps",
    text: "Our team is here to help you find the right fit, whether you are planning a home or sourcing for a project.",
  },
  {
    number: "04",
    label: "FLEXIBLE BUYING",
    title: "Value at every scale",
    text: "Wholesale and retail options make it easier to choose what works for your needs and order size.",
  },
];

const collections = [
  { name: "C.P. taps", image: "/CpTaps/1.png", imageAlt: "PRC C.P. basin tap" },
  { name: "Bath showers", image: "/C.P.BENDSHOWER/1.png", imageAlt: "PRC bath shower fitting" },
  { name: "Health faucets", image: "/C.P.HEALTHFAUATSET/1.png", imageAlt: "PRC health faucet set" },
];

export default function AboutPage() {
  return (
    <main className="home-page about-page">
      <SiteHeader />

      <PageBanner pageName="About Us" imageAlt="A polished PRC basin fitting in a modern bathroom" />

      <section className="about-story" aria-labelledby="about-story-title">
        <div className="about-story__topline"><span>01 / OUR STORY</span><span>PRC SANITARY WARE · DELHI</span></div>
        <div className="about-story__grid">
          <div className="about-story__heading">
            <p className="about-eyebrow about-eyebrow--ink"><span /> ABOUT PRC</p>
            <h2 id="about-story-title">The right essentials. All in one place.</h2>
          </div>
          <div className="about-story__body">
            <p className="about-story__lead">
              PRC Sanitary Ware brings together the products and personal support to help make choosing easier.
            </p>
            <p>
              From stainless steel kitchen sinks and brass showers to telephonic showers, sink waste couplings, and brass health faucets, our range serves the everyday needs of homes and projects.
            </p>
            <p>
              As a manufacturer, trader, wholesaler, and retailer, we work with homeowners, contractors, and retailers—backed by a team ready to help you find what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="about-roles" aria-label="How PRC serves customers">
        <div className="about-roles__intro">
          <p className="about-eyebrow"><span /> ONE PARTNER, MANY NEEDS</p>
          <h2>Here for every kind of project.</h2>
        </div>
        <div className="about-roles__grid">
          {waysToWork.map((item) => (
            <article className="about-role" key={item.number}>
              <span className="about-role__number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-values" aria-labelledby="about-values-title">
        <div className="about-values__heading">
          <div>
            <p className="about-eyebrow about-eyebrow--ink"><span /> THE PRC APPROACH</p>
            <h2 id="about-values-title">Good choices, made simpler.</h2>
          </div>
          <p>Useful products, clear guidance, and options for the way you shop.</p>
        </div>
        <div className="about-values__grid">
          {values.map((item) => (
            <article className="about-value" key={item.number}>
              <div className="about-value__meta">
                <span>{item.number}</span>
                <span>{item.label}</span>
              </div>
              <div className="about-value__content">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="about-value__emblem" aria-hidden="true"><span>PRC</span></div>
              </div>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="about-collection" aria-labelledby="about-collection-title">
        <div className="about-collection__heading">
          <div>
            <p className="about-eyebrow"><span /> A FEW PLACES TO BEGIN</p>
            <h2 id="about-collection-title">Made for the moments in between.</h2>
          </div>
          <p>Explore a selection from the PRC range of kitchen and bathroom essentials.</p>
        </div>
        <div className="about-collection__grid">
          {collections.map((item, index) => (
            <a className="about-product" href="/#products" key={item.name}>
              <div className="about-product__image">
                <Image src={item.image} alt={item.imageAlt} width={640} height={640} sizes="(max-width: 700px) 88vw, 32vw" />
                <span aria-hidden="true">↗</span>
              </div>
              <div className="about-product__caption"><span>0{index + 1} / PRC COLLECTION</span><h3>{item.name}</h3></div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-cta" aria-labelledby="about-cta-title">
        <div className="about-cta__glow" aria-hidden="true" />
        <p className="about-eyebrow"><span /> LET’S MAKE A START</p>
        <h2 id="about-cta-title">Finding the right fit starts with a conversation.</h2>
        <p>Tell us what you are looking for. The PRC team is ready to help.</p>
        <a className="about-button about-button--gold" href="/contact">Get in touch <span aria-hidden="true">↗</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
