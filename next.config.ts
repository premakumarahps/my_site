import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://physics-academy.vercel.app/",
        permanent: false,
      },
      {
        source: "/physics",
        destination: "https://physics-academy.vercel.app/",
        permanent: false,
      },
      {
        source: "/physics/:path*",
        destination: "https://physics-academy.vercel.app/",
        permanent: false,
      },
      {
        source: "/student/:path*",
        destination: "https://physics-academy.vercel.app/",
        permanent: false,
      },
      {
        source: "/admin/:path*",
        destination: "https://physics-academy.vercel.app/",
        permanent: false,
      },
      {
        source: "/onboarding",
        destination: "https://physics-academy.vercel.app/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
