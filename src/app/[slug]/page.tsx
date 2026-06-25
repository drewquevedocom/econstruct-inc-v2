import { notFound } from "next/navigation";
import { DetailPage } from "@/components/marketing";
import BlogPostContent from "@/components/blog/BlogPostContent";
import { JsonLd } from "@/components/json-ld";
import { contentPages, getPageBySlug, site } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getLegacyBlogPostCanonicalUrl } from "@/lib/blog/paths";

export function generateStaticParams() {
  const contentSlugs = contentPages.map((page) => page.slug);
  const blogSlugs = getAllBlogPosts().map((post) => post.slug);
  return Array.from(new Set([...contentSlugs, ...blogSlugs])).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);
  if (blogPost) {
    return {
      title: blogPost.title,
      description: blogPost.description,
      alternates: {
        canonical: getLegacyBlogPostCanonicalUrl(blogPost.slug),
      },
      openGraph: {
        title: blogPost.title,
        description: blogPost.description,
        url: getLegacyBlogPostCanonicalUrl(blogPost.slug),
        type: "article",
        publishedTime: blogPost.publishedAt,
        modifiedTime: blogPost.updatedAt,
        section: blogPost.category,
        tags: blogPost.tags,
        authors: [blogPost.author.name],
        images: [{ url: blogPost.ogImage, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: blogPost.title,
        description: blogPost.description,
        images: [blogPost.ogImage],
      },
      other: {
        "article:published_time": blogPost.publishedAt,
        "article:modified_time": blogPost.updatedAt,
        "article:author": blogPost.author.name,
        "article:section": blogPost.category,
        "article:tag": blogPost.tags.join(", "),
      },
    };
  }

  const page = getPageBySlug(slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.description,
    path: `/${page.slug}/`,
  });
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);
  if (blogPost) {
    return (
      <BlogPostContent
        post={blogPost}
        canonicalUrl={getLegacyBlogPostCanonicalUrl(blogPost.slug)}
      />
    );
  }

  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": page.kind === "post" ? "BlogPosting" : "WebPage",
    headline: page.title,
    description: page.description,
    url: absoluteUrl(`/${page.slug}/`),
    image: absoluteUrl(page.heroImage),
    publisher: {
      "@type": "Organization",
      name: site.legalName,
    },
  };

  return (
    <>
      <JsonLd data={schema} />
      <DetailPage page={page} />
    </>
  );
}
