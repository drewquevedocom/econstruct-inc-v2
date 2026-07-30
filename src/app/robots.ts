import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicit allow group helps override Cloudflare-managed AI crawler blocks
      // when the edge prepends its own robots content.
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: ["/dashboard/", "/api/", "/85c_distribution_*", "/ctg/*"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/api/", "/85c_distribution_*", "/ctg/*"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

