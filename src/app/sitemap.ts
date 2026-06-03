import type { MetadataRoute } from "next";
import { contentPages, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about-us/", "/contact/", "/service/", "/our-work/", "/reviews/", "/blog/"];
  const dynamicRoutes = contentPages.map((page) => `/${page.slug}/`);

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date(),
  }));
}
