import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_API_URL?.replace("http://", "")?.split(":")[0] || "localhost",
        port: process.env.NEXT_PUBLIC_API_URL?.split(":")[2] || "4000",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
