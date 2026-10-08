import type { Metadata } from "next";
import PageBanner from "../home/PageBanner";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Products | PRC Sanitary Ware",
  description: "Explore the PRC sanitaryware and plumbing product collection.",
};

export default function ProductsPage() {
  return (
    <main className="home-page">
      <SiteHeader />
      <PageBanner pageName="Products" imageAlt="PRC sanitaryware and plumbing product collection" />
    </main>
  );
}
