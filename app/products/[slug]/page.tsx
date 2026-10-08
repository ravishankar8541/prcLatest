import { notFound } from "next/navigation";
import type { Metadata } from "next";
import KitchenSinkCard from "../KitchenSinkCard";
import PageBanner from "../../home/PageBanner";
import SiteHeader from "../../site-header";
import { getProductBySlug, productCatalog } from "../../catalog";
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

  return {
    title: `${product.name} | PRC Sanitary Ware`,
    description:
      product.slug === "kitchen-sink"
        ? "Explore PRC's 27 Royal and Silik kitchen sink models, including sizes, product specifications, and packing details."
        : `PRC ${product.name} product page.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  if (product.slug === "kitchen-sink") {
    return <KitchenSinkPage />;
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
