import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BasinWasteCouplingCard from "../BasinWasteCouplingCard";
import CpBendShowerCard from "../CpBendShowerCard";
import CpFlangeCard from "../CpFlangeCard";
import CpHandShowerCard from "../CpHandShowerCard";
import CpHealthFaucetCard from "../CpHealthFaucetCard";
import CpTapCard from "../CpTapCard";
import ExtensionNippleCard from "../ExtensionNippleCard";
import KitchenSinkCard from "../KitchenSinkCard";
import PageBanner from "../../home/PageBanner";
import SiteHeader from "../../site-header";
import { getProductBySlug, productCatalog } from "../../catalog";
import { basinWasteCouplingProducts } from "../basin-waste-coupling-data";
import { cpBendShowerProducts } from "../cp-bend-shower-data";
import { cpFlangeProducts } from "../cp-flange-data";
import { cpHandShowerProducts } from "../cp-hand-shower-data";
import { cpHealthFaucetProducts } from "../cp-health-faucet-data";
import { cpTapProducts } from "../cp-tap-data";
import { extensionNippleProducts } from "../extension-nipple-data";
import { kitchenSinkProducts } from "../kitchen-sink-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productCatalog.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) return { title: "Product not found | PRC Sanitary Ware" };

  const pageSlug = product.slug.replace(/-manufacturer$/, "");

  return {
    title: `${product.name} | PRC Sanitary Ware`,
    description:
      pageSlug === "kitchen-sink"
        ? "Explore PRC's 27 Royal and Silik kitchen sink models, including sizes, product specifications, and packing details."
        : pageSlug === "extension-nipple"
          ? "Explore PRC's Royal and Silik C.P. extension nipples, from 1 inch to 3 inch, with specifications and packing details."
          : pageSlug === "c-p-tap"
            ? "Explore PRC's Royal C.P. taps in the Style and Sigma collections, including bib cocks, mixers, and angle cocks."
            : pageSlug === "c-p-bend-shower"
              ? "Explore PRC's Royal C.P. bend showers: Duck, Diamond, Arrow, and King King, each with a 7 inch shower arm."
              : pageSlug === "c-p-health-faucet-set"
                ? "Explore PRC's Royal C.P. health faucet sets and guns, including Damaru, Boxer, Pencil, and Mini-Viza."
                : pageSlug === "c-p-hand-shower-set"
                  ? "Explore PRC's Royal C.P. hand shower sets, Duck and Round, with a 1.5 meter hose and wall hook."
                  : pageSlug === "basin-waste-coupling"
                    ? "Explore PRC's Royal and Silik basin waste couplings, including brass, brass nut, FT/HT, and 6 inch models."
                    : pageSlug === "c-p-flange"
                      ? "Explore PRC's Royal and Silik C.P. flanges: Jaquar, Big Queen, Flat, and Flat Pillar Cock caps."
                      : `PRC ${product.name} product page.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const pageSlug = product.slug.replace(/-manufacturer$/, "");

  if (pageSlug === "kitchen-sink") {
    return <KitchenSinkPage />;
  }

  if (pageSlug === "extension-nipple") {
    return <ExtensionNipplePage />;
  }

  if (pageSlug === "c-p-tap") {
    return <CpTapPage />;
  }

  if (pageSlug === "c-p-bend-shower") {
    return <CpBendShowerPage />;
  }

  if (pageSlug === "c-p-health-faucet-set") {
    return <CpHealthFaucetPage />;
  }

  if (pageSlug === "c-p-hand-shower-set") {
    return <CpHandShowerPage />;
  }

  if (pageSlug === "basin-waste-coupling") {
    return <BasinWasteCouplingPage />;
  }

  if (pageSlug === "c-p-flange") {
    return <CpFlangePage />;
  }

  return (
    <main className="home-page">
      <SiteHeader />
      <PageBanner pageName={product.name} imageAlt="PRC sanitaryware and plumbing essentials" />
    </main>
  );
}

function KitchenSinkPage() {
  const whatsappUrl = `https://wa.me/919643332209?text=${encodeURIComponent(
    "Hello PRC, I am interested in the Kitchen Sink. Please share the available sizes, pricing, and product details.",
  )}`;
  const ranges = [
    {
      key: "ROYAL" as const,
      title: "Royal Collection",
    },
    {
      key: "SILIK" as const,
      title: "Silik Collection",
    },
  ];

  return (
    <main className="home-page sink-page">
      <SiteHeader />

      <PageBanner
        pageName="Kitchen Sink"
        imageAlt="PRC stainless steel kitchen sink and bath fittings"
      />

      <section className="sink-products" id="sink-collection" aria-label="Kitchen sink collections">
        <h1 className="sink-products__heading">Kitchen Sink Manufacturer in Delhi NCR</h1>
        <p className="sink-products__description">
          Find the right sink for your kitchen with PRC’s Royal and Silik collections.
          Explore stainless steel designs in a range of sizes and finishes, from compact
          everyday sinks to spacious options for larger kitchens. Browse the collection
          below and select a product to view its specifications.
        </p>
        <h2 className="sink-products__section-title">Our Products</h2>
        {ranges.map((range) => {
          const products = kitchenSinkProducts.filter((item) => item.range === range.key);

          return (
            <section className="sink-range" id={`${range.key.toLowerCase()}-collection`} key={range.key} aria-labelledby={`${range.key.toLowerCase()}-title`}>
              <div className="sink-range__heading">
                <div className="sink-range__title">
                  <h3 id={`${range.key.toLowerCase()}-title`}>{range.title}</h3>
                </div>
              </div>

              <div className="sink-product-grid">
                {products.map((product) => <KitchenSinkCard key={product.id} product={product} />)}
              </div>
            </section>
          );
        })}

        <div className="sink-products__contact">
          <div>
            <p>Still deciding?</p>
            <h3>Our team can help you choose the right size.</h3>
          </div>
          <a className="sink-button sink-button--dark" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Talk to PRC <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function ExtensionNipplePage() {
  const whatsappUrl = `https://wa.me/919643332209?text=${encodeURIComponent(
    "Hello PRC, I am interested in the C.P. Extension Nipple. Please share the available sizes, pricing, and product details.",
  )}`;
  const ranges = [
    {
      key: "ROYAL" as const,
      title: "Royal Collection",
    },
    {
      key: "SILIK" as const,
      title: "Silik Collection",
    },
  ];

  return (
    <main className="home-page sink-page">
      <SiteHeader />

      <PageBanner
        pageName="Extension Nipple"
        imageAlt="PRC chrome plated extension nipple and bath fittings"
      />

      <section className="sink-products" id="nipple-collection" aria-label="Extension nipple collections">
        <h1 className="sink-products__heading">Extension Nipple Manufacturer in Delhi NCR</h1>
        <p className="sink-products__description">
          Choose a chrome-plated extension nipple from PRC’s Royal and Silik collections.
          Sizes run from 1 inch to 3 inch, with a stainless steel hex nipple, a washing
          machine nipple, and a C.P. nozzle in the Silik range. Select a product to view
          its specifications.
        </p>
        <h2 className="sink-products__section-title">Our Products</h2>
        {ranges.map((range) => {
          const products = extensionNippleProducts.filter((item) => item.range === range.key);

          return (
            <section className="sink-range" id={`${range.key.toLowerCase()}-nipples`} key={range.key} aria-labelledby={`${range.key.toLowerCase()}-nipple-title`}>
              <div className="sink-range__heading">
                <div className="sink-range__title">
                  <h3 id={`${range.key.toLowerCase()}-nipple-title`}>{range.title}</h3>
                </div>
              </div>

              <div className="sink-product-grid">
                {products.map((product) => <ExtensionNippleCard key={product.id} product={product} />)}
              </div>
            </section>
          );
        })}

        <div className="sink-products__contact">
          <div>
            <p>Still deciding?</p>
            <h3>Our team can help you choose the right size.</h3>
          </div>
          <a className="sink-button sink-button--dark" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Talk to PRC <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function CpTapPage() {
  const whatsappUrl = `https://wa.me/919643332209?text=${encodeURIComponent(
    "Hello PRC, I am interested in the C.P. Tap. Please share the available models, pricing, and product details.",
  )}`;
  const ranges = [
    {
      key: "STYLE" as const,
      title: "Style Collection",
    },
    {
      key: "SIGMA" as const,
      title: "Sigma Collection",
    },
  ];

  return (
    <main className="home-page sink-page">
      <SiteHeader />

      <PageBanner
        pageName="C.P. Tap"
        imageAlt="PRC chrome plated C.P. tap and bath fittings"
      />

      <section className="sink-products" id="tap-collection" aria-label="C.P. tap collections">
        <h1 className="sink-products__heading">C.P. Tap Manufacturer in Delhi NCR</h1>
        <p className="sink-products__description">
          Browse PRC’s Royal chrome-plated taps in the Style and Sigma collections.
          The range includes bib cocks, long nose and pillar cocks, angle cocks,
          concealed stops, sink and basin mixers, and wall mixers. Select a product
          to view its specifications.
        </p>
        <h2 className="sink-products__section-title">Our Products</h2>
        {ranges.map((range) => {
          const products = cpTapProducts.filter((item) => item.collection === range.key);

          return (
            <section className="sink-range" id={`${range.key.toLowerCase()}-taps`} key={range.key} aria-labelledby={`${range.key.toLowerCase()}-tap-title`}>
              <div className="sink-range__heading">
                <div className="sink-range__title">
                  <h3 id={`${range.key.toLowerCase()}-tap-title`}>{range.title}</h3>
                </div>
              </div>

              <div className="sink-product-grid">
                {products.map((product) => <CpTapCard key={product.id} product={product} />)}
              </div>
            </section>
          );
        })}

        <div className="sink-products__contact">
          <div>
            <p>Still deciding?</p>
            <h3>Our team can help you choose the right tap.</h3>
          </div>
          <a className="sink-button sink-button--dark" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Talk to PRC <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function CpBendShowerPage() {
  const whatsappUrl = `https://wa.me/919643332209?text=${encodeURIComponent(
    "Hello PRC, I am interested in the C.P. Bend Shower. Please share the available models, pricing, and product details.",
  )}`;
  const ranges = [
    {
      key: "ROYAL" as const,
      title: "Royal Collection",
    },
  ];

  return (
    <main className="home-page sink-page">
      <SiteHeader />

      <PageBanner
        pageName="C.P. Bend Shower"
        imageAlt="PRC chrome plated bend shower and bath fittings"
      />

      <section className="sink-products" id="shower-collection" aria-label="C.P. bend shower collection">
        <h1 className="sink-products__heading">C.P. Bend Shower Manufacturer in Delhi NCR</h1>
        <p className="sink-products__description">
          Choose a chrome-plated bend shower from PRC’s Royal collection. Duck, Diamond,
          Arrow, and King King models are wall mounted and supplied with a 7 inch shower
          arm. Select a product to view its specifications.
        </p>
        <h2 className="sink-products__section-title">Our Products</h2>
        {ranges.map((range) => {
          const products = cpBendShowerProducts.filter((item) => item.range === range.key);

          return (
            <section className="sink-range" id={`${range.key.toLowerCase()}-showers`} key={range.key} aria-labelledby={`${range.key.toLowerCase()}-shower-title`}>
              <div className="sink-range__heading">
                <div className="sink-range__title">
                  <h3 id={`${range.key.toLowerCase()}-shower-title`}>{range.title}</h3>
                </div>
              </div>

              <div className="sink-product-grid">
                {products.map((product) => <CpBendShowerCard key={product.id} product={product} />)}
              </div>
            </section>
          );
        })}

        <div className="sink-products__contact">
          <div>
            <p>Still deciding?</p>
            <h3>Our team can help you choose the right shower.</h3>
          </div>
          <a className="sink-button sink-button--dark" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Talk to PRC <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function CpHealthFaucetPage() {
  const whatsappUrl = `https://wa.me/919643332209?text=${encodeURIComponent(
    "Hello PRC, I am interested in the C.P. Health Faucet Set. Please share the available models, pricing, and product details.",
  )}`;
  const ranges = [
    {
      key: "SET" as const,
      title: "Health Faucet Set",
    },
    {
      key: "GUN" as const,
      title: "Health Faucet Gun",
    },
  ];

  return (
    <main className="home-page sink-page">
      <SiteHeader />

      <PageBanner
        pageName="C.P. Health Faucet Set"
        imageAlt="PRC chrome plated health faucet and bath fittings"
      />

      <section className="sink-products" id="faucet-collection" aria-label="C.P. health faucet collection">
        <h1 className="sink-products__heading">C.P. Health Faucet Manufacturer in Delhi NCR</h1>
        <p className="sink-products__description">
          Choose a chrome-plated health faucet from PRC’s Royal collection. The sets
          include a 1.5 meter stainless steel hose, and the guns are available in
          Damaru, Boxer, Pencil, and Mini-Viza. Select a product to view its specifications.
        </p>
        <h2 className="sink-products__section-title">Our Products</h2>
        {ranges.map((range) => {
          const products = cpHealthFaucetProducts.filter((item) => item.group === range.key);

          return (
            <section className="sink-range" id={`${range.key.toLowerCase()}-faucets`} key={range.key} aria-labelledby={`${range.key.toLowerCase()}-faucet-title`}>
              <div className="sink-range__heading">
                <div className="sink-range__title">
                  <h3 id={`${range.key.toLowerCase()}-faucet-title`}>{range.title}</h3>
                </div>
              </div>

              <div className="sink-product-grid">
                {products.map((product) => <CpHealthFaucetCard key={product.id} product={product} />)}
              </div>
            </section>
          );
        })}

        <div className="sink-products__contact">
          <div>
            <p>Still deciding?</p>
            <h3>Our team can help you choose the right health faucet.</h3>
          </div>
          <a className="sink-button sink-button--dark" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Talk to PRC <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function CpHandShowerPage() {
  const whatsappUrl = `https://wa.me/919643332209?text=${encodeURIComponent(
    "Hello PRC, I am interested in the C.P. Hand Shower Set. Please share the available models, pricing, and product details.",
  )}`;
  const ranges = [
    {
      key: "ROYAL" as const,
      title: "Royal Collection",
    },
  ];

  return (
    <main className="home-page sink-page">
      <SiteHeader />

      <PageBanner
        pageName="C.P. Hand Shower Set"
        imageAlt="PRC chrome plated hand shower set and bath fittings"
      />

      <section className="sink-products" id="hand-shower-collection" aria-label="C.P. hand shower collection">
        <h1 className="sink-products__heading">C.P. Hand Shower Set Manufacturer in Delhi NCR</h1>
        <p className="sink-products__description">
          Choose a chrome-plated hand shower set from PRC’s Royal collection. The Duck
          and Round sets each include a brass hand shower with five spray settings, a
          1.5 meter flexible stainless steel hose, and a wall mount hook. Select a
          product to view its specifications.
        </p>
        <h2 className="sink-products__section-title">Our Products</h2>
        {ranges.map((range) => {
          const products = cpHandShowerProducts.filter((item) => item.range === range.key);

          return (
            <section className="sink-range" id={`${range.key.toLowerCase()}-hand-showers`} key={range.key} aria-labelledby={`${range.key.toLowerCase()}-hand-shower-title`}>
              <div className="sink-range__heading">
                <div className="sink-range__title">
                  <h3 id={`${range.key.toLowerCase()}-hand-shower-title`}>{range.title}</h3>
                </div>
              </div>

              <div className="sink-product-grid">
                {products.map((product) => <CpHandShowerCard key={product.id} product={product} />)}
              </div>
            </section>
          );
        })}

        <div className="sink-products__contact">
          <div>
            <p>Still deciding?</p>
            <h3>Our team can help you choose the right hand shower.</h3>
          </div>
          <a className="sink-button sink-button--dark" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Talk to PRC <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function BasinWasteCouplingPage() {
  const whatsappUrl = `https://wa.me/919643332209?text=${encodeURIComponent(
    "Hello PRC, I am interested in the Basin Waste Coupling. Please share the available models, pricing, and product details.",
  )}`;
  const ranges = [
    {
      key: "ROYAL" as const,
      title: "Royal Collection",
    },
    {
      key: "SILIK" as const,
      title: "Silik Collection",
    },
  ];

  return (
    <main className="home-page sink-page">
      <SiteHeader />

      <PageBanner
        pageName="Basin Waste Coupling"
        imageAlt="PRC chrome plated basin waste coupling and bath fittings"
      />

      <section className="sink-products" id="basin-waste-collection" aria-label="Basin waste coupling collection">
        <h1 className="sink-products__heading">Basin Waste Coupling Manufacturer in Delhi NCR</h1>
        <p className="sink-products__description">
          Choose a chrome-plated basin waste coupling from PRC’s Royal and Silik
          collections. Royal includes the brass coupling and the brass-nut coupling.
          Silik includes the FT/HT brass nut and the 6 inch brass nut. Select a
          product to view its specifications.
        </p>
        <h2 className="sink-products__section-title">Our Products</h2>
        {ranges.map((range) => {
          const products = basinWasteCouplingProducts.filter((item) => item.range === range.key);

          return (
            <section className="sink-range" id={`${range.key.toLowerCase()}-basin-waste`} key={range.key} aria-labelledby={`${range.key.toLowerCase()}-basin-waste-title`}>
              <div className="sink-range__heading">
                <div className="sink-range__title">
                  <h3 id={`${range.key.toLowerCase()}-basin-waste-title`}>{range.title}</h3>
                </div>
              </div>

              <div className="sink-product-grid">
                {products.map((product) => <BasinWasteCouplingCard key={product.id} product={product} />)}
              </div>
            </section>
          );
        })}

        <div className="sink-products__contact">
          <div>
            <p>Still deciding?</p>
            <h3>Our team can help you choose the right basin waste coupling.</h3>
          </div>
          <a className="sink-button sink-button--dark" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Talk to PRC <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function CpFlangePage() {
  const whatsappUrl = `https://wa.me/919643332209?text=${encodeURIComponent(
    "Hello PRC, I am interested in the C.P. Flange. Please share the available models, pricing, and product details.",
  )}`;
  const ranges = [
    {
      key: "ROYAL" as const,
      title: "Royal Collection",
    },
    {
      key: "SILIK" as const,
      title: "Silik Collection",
    },
  ];

  return (
    <main className="home-page sink-page">
      <SiteHeader />

      <PageBanner
        pageName="C.P. Flange"
        imageAlt="PRC chrome plated flange and bath fittings"
      />

      <section className="sink-products" id="flange-collection" aria-label="C.P. flange collection">
        <h1 className="sink-products__heading">C.P. Flange Manufacturer in Delhi NCR</h1>
        <p className="sink-products__description">
          Choose a chrome-plated flange from PRC’s Royal and Silik collections. Royal
          has the round Jaquar cap. Silik has the Big Queen seal cap, the flat cap, and
          the flat pillar cock cap. Select a product to view its specifications.
        </p>
        <h2 className="sink-products__section-title">Our Products</h2>
        {ranges.map((range) => {
          const products = cpFlangeProducts.filter((item) => item.range === range.key);

          return (
            <section className="sink-range" id={`${range.key.toLowerCase()}-flanges`} key={range.key} aria-labelledby={`${range.key.toLowerCase()}-flange-title`}>
              <div className="sink-range__heading">
                <div className="sink-range__title">
                  <h3 id={`${range.key.toLowerCase()}-flange-title`}>{range.title}</h3>
                </div>
              </div>

              <div className="sink-product-grid">
                {products.map((product) => <CpFlangeCard key={product.id} product={product} />)}
              </div>
            </section>
          );
        })}

        <div className="sink-products__contact">
          <div>
            <p>Still deciding?</p>
            <h3>Our team can help you choose the right flange.</h3>
          </div>
          <a className="sink-button sink-button--dark" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Talk to PRC <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
