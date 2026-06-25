import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/blog/BlogPostContent";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import { getLegacyBlogPostCanonicalUrl } from "@/lib/blog/paths";

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  const url = getLegacyBlogPostCanonicalUrl(post.slug);

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: post.category,
      tags: post.tags,
      authors: [post.author.name],
      images: [{ url: post.ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.ogImage],
    },
    other: {
      "article:published_time": post.publishedAt,
      "article:modified_time": post.updatedAt,
      "article:author": post.author.name,
      "article:section": post.category,
      "article:tag": post.tags.join(", "),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogPostContent
      post={post}
      canonicalUrl={getLegacyBlogPostCanonicalUrl(post.slug)}
    />
  );
}


