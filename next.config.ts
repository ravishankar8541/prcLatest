import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  outputFileTracingIncludes: {
    "/api/catalogue": ["./public/catalogue/*.pdf"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/omxudibgf/**",
      },
    ],
  },
};

export default nextConfig;
