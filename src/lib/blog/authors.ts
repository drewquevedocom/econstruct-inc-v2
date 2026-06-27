export interface BlogAuthor {
  slug: string;
  name: string;
  title: string;
  shortBio: string;
  bio: string[];
  credentials: string[];
  image: string;
  linkedin?: string;
}

export const blogAuthors: BlogAuthor[] = [
  {
    slug: "frank-neimroozi",
    name: "Frank Neimroozi",
    title: "Principal & Founder, econstruct",
    shortBio:
      "Frank Neimroozi leads econstruct's commercial and residential construction projects across Los Angeles — restaurants, retail, office TI, custom homes, and fire rebuilds.",
    bio: [
      "Frank Neimroozi is the Principal & Founder of econstruct and has spent more than two decades managing commercial and residential construction in Los Angeles. His work spans restaurant and retail build-outs, office tenant improvements, high-end home renovations, ground-up custom homes, and post-wildfire rebuilds.",
      "Frank works closely with architects, engineers, permit expeditors, and clients to translate project complexity into clear scope, budget, and scheduling decisions — with the accountability of a single project lead from preconstruction through close-out.",
    ],
    credentials: [
      "Licensed General Contractor — CSLB #964015",
      "21+ years building in Los Angeles since 2001",
      "634+ completed commercial and residential projects",
      "Restaurant, retail, office TI, and luxury residential specialist",
    ],
    image: "/frank_blog.png",
    linkedin: "https://www.linkedin.com/company/econstruct-homes",
  },
];

export function getBlogAuthorBySlug(slug: string) {
  return blogAuthors.find((author) => author.slug === slug);
}
