import { notFound } from "next/navigation";
import { DetailPage } from "@/components/marketing";
import { JsonLd } from "@/components/json-ld";
import { contentPages, getPageBySlug, site } from "@/lib/content";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return contentPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
