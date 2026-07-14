import { SITE_URL } from "@/lib/constants";

export function getLegacyBlogPostPath(slug: string) {
  return `/blog/${slug}`;
}

export function getLegacyBlogPostCanonicalUrl(slug: string) {
  return `${SITE_URL}/blog/${slug}`;
}
