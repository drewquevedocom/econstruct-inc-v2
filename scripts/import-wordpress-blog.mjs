import { promises as fs } from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const contentDir = path.join(rootDir, "content", "blog");
const publicBlogDir = path.join(rootDir, "public", "blog");
const redirectsPath = path.join(rootDir, "src", "lib", "blog", "wordpress-redirects.ts");
const defaultSourceAssetDir = "C:\\Users\\drewq\\OneDrive\\Documentos\\DREW\\drewquevedo\\dq_agentiq\\econstruct\\econstruct-crm\\assets\\blog";

const DEFAULTS = {
  baseUrl: "https://econstructinc.com",
  authorSlug: "frank-neimroozi",
  perPage: 100,
  limit: Number.POSITIVE_INFINITY,
  downloadImages: true,
  overwrite: false,
  status: "publish",
  sourceAssetDir: defaultSourceAssetDir,
};

function parseArgs(argv) {
  const options = { ...DEFAULTS };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === "--base-url" && next) {
      options.baseUrl = next.replace(/\/+$/, "");
      index += 1;
      continue;
    }

    if (arg === "--author-slug" && next) {
      options.authorSlug = next;
      index += 1;
      continue;
    }

    if (arg === "--per-page" && next) {
      options.perPage = Number(next);
      index += 1;
      continue;
    }

    if (arg === "--limit" && next) {
      options.limit = Number(next);
      index += 1;
      continue;
    }

    if (arg === "--status" && next) {
      options.status = next;
      index += 1;
      continue;
    }

    if (arg === "--source-asset-dir" && next) {
      options.sourceAssetDir = next;
      index += 1;
      continue;
    }

    if (arg === "--no-download-images") {
      options.downloadImages = false;
      continue;
    }

    if (arg === "--overwrite") {
      options.overwrite = true;
    }
  }

  return options;
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function decodeHtmlEntities(value) {
  const named = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    apos: "'",
    lt: "<",
    gt: ">",
    mdash: "-",
    ndash: "-",
    hellip: "...",
    rsquo: "'",
    lsquo: "'",
    rdquo: '"',
    ldquo: '"',
    bull: "-",
  };

  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (_, name) => named[name.toLowerCase()] ?? `&${name};`);
}

function repairMojibake(value) {
  return value
    .replace(/â€™/g, "'")
    .replace(/â€˜/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€”/g, "-")
    .replace(/â€“/g, "-")
    .replace(/â€¦/g, "...")
    .replace(/Â /g, " ")
    .replace(/Â/g, "")
    .replace(/\u00a0/g, " ");
}

function cleanText(value) {
  return repairMojibake(decodeHtmlEntities(value ?? ""));
}

function stripHtml(value) {
  return cleanText(
    value
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function truncate(value, maxLength) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 3).trim()}...`;
}

function normalizeCategory(rawCategories) {
  const first = rawCategories[0];
  if (!first) return "Industry Insights";

  const mapped = {
    "construction-tips-and-advice": "Industry Insights",
    "residential-construction": "Custom Homes",
    "commercial-construction": "Industry Insights",
    "restaurant-construction": "Industry Insights",
    "home-remodeling": "Luxury Modernization",
  };

  return mapped[first.slug] ?? cleanText(first.name);
}

function inferLocalAreas(post, tags) {
  const candidates = new Set();
  const haystack = cleanText(
    `${post.title.rendered} ${post.excerpt.rendered} ${tags.map((tag) => tag.name).join(" ")}`,
  ).toLowerCase();
  const knownAreas = [
    "Los Angeles",
    "Beverly Hills",
    "Santa Monica",
    "Brentwood",
    "Pacific Palisades",
    "Calabasas",
    "Malibu",
    "Bel Air",
    "Hollywood Hills",
    "West Hollywood",
    "Manhattan Beach",
    "Burbank",
    "Culver City",
  ];

  for (const area of knownAreas) {
    if (haystack.includes(area.toLowerCase())) candidates.add(area);
  }

  return Array.from(candidates);
}

function extractTerms(post) {
  const embeddedTerms = post?._embedded?.["wp:term"] ?? [];
  const flattened = embeddedTerms.flat();
  return {
    categories: flattened.filter((term) => term.taxonomy === "category"),
    tags: flattened.filter((term) => term.taxonomy === "post_tag"),
  };
}

function extractImageTags(html) {
  const pattern = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const images = [];
  let match;

  while ((match = pattern.exec(html)) !== null) {
    const tag = match[0];
    const src = match[1];
    const altMatch = tag.match(/alt=["']([^"']*)["']/i);
    images.push({
      src,
      alt: cleanText(altMatch?.[1] ?? ""),
    });
  }

  return images;
}

function normalizeWpImageUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "i1.wp.com") {
      return `https://${parsed.pathname.replace(/^\/+/, "")}`;
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

function getFileExtension(url, fallback = ".jpg") {
  try {
    const pathname = new URL(url).pathname;
    const extension = path.extname(pathname);
    return extension || fallback;
  } catch {
    return fallback;
  }
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function findLocalAssetByStem(stem, sourceDir) {
  try {
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });
    const normalizedStem = slugify(stem);

    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const parsed = path.parse(entry.name);
      if (slugify(parsed.name) === normalizedStem) {
        return path.join(sourceDir, entry.name);
      }
    }
  } catch {
    return null;
  }

  return null;
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadImage(url, outputPath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download image: ${url} (${response.status})`);
  }

  const arrayBuffer = await response.arrayBuffer();
  await fs.writeFile(outputPath, Buffer.from(arrayBuffer));
}

async function copyLocalImage(sourcePath, outputPath) {
  await fs.copyFile(sourcePath, outputPath);
}

async function prepareAssetMap(post, slug, options) {
  const imageMap = new Map();
  const featured = post?._embedded?.["wp:featuredmedia"]?.[0];
  const featuredUrl = featured?.source_url ? normalizeWpImageUrl(featured.source_url) : null;
  const inlineImages = extractImageTags(post.content.rendered);
  const seen = new Set();

  await ensureDir(publicBlogDir);

  if (featuredUrl) {
    seen.add(featuredUrl);
    const localOverride = await findLocalAssetByStem(`${slug}-hero`, options.sourceAssetDir);
    const heroFilename = localOverride
      ? path.basename(localOverride)
      : `${slug}-hero${getFileExtension(featuredUrl)}`;
    const heroPath = path.join(publicBlogDir, heroFilename);
    const heroPublicPath = `/blog/${heroFilename}`;

    if (localOverride && !(await fileExists(heroPath))) {
      await copyLocalImage(localOverride, heroPath);
      imageMap.set(featuredUrl, heroPublicPath);
    } else if (!options.downloadImages || (await fileExists(heroPath))) {
      imageMap.set(featuredUrl, heroPublicPath);
    } else {
      try {
        await downloadImage(featuredUrl, heroPath);
        imageMap.set(featuredUrl, heroPublicPath);
      } catch (error) {
        console.warn(`Image download failed for ${slug}: ${featuredUrl}`);
        console.warn(String(error));
      }
    }
  }

  let imageIndex = 1;
  for (const image of inlineImages) {
    const normalizedUrl = normalizeWpImageUrl(image.src);
    if (seen.has(normalizedUrl)) continue;
    seen.add(normalizedUrl);

    const localOverride = await findLocalAssetByStem(
      `${slug}-${String(imageIndex).padStart(2, "0")}`,
      options.sourceAssetDir,
    );
    const filename = localOverride
      ? path.basename(localOverride)
      : `${slug}-${String(imageIndex).padStart(2, "0")}${getFileExtension(normalizedUrl)}`;
    const outputPath = path.join(publicBlogDir, filename);
    const publicPath = `/blog/${filename}`;

    if (localOverride && !(await fileExists(outputPath))) {
      await copyLocalImage(localOverride, outputPath);
      imageMap.set(normalizedUrl, publicPath);
    } else if (!options.downloadImages || (await fileExists(outputPath))) {
      imageMap.set(normalizedUrl, publicPath);
    } else {
      try {
        await downloadImage(normalizedUrl, outputPath);
        imageMap.set(normalizedUrl, publicPath);
      } catch (error) {
        console.warn(`Image download failed for ${slug}: ${normalizedUrl}`);
        console.warn(String(error));
      }
    }

    imageIndex += 1;
  }

  return {
    imageMap,
    featuredUrl,
    featuredAlt: cleanText(featured?.alt_text || ""),
  };
}

function convertImage(image, imageMap) {
  const normalizedUrl = normalizeWpImageUrl(image.src);
  const outputUrl = imageMap.get(normalizedUrl) ?? normalizedUrl;
  return `![${cleanText(image.alt || "")}](${outputUrl})`;
}

function convertImageTags(html, imageMap) {
  return extractImageTags(html)
    .map((image) => convertImage(image, imageMap))
    .filter(Boolean)
    .join("\n\n");
}

function convertSingleImage(tag, imageMap) {
  const srcMatch = tag.match(/src=["']([^"']+)["']/i);
  const altMatch = tag.match(/alt=["']([^"']*)["']/i);

  if (!srcMatch) return "";

  return convertImage(
    {
      src: srcMatch[1],
      alt: altMatch?.[1] ?? "",
    },
    imageMap,
  );
}

function htmlToMarkdown(html, imageMap) {
  let output = html;

  output = output.replace(/<script[\s\S]*?<\/script>/gi, "");
  output = output.replace(/<style[\s\S]*?<\/style>/gi, "");
  output = output.replace(/<figure[\s\S]*?<\/figure>/gi, (match) => `${convertImageTags(match, imageMap)}\n\n`);
  output = output.replace(/<img[^>]*>/gi, (match) => convertSingleImage(match, imageMap));
  output = output.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, text) => `# ${stripHtml(text)}\n\n`);
  output = output.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, text) => `## ${stripHtml(text)}\n\n`);
  output = output.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, text) => `### ${stripHtml(text)}\n\n`);
  output = output.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, text) => `#### ${stripHtml(text)}\n\n`);
  output = output.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, text) => {
    return `${stripHtml(text).split(/\n+/).map((line) => `> ${line.trim()}`).join("\n")}\n\n`;
  });
  output = output.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, text) => `- ${stripHtml(text)}\n`);
  output = output.replace(/<\/?(ul|ol)[^>]*>/gi, "\n");
  output = output.replace(/<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
    return `[${stripHtml(text)}](${cleanText(href)})`;
  });
  output = output.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => `**${stripHtml(text)}**`);
  output = output.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, text) => `*${stripHtml(text)}*`);
  output = output.replace(/<br\s*\/?>/gi, "\n");
  output = output.replace(/<\/p>/gi, "\n\n");
  output = output.replace(/<p[^>]*>/gi, "");
  output = output.replace(/<div[^>]*>/gi, "\n");
  output = output.replace(/<\/div>/gi, "\n");
  output = output.replace(/<[^>]+>/g, "");
  output = cleanText(output);

  return output
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function yamlQuote(value) {
  return JSON.stringify(value ?? "");
}

function renderFrontmatter(post, slug, heroImage, heroImageAlt, category, tags, excerpt, description, localAreas, options) {
  const tagLines = tags.length
    ? `tags:\n${tags.map((tag) => `  - ${yamlQuote(tag)}`).join("\n")}`
    : "tags: []";

  const areaLines = localAreas.length
    ? `localAreas:\n${localAreas.map((area) => `  - ${yamlQuote(area)}`).join("\n")}`
    : "localAreas: []";

  return `---
title: ${yamlQuote(cleanText(post.title.rendered))}
slug: ${yamlQuote(slug)}
description: ${yamlQuote(description)}
category: ${yamlQuote(category)}
${tagLines}
publishedAt: ${yamlQuote(post.date.slice(0, 10))}
updatedAt: ${yamlQuote(post.modified.slice(0, 10))}
authorSlug: ${yamlQuote(options.authorSlug)}
reviewedBy: ${yamlQuote("Reviewed by econstruct editorial team")}
factCheckedBy: ${yamlQuote("Fact-checked by econstruct project development team")}
heroImage: ${yamlQuote(heroImage)}
heroImageAlt: ${yamlQuote(heroImageAlt || cleanText(post.title.rendered))}
ogImage: ${yamlQuote(heroImage)}
excerpt: ${yamlQuote(excerpt)}
targetKeyword: ${yamlQuote(tags[0] || cleanText(post.title.rendered))}
takeaways: []
sources: []
faq: []
relatedSlugs: []
${areaLines}
---
`;
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${url} (${response.status})`);
  }

  return response.json();
}

async function fetchAllPosts(options) {
  const posts = [];
  let page = 1;

  while (posts.length < options.limit) {
    const url = new URL(`${options.baseUrl}/wp-json/wp/v2/posts`);
    url.searchParams.set("per_page", String(options.perPage));
    url.searchParams.set("page", String(page));
    url.searchParams.set("status", options.status);
    url.searchParams.set("_embed", "1");

    const pagePosts = await fetchJson(url);
    if (!Array.isArray(pagePosts) || pagePosts.length === 0) break;

    posts.push(...pagePosts);

    if (pagePosts.length < options.perPage) break;
    page += 1;
  }

  return posts.slice(0, options.limit);
}

async function writeRedirects(redirects) {
  const lines = redirects
    .sort((a, b) => a.source.localeCompare(b.source))
    .map(
      (redirect) =>
        `  { source: ${yamlQuote(redirect.source)}, destination: ${yamlQuote(redirect.destination)}, permanent: true },`,
    )
    .join("\n");

  const contents = `// AUTO-GENERATED by scripts/import-wordpress-blog.mjs
// Do not edit manually unless you are intentionally overriding generated redirects.

export interface WordPressBlogRedirect {
  source: string;
  destination: string;
  permanent: boolean;
}

export const wordpressBlogRedirects: WordPressBlogRedirect[] = [
${lines}
];
`;

  await fs.writeFile(redirectsPath, contents, "utf8");
}

async function run() {
  const options = parseArgs(process.argv.slice(2));
  const posts = await fetchAllPosts(options);
  const redirects = [];
  const results = {
    imported: 0,
    skipped: 0,
    failed: 0,
  };

  await ensureDir(contentDir);

  for (const post of posts) {
    const slug = post.slug;
    const outputPath = path.join(contentDir, `${slug}.md`);
    const alreadyExists = await fileExists(outputPath);

    if (alreadyExists && !options.overwrite) {
      results.skipped += 1;
      redirects.push({
        source: new URL(post.link).pathname.replace(/\/$/, ""),
        destination: `/blog/${slug}`,
      });
      console.log(`Skipped existing post: ${slug}`);
      continue;
    }

    try {
      const { categories, tags: postTags } = extractTerms(post);
      const tagNames = postTags.map((tag) => cleanText(tag.name));
      const category = normalizeCategory(categories);
      const excerptText = truncate(stripHtml(post.excerpt.rendered || post.content.rendered), 220);
      const description = truncate(excerptText, 160);
      const localAreas = inferLocalAreas(post, postTags);
      const { imageMap, featuredUrl, featuredAlt } = await prepareAssetMap(post, slug, options);
      const firstImage = imageMap.values().next().value;
      const heroImage = (featuredUrl ? imageMap.get(featuredUrl) : firstImage) || "/blog/blog_01_palisades_rebuild_guide.png";
      const body = htmlToMarkdown(post.content.rendered, imageMap);
      const frontmatter = renderFrontmatter(
        post,
        slug,
        heroImage,
        featuredAlt,
        category,
        tagNames,
        excerptText,
        description,
        localAreas,
        options,
      );

      await fs.writeFile(outputPath, `${frontmatter}\n${body}\n`, "utf8");
      redirects.push({
        source: new URL(post.link).pathname.replace(/\/$/, ""),
        destination: `/blog/${slug}`,
      });
      results.imported += 1;
      console.log(`Imported: ${slug}`);
    } catch (error) {
      results.failed += 1;
      console.error(`Failed: ${slug}`);
      console.error(error);
    }
  }

  await writeRedirects(redirects);

  console.log("");
  console.log(`Imported: ${results.imported}`);
  console.log(`Skipped: ${results.skipped}`);
  console.log(`Failed: ${results.failed}`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
