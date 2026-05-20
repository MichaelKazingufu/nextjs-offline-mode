import type { NextConfig } from "next";
import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // silence l'erreur Turbopack
  turbopack: {},
};

export default withPWA(nextConfig);
