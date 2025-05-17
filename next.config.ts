import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "api.hakush.in",
      },
    ],
  },
};

export default nextConfig;
