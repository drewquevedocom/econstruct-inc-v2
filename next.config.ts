import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/Econstruct%20Homepage.html" },
        { source: "/about-us/", destination: "/About.html" },
        { source: "/blog/", destination: "/Blog.html" },
        { source: "/contact/", destination: "/Contact.html" },
        { source: "/our-work/", destination: "/Project.html" },
        { source: "/reviews/", destination: "/Reviews.html" },
        { source: "/service/", destination: "/Services.html" },
      ],
    };
  },
  async redirects() {
    return [
      { source: "/about", destination: "/About.html", permanent: true },
      { source: "/projects", destination: "/Project.html", permanent: true },
      { source: "/services", destination: "/Services.html", permanent: true },
    ];
  },
};

export default nextConfig;
