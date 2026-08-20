import type { NextConfig } from "next";

/* Kept in sync with src/lib/site.ts — that module drives the nav links, this
   one keeps those routes unreachable by direct URL. */
const DRAFT_ROUTES = ["/offerings"];

const showDraftPages = process.env.NEXT_PUBLIC_SHOW_DRAFT_PAGES === "true";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    if (showDraftPages) return [];

    return DRAFT_ROUTES.flatMap((route) => [
      { source: route, destination: "/", permanent: false },
      { source: `${route}/:path*`, destination: "/", permanent: false },
    ]);
  },
};

export default nextConfig;
