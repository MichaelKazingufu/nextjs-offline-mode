import type { NextConfig } from "next";
import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,

  // IMPORTANT FIX
  disable: process.env.NODE_ENV !== "production",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // silence l'erreur Turbopack
  turbopack: {},
};

export default withPWA(nextConfig);
