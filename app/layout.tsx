import type { Metadata } from "next";
import BrandLoader from "./brand-loader";
import PremiumCursor from "./premium-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRC Sanitary Ware | Bath Fittings & Bathroom Products",
  description:
    "Discover PRC Sanitary Ware products, including kitchen sinks, C.P. taps, showers, health faucets, and PVC sanitary ware.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <BrandLoader />
        <PremiumCursor />
        {children}
      </body>
    </html>
  );
}
