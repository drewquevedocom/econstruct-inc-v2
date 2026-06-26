import { getAllBlogPosts } from "@/lib/blog";
import { getLegacyBlogPostCanonicalUrl } from "@/lib/blog/paths";

export function GET() {
  const posts = getAllBlogPosts();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>econstruct Blog</title>
    <link>https://econstructinc.com/blog</link>
    <description>Insights from the LA Rebuild Frontline</description>
    <language>en-us</language>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${getLegacyBlogPostCanonicalUrl(post.slug)}</link>
      <guid>${getLegacyBlogPostCanonicalUrl(post.slug)}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <author>info@econstructinc.com (${post.author.name})</author>
      <description><![CDATA[${post.description}]]></description>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}

