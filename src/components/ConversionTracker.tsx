"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fires a GA4 page_category event so conversion goals can be set
 * per section in the GA4 dashboard without requiring goal config per URL.
 */
const PAGE_CATEGORIES: Record<string, string> = {
  "/food-distribution-construction": "food_distribution",
  "/services/restaurant-bar-construction": "restaurant_service",
  "/services/retail-tenant-improvement": "retail_service",
  "/services/office-tenant-improvement": "office_service",
  "/services/custom-homes": "residential_service",
  "/services/luxury-modernization": "residential_service",
  "/services/fire-rebuild": "fire_rebuild_service",
  "/free-consultation": "consultation_request",
  "/contact": "contact",
  "/projects": "portfolio",
};

function getCategoryForPath(path: string): string | null {
  // Exact match first
  if (PAGE_CATEGORIES[path]) return PAGE_CATEGORIES[path];
  // Prefix match for food distribution sub-pages
  if (path.startsWith("/food-distribution-construction/")) return "food_distribution";
  // Prefix match for service pages
  if (path.startsWith("/services/")) return "service_page";
  // Blog
  if (path.startsWith("/blog/")) return "blog_post";
  // Projects
  if (path.startsWith("/projects/")) return "project_detail";
  return null;
}

export default function ConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const category = getCategoryForPath(pathname);
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (!category || typeof gtag !== "function") return;
    gtag("event", "page_category_view", {
      page_category: category,
      page_path: pathname,
    });
    if (["consultation_request", "food_distribution", "restaurant_service"].includes(category)) {
      gtag("event", "high_intent_page_view", {
        page_category: category,
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
